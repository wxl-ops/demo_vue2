<template>
  <div class="container">
    <div class="cases-banner">
      <div>
        <img src="../../assets/2banner_pc.png" />
      </div>
    </div>
    <div class="outstanding-cases">
      <div class="cases_wrapper">
        <div class="excellent_cases_wrapper" v-if="excellentCasesList.length">
          <div
            class="excellent_cases_item"
            v-for="(excellentCasesItem, index) in excellentCasesList"
            :key="excellentCasesItem.id"
          >
            <div class="excellent_cases_img">
              <img :src="excellentCasesItem.cover" />
              <div class="two_button">
                <p class="text_detail" @click="handleClickDetail(index)">
                  <img src="../../assets/case.e246742.png" />&nbsp;<span
                    >案例简介</span
                  >
                </p>
                <p class="video_detail" @click="handleClickVideo(index)">
                  <img src="../../assets/video.1675dae.png" />&nbsp;<span
                    >宣传视频</span
                  >
                </p>
              </div>
            </div>
            <div class="excellent_cases_text">
              <div class="text_img">
                <img :src="excellentCasesItem.logo" />
              </div>
              <div class="div_text">
                <h2>{{ excellentCasesItem.title }}</h2>
                <ul>
                  <li>所属单位：{{ excellentCasesItem.company }}</li>
                  <li>所属领域：{{ excellentCasesItem.field }}</li>
                  <li>关键词：{{ excellentCasesItem.key_word }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cases-top-img">
        <div class="cases-img-title">
          <img src="../../assets/2022TOP10.png" />
        </div>
        <div class="cases-img-content">
          <img src="../../assets/top10_pc.png" />
        </div>
      </div>
      <div class="cases-shortlisted-img">
        <div class="cases-img-title">
          <img src="../../assets/2022ruwei.png" />
        </div>
        <div class="cases-img-content">
          <div class="cases-img-content-title">
            <img src="../../assets/2title_ruwei1.png" alt="" />
          </div>
          <div class="cases-img-content-item">
            <img src="../../assets/ruwei1_pc.png" alt="" />
          </div>
          <div class="cases-img-content-title">
            <img src="../../assets/2title_ruwei2.png" alt="" />
          </div>
          <div class="cases-img-content-item">
            <img src="../../assets/ruwei2_pc.png" alt="" />
          </div>
          <div class="cases-img-content-title">
            <img src="../../assets/2title_ruwei3.png" alt="" />
          </div>
          <div class="cases-img-content-item">
            <img src="../../assets/ruwei3_pc.png" alt="" />
          </div>
        </div>
      </div>
      <el-dialog
        :visible.sync="DetailDialogVisible"
        width="30%"
        class="detail_dialog_style"
        v-if="excellentCasesList.length"
      >
        <h1 slot="title" class="el-dialog__title">
          {{ excellentCasesList[currentIdDetail].title }}
        </h1>
        <div class="detail_dialog_wrapper">
          <div class="dialog_header">
            <h2>简介</h2>
            <div class="toggle_language">
              <p
                @click="handleToggleZh"
                :class="this.isCurrent ? 'is_current' : ''"
              >
                中文
              </p>
              <p
                @click="handleToggleEn"
                :class="this.isCurrent ? '' : 'is_current'"
              >
                EN
              </p>
            </div>
          </div>
          <p class="content_p">
            {{
              this.isCurrent
                ? excellentCasesList[currentIdDetail].chinese_intro
                : excellentCasesList[currentIdDetail].english_intro
            }}
          </p>
        </div>
      </el-dialog>
      <el-dialog
        :visible.sync="VideoDialogVisible"
        width="30%"
        class="detail_dialog_style"
        @close="handleCloseVideo"
        v-if="excellentCasesList.length"
      >
        <h1 slot="title" class="el-dialog__title">
          {{ excellentCasesList[currentIdDetail].title }}
        </h1>
        <div class="video_wrapper">
          <video
            :src="excellentCasesList[currentIdDetail].video"
            controls
            autoplay
            width="100%"
            ref="ref_video"
          ></video>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import apis from "../../apis/index";
export default {
  name: "OutstandingCases",
  data() {
    return {
      currentIdDetail: 0,
      isCurrent: true,
      DetailDialogVisible: false,
      VideoDialogVisible: false,
      excellentCasesList: [],
    };
  },

  methods: {
    handleLogin() {
      apis
        .postLogin({ username: this.username, password: this.password })
        .then((res) => {
          this.isLogin = true;
        });
    },
    handleClickDetail(currentIdDetail) {
      this.DetailDialogVisible = true;
      this.currentIdDetail = currentIdDetail;
    },
    handleClickVideo(currentIdVideo) {
      this.VideoDialogVisible = true;
      this.currentIdDetail = currentIdVideo;
    },
    handleToggleZh() {
      this.isCurrent = true;
    },
    handleToggleEn() {
      this.isCurrent = false;
    },

    handleCloseVideo() {
      this.$refs.ref_video.pause();
    },
  },
  created() {
    apis.getExcellentCasesList().then((res) => {
      this.excellentCasesList = res.data.data;
    });
  },
};
</script>

<style lang='scss' scoped>
@mixin ellipsis_text-row {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
@mixin ellipsis_text_rows {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.is_current {
  background-color: orange;
  border-color: orange !important;
  color: #fff;
}
.detail_dialog_style {
  h1 {
    font-size: 24px;
    @include ellipsis_text-row();
    padding-right: 50px;
  }
  .detail_dialog_wrapper {
    padding: 20px;
    .dialog_header {
      display: flex;
      justify-content: space-between;
      .toggle_language {
        display: flex;
        justify-content: center;
        p {
          padding: 4px 0;
          width: 50px;
          text-align: center;
          cursor: pointer;
          &:first-child {
            border: 1px solid #ccc;
            border-radius: 20px 0 0 20px;
          }
          &:last-child {
            border: 1px solid #ccc;
            border-radius: 0 20px 20px 0;
          }
        }
      }
    }
    .content_p {
      font-size: 16px;
      text-indent: 2em;
      text-align: justify;
      margin-top: 14px;
      padding-right: 20px;
      line-height: 1.8;
      height: 360px;
      overflow: auto;
      word-break: break-word;
    }
  }

  .video_wrapper {
    background: #000;
    width: 100%;
    height: 100%;
  }
}
.container {
  .cases-banner {
    background: url("../../assets/2banner_back_pc.jpg") 0% 0%/100% 100%
      no-repeat;
    height: 466px;
    margin-bottom: 75px;
    display: flex;
    align-items: center;
    div {
      width: 1200px;
      margin: 0 auto;
    }
  }
}
.outstanding-cases {
  width: 1200px;
  margin: 0 auto;

  .cases_wrapper {
    margin-bottom: 75px;

    .excellent_cases_wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .excellent_cases_item {
        width: 49%;
        height: 568px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 8px 0 rgba(35, 75, 205, 0.27);
        .excellent_cases_img {
          position: relative;
          & > img {
            width: 100%;
          }
          .two_button {
            position: absolute;
            right: 15px;
            bottom: 20px;
            display: flex;
            text-align: center;
            p {
              padding: 4px 14px;
              border-radius: 20px;
              cursor: pointer;
            }
            .text_detail {
              background-color: #ffac00;
              margin-right: 20px;
              img {
                width: 22px;
                vertical-align: middle;
              }
              span {
                font-size: 14px;
              }
            }
            .video_detail {
              background-color: #3aaef3;
              img {
                width: 22px;
                vertical-align: middle;
              }
              span {
                font-size: 14px;
              }
            }
          }
        }
        .excellent_cases_text {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 32px 16px;
          background: #fff;
          color: #000;
          margin-top: -5px;
          .text_img {
            width: 159px;
            flex-basis: auto;
            // flex: 2;
            margin-right: 20px;
            img {
              width: 100%;
            }
          }
          .div_text {
            // flex: 1;
            width: 68%;
            flex-basis: auto;
            font-size: 14px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            h2 {
              @include ellipsis_text_rows;
            }
            ul {
              margin-top: -20px;
              li {
                @include ellipsis_text_row;
              }
            }
          }
        }
      }
    }
  }
  .cases-top-img {
    padding-bottom: 75px;
    .cases-img-title {
      padding-bottom: 65px;
    }
  }
  .cases-shortlisted-img {
    padding-bottom: 75px;
    .cases-img-title {
      padding-bottom: 65px;
    }
    .cases-img-content {
      .cases-img-content-title {
        display: flex;
        justify-content: center;
      }
      .cases-img-content-item {
        padding: 30px 0;
      }
    }
  }
}
</style>
<style lang='scss'>
.outstanding-cases {
  .el-dialog__body {
    padding: 0;
  }
}
</style>
