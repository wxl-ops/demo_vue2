<template>
  <div class="custom-vue-cropper">
    <div class="l-tabbar-upload-box">
      <div class="hint">
        <div class="upload">
          <Upload
            ref="upload"
            action="string"
            accept="image/jpeg,image/jpg,image/png"
            :format="['jpg', 'jpeg', 'png']"
            :show-upload-list="false"
            :before-upload="handleSuccess"
            multiple
          >
            <!-- <Button type="primary" :disabled="!!value">上传图片</Button> -->
            <div class="idImg">
              <div class="idImgBox" v-if="value">
                <img :src="value" class="imgSty" />
                <div class="popContainer" @click.stop="handlerClick">
                  <Icon
                    type="ios-trash-outline"
                    size="30"
                    color="#fff"
                    @click.stop="deleteImg"
                  />
                </div>
                <div></div>
              </div>
              <div class="addImg" v-else>
                <Icon type="ios-add-circle-outline" color="skyblue" size="50" />
                <div class="tips">{{ tips }}</div>
              </div>
            </div>
          </Upload>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disabed */
import CosCloud from "cos-js-sdk-v5";
import api from "@/api/common.js";
export default {
  name: "CustomVueCropper",
  // components: { showIframe },
  props: {
    // 最大可上传的文件大小 默认为0-不限制大小  单位MB
    maxSize: {
      type: Number,
      default: 3
    },
    value: {
      // type: String,
      default: ""
    },
    tips: {
      type: String,
      default: ""
    },
    moreImage: {
      type: Boolean,
      default: false
    },
    imageArr: {
      type: Array,
      default: () => {
        return [];
      }
    },
    imageNumber: {
      type: Number,
      default: 0
    },
    isOperationLocation: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: -1
    },
    id: {
      type: String,
      default: ""
    },
    fixedBox: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 300
    },
    fixedNumber: {
      type: Array,
      default: () => {
        return [1, 1];
      }
    }
  },
  data() {
    return {
      cos: null, // cos对象
      cosData: {}, // cos配置
      image_url: "",
      fileList: [],
      // 可上传图片格式类型 传 * 代表不限制文件类型
      imageAccept: {
        type: String,
        default: "image/png, image/jpeg, image/jpg"
      }
    };
  },
  watch: {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    handleSuccess(file) {
      const type = file.type;
      console.log("上传文件格式 -> ", type);
      // 校验文件大小
      if (this.maxSize !== 0) {
        const isLtMax = file.size / 1024 / 1024 <= this.maxSize;
        if (!isLtMax) {
          console.log(1111);
          this.$Message.error(
            `您选择的图片太大,请选择小于${this.maxSize}M的图片!`
          );
          return false;
        }
        this.getCosConfig(file);
      }
    },
    // 获取COS配置
    getCosConfig(file) {
      console.log(api);
      api
        .GetCosData()
        .then(res => {
          const cosInfo = res.data;
          this.initCos(cosInfo, file);
        })
        .catch(err => {
          this.$message.error(err.data.message || "获取cos配置失败!");
        });
    },
    // 初始化cos
    initCos(cosInfo, file) {
      const _this = this;
      this.cosData = cosInfo;
      this.cos = new CosCloud({
        // eslint-disable-next-line object-shorthand
        getAuthorization: function(options, callback) {
          // eslint-disable-next-line standard/no-callback-literal
          callback({
            TmpSecretId: _this.cosData.credentials.tmpSecretId,
            TmpSecretKey: _this.cosData.credentials.tmpSecretKey,
            XCosSecurityToken: _this.cosData.credentials.sessionToken,
            ExpiredTime: _this.cosData.expiredTime
          });
        }
      });
      this.$nextTick(() => {
        this.initCosSuccess = true;
        this.uploadFile(file);
      });
    },
    // 上传文件
    uploadFile(file) {
      console.log(file);
      const _this = this;
      const name = `${this.cosData.folder}/${new Date().valueOf()}${file.name}`;
      console.log("上传文件名称 -> ", name);
      console.log("uploadFile -> this.cosData", this.cosData);
      this.cos.putObject(
        {
          Bucket: _this.cosData.bucket,
          Region: _this.cosData.region,
          Key: `${name}`,
          Body: file,
          onHashProgress(progressData) {
            console.log("校验中", JSON.stringify(progressData));
          },
          onProgress(progressData) {
            console.log("上传中", progressData);
            _this.uploadProgress = parseInt(progressData.percent * 100);
          }
        },
        /* eslint-disable object-shorthand */
        function(err, data) {
          _this.$emit("end");
          if (err) {
            console.log("上传失败 -> err", err);
            _this.uploadProgress = 0;
            _this.uploadLoading = false;
            _this.initCosSuccess = false;
            _this.$message.error("cos上传失败!");
            return;
          }
          console.log("文件上传成功!");
          console.log("uploadFile -> data", data);
          const fileUrl = "https://" + data.Location;
          _this.uploadProgress = 0;
          _this.uploadLoading = false;
          if (typeof _this.value === "string") {
            _this.$emit("onUploadImage", fileUrl, _this.id);
          } else {
            _this.fileList.push(fileUrl);
            _this.$emit("onUploadImage", _this.fileList, _this.id);
          }
          console.log("=============文件上传结束=============");
        }
      );
    },
    deleteImg() {
      const that = this;
      this.$Modal.confirm({
        title: "删除",
        content: `确定要删除该图片吗?`,
        closable: true,
        onOk: () => {
          that.setParsntSrc("");
        }
      });
    },
    setParsntSrc(picSrc) {
      this.image_url = picSrc;
      if (this.index !== -1) {
        const item = {
          image_url: this.image_url,
          index: this.index
        };
        this.$emit("onUploadImage", item, this.id);
      } else {
        this.$emit("onUploadImage", this.image_url, this.id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tips {
  color: #3399ff;
}
.idImg {
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  border: 2px solid skyblue;
  border-radius: 5px;
  .imgSty {
    position: absolute;
    top: 0;
    left: 0;
    width: 246px;
    height: 146px;
    margin: 0;
  }
  .popContainer {
    position: absolute;
    bottom: 0px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    width: 246px;
    height: 146px;
    left: 0;
    // right: 0;
    // bottom: 0;
    // z-index: 999;
    // background: rgba(0, 0, 0, 0.3);
  }
  .popContainer:hover {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 246px;
    height: 146px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: rgba(0, 0, 0, 0.3);
  }
  .addImg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.custom-vue-cropper {
  display: inline-block;
  cursor: pointer;
}
.cropper {
  width: auto;
}
.l-tabbar-upload-box {
  .hint {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .size {
      margin-left: 10px;
    }
    .upload {
      position: relative;
    }
  }
  &-img {
    img {
      vertical-align: bottom;
      display: inline-block;
      max-width: 300px;
      max-height: 150px;
      margin-right: 6px;
    }
    i {
      vertical-align: bottom;
      display: inline-block;
      cursor: pointer;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
