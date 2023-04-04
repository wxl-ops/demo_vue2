<template>
  <div class="custom-vue-cropper">
    <div class="l-tabbar-upload-box">
      <div class="hint">
        <div class="upload">
          <Upload
            ref="upload"
            action="string"
            accept=".rar,.zip,.doc,.docx,.pdf"
            :format="['rar', 'zip', 'doc', 'docx', 'pdf']"
            :show-upload-list="false"
            :before-upload="handleSuccess"
            multiple
          >
            <div class="idImg"></div>
          </Upload>
        </div>
      </div>
    </div>
    <div class="file_name" v-if="value">
      <img src="../assets/icon_wjj.png" class="logo" />
      <div class="text">
        {{ fileName }}
      </div>
      <img
        src="../assets/icon_tc_close_pc.png"
        class="iocn"
        @click.stop="deleteImg"
      />
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
      default: 20
    },
    tips: {
      type: String,
      default: ""
    },
    value: {
      // type: String,
      default: ""
    },
    fileName:{
       default: ""
    },
    moreImage: {
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
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cos: null, // cos对象
      cosData: {}, // cos配置
      image_url: "",
      fileList: [],
      file_name: ""
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
            `您选择的文件太大,请选择小于${this.maxSize}M的文件!`
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
            _this.$emit("onUploadFile", fileUrl, _this.id,file.name);
          } else {
            _this.fileList.push(fileUrl);
            _this.$emit("onUploadFile", _this.fileList, _this.id,file.name);
          }
          console.log("=============文件上传结束=============");
        }
      );
    },
    deleteImg() {
      const that = this;
      this.$Modal.confirm({
        title: "删除",
        content: `确定要删除` + this.tips + `吗?`,
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
        this.$emit("onUploadFile", item, this.id);
      } else {
        this.$emit("onUploadFile", this.image_url, this.id);
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
  width: 108px;
  height: 36px;
  border: 2px solid skyblue;
  border-radius: 5px;
  opacity: 0;
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
  position: absolute;
  top: 0px;
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
.file_name {
  width: 457px;
  height: 36px;
  background: #f9f9f9;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  position: absolute;
  top: 0px;
  left: 120px;
  .logo {
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-top: 2px;
  }
  .iocn {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-top: 5px;
  }
  .text {
    display: inline-block;
    margin-left: 8px;
    margin-right: 12px;
    width: 384px;
    height: 20px;
    font-size: 14px;
    font-family: pingfang SC;
    font-weight: 400;
    color: #62666e;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
