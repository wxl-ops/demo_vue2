<template>
  <div>
    <div class="backstage-login">
      <div class="header">
        <div class="left">
          <img src="../../assets/logo_zc-nav-h5.png" class="logo" />
          <div v-if="configInfo.session" class="title">
            {{ configInfo.session + configInfo.name + configInfo.system }}
          </div>
          <div v-else class="title">
            世界智能大会
          </div>
        </div>
      </div>
      <div class="page-login-outer">
        <div class="page-login-wrap">
          <img
            src="../../assets/login_banner-h5.png"
            class="page-login-banner"
          />
          <div class="page-login-inner">
            <div class="page-login-hd" v-if="configInfo.name">
              {{ configInfo.name + configInfo.system }}
            </div>
            <div v-else class="page-login-hd">
              世界智能大会
            </div>
            <!-- <div class="page-login-opt">
              线上预约、线下洽谈
            </div> -->
            <div class="page-login-opt-text">
              服务政企、企企之间交流合作
            </div>
            <div class="page-login-opt-btns">
              <button
                class="wic-btn wic-btn--hole size-l"
                @click="goPage('login')"
              >
                <img src="../../assets/icon_dl_h5.png" class="wic-icon" />
                <span class="wic-btn__text">登录</span>
              </button>
              <button
                class="wic-btn wic-btn--hole size-l"
                @click="goPage('register')"
              >
                <img src="../../assets/icon_qyzc_h5.png" class="wic-icon" />
                <span class="wic-btn__text">企业注册</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="page-login-content">
        <div class="page-login-details">
          <div class="page-login-group">
            <div class="page-login-title">
              <div class="page-login-sort">
                <img src="../../assets/image_bt_sz_h5.png" class="sort-login" />
                <span class="sort-text">01</span>
              </div>
              <div class="page-login-tip">
                <div class="tip-content">
                  <span class="tip-background"></span>
                  <span class="tip-text">双边会谈介绍</span>
                </div>
              </div>
            </div>
            <div class="page-login-introduce">
            双边会谈是世界智能大会为政府和企业、企业与企业间面对面开展洽谈搭建的服务平台，目前已连续成功举办三届，第六届世界智能大会将继续发挥桥梁作用，加强会谈预约的组织与推动，扩大会谈规模，提供全程会谈服务保障，促成更多的商务合作
            </div>
          </div>
          <div class="page-login-group">
            <div class="page-login-title">
              <div class="page-login-sort">
                <img src="../../assets/image_bt_sz_h5.png" class="sort-login" />
                <span class="sort-text">02</span>
              </div>
              <div class="page-login-tip">
                <div class="tip-content">
                  <span class="tip-background"></span>
                  <span class="tip-text">在线洽谈说明</span>
                </div>
              </div>
            </div>
            <!-- <div class="page-login-procedure">
              <div class="procedure-title">
                <span :class="isbrowser ? 'procedure-text' : 'procedure-texts'"
                  >第一阶段：</span
                >
                <span :class="isbrowser ? 'procedure-tip' : 'procedure-tips'"
                  >报名期（3月-4月）企业报名</span
                >
              </div>
              <div class="procedure-content">
                企业通过双边会谈官网页面进行注册，预留企业资质、联系方式等信息，注册后等待系统审核。审核通过后将通过电话、短信等形式予以通知。
              </div>
              <div class="procedure-title">
                <span :class="isbrowser ? 'procedure-text' : 'procedure-texts'">
                  第二阶段：
                  </span>
                <span :class="isbrowser ? 'procedure-tip' : 'procedure-tips'"
                  >确认期（6月9日-6月17日）预约会议</span
                >
              </div>
              <div class="procedure-content">
                企业登录进入双边会谈系统，预约想洽谈的政府部门或企业，并选择线下会谈，待邀请方与受邀方共同确认后，系统将记录该信息并进入场次排期序列，排期确认后将通过电话、短信等形式予以通知。
              </div>
              <div class="procedure-title">
                <span :class="isbrowser ? 'procedure-text' : 'procedure-texts'"
                  >第三阶段：</span
                >
                <span :class="isbrowser ? 'procedure-tip' : 'procedure-tips'"
                  >洽谈期（6月9日-6月24日）会谈开展</span
                >
              </div>
              <div class="procedure-content">
                企业根据预约的会议时间，如期参加线下会谈。
              </div>
            </div> -->
            <div class="page-login-tips">
              <p>1. 邀约时间：每周一至每周五（9:00 -12:00，14:00 -18:00）</p>
              <p class="row">2. 会谈时间：每场会谈建议不超过1小时</p>
              <p class="row">3. 会议系统：云双边会谈将使用腾讯会议进行，可提前下载好腾讯会议App</p>
              <p class="row">4. 温馨提示：为保障会谈双方权益，线上会议过程中会开启录屏，录屏仅作为监管用途不做他用，请自觉按照行为规范文明发言</p>
            </div>
          </div>
          <div class="page-login-group">
            <div class="page-login-title" style="height:56px">
              <div class="page-login-sort">
                <img src="../../assets/image_bt_sz_h5.png" class="sort-login" />
                <span class="sort-text">03</span>
              </div>
              <div class="page-login-tip">
                <div class="tip-content">
                  <span class="tip-background-top"></span>
                  <span class="tip-text">打造永不落幕的世界智能大会“双边会谈”活动</span>
                  <span class="tip-background-bottom"></span>
                </div>
              </div>
            </div>
            <!-- <div class="page-login-introduce">
              <div class="introduce-title">
                <span class="introduce-mark"></span>
                <span :class="isbrowser ? 'introduce-text' : 'introduce-texts'">
                  时间：第六届世界智能大会期间 (2022年6月9日-6月24日)
                </span>
              </div>
              <div class="introduce-title special">
                <span class="introduce-mark"></span>
                <span :class="isbrowser ? 'introduce-text' : 'introduce-texts'">
                  地点：国家会展中心 (天津)
                </span>
              </div>
            </div> -->
            <div class="page-login-tips">
              <p>1. 闭会后，“双边会谈”活动将长期对外开放，为政企、企企提供对接洽谈的桥梁</p>
              <p class="row">2. 会谈地点：如需线下会谈，可酌情安排在大会组委会秘书处（天津市河西区友谊路35号城市大厦801会议室）</p>
            </div>
          </div>
          <div class="page-login-group">
            <div class="page-login-title">
              <div class="page-login-sort">
                <img src="../../assets/image_bt_sz_h5.png" class="sort-login" />
                <span class="sort-text">04</span>
              </div>
              <div class="page-login-tip">
                <div class="tip-content">
                  <span class="tip-background"></span>
                  <span class="tip-text">联系方式</span>
                </div>
              </div>
            </div>
            <div class="page-login-introduce">
              <div class="introduce-title">
                <span class="introduce-mark"></span>
                <span :class="isbrowser ? 'introduce-text' : 'introduce-texts'">
                  世界智能大会组委会秘书处：
                </span>
              </div>
              <div class="introduce-bottom">
                <div class="introduce-btn">
                  <img src="../../assets/icon_me_dh_h5.png" class="btn-icon" />
                  <span class="btn-text">
                    咨询热线：022-83608031
                  </span>
                </div>
                <div class="introduce-btn">
                  <img src="../../assets/icon_me_yx_h5.png" class="btn-icon" />
                  <span class="btn-text">
                    邮箱地址：fym@wicongress.org
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-login-bottom">
        <p class="bottom-text">世界智能大会 WORLD INTELLIGENCE CONGRESS</p>
        <p style="margin-top:12px">
          <span class="bottom-tip">津ICP备17008349号-3</span>
          <img src="../../assets/ioc_bootom_h5.png" class="bottom-logo" />
          <span class="bottom-tip">津公网安备 12010302002098号</span>
        </p>
      </div>
    </div>
    <div class="backstage-login-modal" v-if="isMark"></div>
    <div class="modal-content" v-if="isMark">
      <img src="../../assets/icon_tc_close.png" class="logo" @click="close" />
      <div v-if="state === 'login'">
        <p class="modal-title">登录</p>
        <p class="modal-text">请复制以下链接到PC端进行登录</p>
        <p class="modal-url">https://meeting.wicongress.org.cn</p>
        <p class="modal-url">/login</p>
      </div>
      <div v-if="state === 'register'">
        <p class="modal-title">注册</p>
        <p class="modal-text">请复制以下链接到PC端进行注册</p>
        <p class="modal-url">https://meeting.wicongress.org.cn</p>
        <p class="modal-url">/register/register</p>
      </div>
      <div class="modal-button" @click="copy(text,$event)">复制链接</div>
    </div>
  </div>
</template>

<script>
import apis from "@/api/common.js";
import clip from '@/utils/clipboard'
export default {
  data() {
    return {
      configInfo: {},
      isbrowser: false,
      isMark: false,
      text: "",
      state: "login"
    };
  },
  created() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    } else {
      this.$router.push({ path: "/nav" });
    }
    this.isMac();
    apis
      .GetTimeRange()
      .then(res => {
        this.configInfo = res.data;
        console.log("this.configInfo", this.configInfo);
        if (this.configInfo.session) {
          // document.title = `第${this.configInfo.session}届世界智能大会双边会谈系统`
          document.title =
            this.configInfo.session +
            this.configInfo.name +
            this.configInfo.system;
        }
      })
      .catch(err => {
        // this.$message.error(err.data.message || "获取配置失败!");
      });
  },
  methods: {
    isMac() {
      let isMac = /macintosh|mac os x/i.test(navigator.userAgent);
      if (isMac) {
        this.isbrowser = true;
      }else{
        this.isbrowser = false;
      }
      // console.log(this.isbrowser);
    },
    goPage(val) {
      this.isMark = true;
      this.state = val;
      if (val === "login") {
        this.text = "https://meeting.wicongress.org.cn/login";
      } else {
        this.text = "https://meeting.wicongress.org.cn/register/register";
      }
      // this.$Message.success({
      //   background: true,
      //   content: "即将启动，敬请期待"
      // });
      // return false;
    },
    //关闭弹窗
    close() {
      this.isMark = false;
    },
    //复制链接
    copy(text, event) {
      clip(text, event)
    }
  },
  watch: {
    isMark(newValue) {
      newValue
        ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
        : (document.getElementsByTagName("body")[0].style.overflow = "scroll");
    }
  }
};
</script>

<style lang="scss" scoped>
// #app {
//   overflow-x: hidden;
// }
.backstage-login {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  .header {
    position: fixed;
    top: 0;
    z-index: 11;
    font-weight: 400;
    overflow: hidden;
    display: flex;
    height: 60px;
    width: 100%;
    align-items: center;
    background: #ffffff;
    box-sizing: border-box;
    .left {
      display: flex;
      flex: 1;
      margin: 18px 0px 17px 0px;
      margin-left: 16px;
      .logo {
        height: 25px;
      }
      .title {
        font-size: 16px;
        font-family: pingfang SC;
        font-weight: 500;
        color: #2a2c2e;
        line-height: 25px;
        display: flex;
        align-items: center;
        margin-left: 8px;
      }
    }
  }
  .page-login-outer {
    width: 100%;
    margin-top: 60px;
    background-color: #000517;
    .page-login-wrap {
      margin: 0px auto;
      width: 100%;
      height: 256px;
      position: relative;
      .page-login-banner {
        width: 100%;
        height: 100%;
        display: block;
        padding: 0;
        border: 0;
      }
      .page-login-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 40px 0px 40px;
        padding-left: 4.2%;
        .page-login-hd {
          font-size: 22px;
          font-family: pingfang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 30px;
        }
        .page-login-opt {
          font-size: 16px;
          font-family: pingfang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 22px;
          margin-top: 16px;
          margin-bottom: 8px;
        }
        .page-login-opt-text {
          font-size: 16px;
          font-family: pingfang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 22px;
          margin-top: 16px;
          margin-bottom: 32px;
        }
        .page-login-opt-btns {
          font-size: 0;
          .wic-btn {
            display: inline-block;
            box-sizing: border-box;
            padding-top: 4px;
            width: 136px;
            height: 46px;
            background: #366ce7;
            border: 1px solid #366ce7;
            cursor: pointer;
            transition: all 0.5s;
            &:nth-last-child(1) {
              margin-left: 12px;
            }
            &:hover {
              background: #366ce7;
              color: #fff;
              border: none;
            }
            .wic-icon {
              display: inline-block;
              width: 24px;
              height: 24px;
              margin-right: 8px;
            }
            .wic-btn__text {
              position: relative;
              top: -6px;
              font-size: 16px;
              font-family: pingfang SC;
              font-weight: 400;
              color: #ffffff;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
  .page-login-content {
    width: 100%;
    height: auto;
    margin: 0px auto;
    .page-login-details {
      width: 91.5%;
      margin: 0px auto;
      height: auto;
      background: #ffffff;
      /* padding: 0px 18.75% 51px; */
      padding-bottom: 40px;
      .page-login-group {
        margin-top: 32px;
        &:last-child {
          margin-top: 40px;
        }
        .page-login-title {
          width: 100%;
          position: relative;
          .page-login-sort {
            width: 22px;
            height: 22px;
            display: inline-block;
            position: relative;
            .sort-login {
              width: 100%;
              height: 100%;
            }
            .sort-text {
              width: 16px;
              display: inline-block;
              position: absolute;
              top: 4px;
              left: 3px;
              font-size: 14px;
              font-family: pingfang SC;
              font-weight: bold;
              color: #ffffff;
              line-height: 14px;
            }
          }
          .page-login-tip {
            width: 92%;
            display: inline-block;
            margin-left: 8px;
            position: absolute;
            top: -8px;
            .tip-content {
              position: relative;
              display: inline-block;
              .tip-background {
                background: linear-gradient(
                  270deg,
                  rgba(102, 165, 245, 0) 0%,
                  #366ce7 100%
                );
                opacity: 0.4;
                display: inline-block;
                height: 9px;
                width: 100%;
                position: absolute;
                left: 0;
                top: 20px;
                z-index: 1;
              }
              .tip-background-top{
                background: linear-gradient(270deg, rgba(102, 165, 245, 0) 0%, rgba(80, 138, 238, 0.47) 2%, #366CE7 100%);
                opacity: 0.4;
                display: inline-block;
                height: 9px;
                width: 100%;
                position: absolute;
                left: 0;
                top: 20px;
                z-index: 1;
              }
              .tip-background-bottom{
                width: 93px;
                background: linear-gradient(270deg, rgba(102, 165, 245, 0) 0%, #366CE7 100%);
                opacity: 0.4;
                display: inline-block;
                height: 9px;
                position: absolute;
                left: 0;
                bottom: 8px;
                z-index: 1;
              }
              .tip-text {
                font-size: 20px;
                font-family: pingfang SC;
                font-weight: 600;
                color: #333333;
                line-height: 36px;
                position: relative;
                z-index: 10;
              }
            }
          }
        }
        .page-login-introduce {
          width: 100%;
          margin-top: 14px;
          margin-left: 0;
          font-size: 15px;
          font-family: pingfang SC;
          padding-right: 0;
          font-weight: 400;
          color: #333333;
          line-height: 28px;
          .introduce-title {
            width: 100%;
            clear: both;
            display: flex;
            .introduce-mark {
              display: inline-block;
              width: 3px;
              height: 12px;
              background: #366ce7;
              margin-right: 4px;
              margin-top: 4px;
            }
            .introduce-text {
              display: block;
              font-size: 15px;
              font-family: pingfang SC;
              font-weight: 500;
              color: #333333;
              line-height: 21px;
            }
            .introduce-texts {
              display: inline-block;
              font-size: 15px;
              font-family: pingfang SC;
              font-weight: 600;
              color: #333333;
              line-height: 21px;
            }
          }
          .special {
            margin-top: 12px;
          }
          .introduce-bottom {
            width: 100%;
            font-size: 0;
            .introduce-btn {
              width: 80%;
              margin-top: 16px;
              display: inline-block;
              background: #366ce7;
              border-radius: 24px;
              box-sizing: border-box;
              padding: 6px 8px 6px 8px;
              cursor: pointer;
              clear: both;
              &:last-child {
                margin-top: 12px;
              }
              .btn-icon {
                width: 35px;
                height: 35px;
                display: block;
                float: left;
                margin-right: 8px;
              }
              .btn-text {
                display: block;
                margin-left: 10px;
                vertical-align: middle;
                margin-top: 8px;
                font-size: 14px;
                font-family: pingfang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 20px;
                text-align: left;
              }
            }
          }
        }
        .page-login-procedure {
          width: 100%;
          margin-left: 0;

          .procedure-title {
            display: inline-block;
            margin-top: 20px;
            margin-bottom: 12px;
            margin-right: 0;
            background: rgba(54, 108, 231, 0.05);
            border-radius: 15px;
            padding: 4px 8px;
            font-size: 0px;

            .procedure-text {
              font-size: 15px;
              font-family: pingfang SC;
              font-weight: 500;
              color: #333333;
            }
            .procedure-texts {
              font-size: 15px;
              font-family: pingfang SC;
              font-weight: 600;
              color: #333333;
              margin-right: 12px;
            }
            .procedure-tip {
              font-size: 15px;
              font-family: pingfang SC;
              font-weight: 500;
              color: #333333;
              line-height: 22px;
            }
            .procedure-tips {
              font-size: 15px;
              font-family: pingfang SC;
              font-weight: 600;
              color: #333333;
              line-height: 22px;
            }
          }
          .procedure-content {
            font-size: 15px;
            padding-right: 0;
            font-family: pingfang SC;
            font-weight: 400;
            color: #333333;
            line-height: 28px;
          }
        }
        .page-login-tips{
          width: 100%;
          margin-top: 14px;
          margin-left: 0;
          p{
            font-family: pingfang SC;
          }
          .row{
            margin-top: 16px
          }
        }
      }
    }
  }
  .page-login-bottom {
    width: 100%;
    padding: 32px 0px 66px 0px;
    background: #02082c;
    text-align: center;
    position: relative;
    bottom: 0;
    z-index: 11;
    .bottom-text {
      display: inline-block;
      font-size: 14px;
      font-family: pingfang SC;
      font-weight: 400;
      color: #cccccc;
      line-height: 20px;
      vertical-align: middle;
    }
    .bottom-tip {
      display: inline-block;
      font-size: 12px;
      font-family: pingfang SC;
      font-weight: 400;
      color: #cccccc;
      line-height: 17px;
      vertical-align: middle;
    }
    .bottom-logo {
      width: 21px;
      height: 21px;
      vertical-align: middle;
      margin-left: 12px;
      display: inline-block;
    }
  }
}
.backstage-login-modal {
  width: 100%;
  height: 100vh;
  background: #000000;
  opacity: 0.39;
  position: fixed;
  top: 0;
  z-index: 12;
}
.modal-content {
  width: 295px;
  height: 222px;
  background: #ffffff;
  position: fixed;
  margin: auto;
  margin-top: 207px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 15;
  .logo {
    width: 13.58px;
    height: 13.58px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .modal-title {
    width: 100%;
    text-align: center;
    font-size: 16px;
    margin-top: 20px;
    font-family: pingfang SC;
    font-weight: 500;
    color: #333333;
    line-height: 22px;
  }
  .modal-text {
    width: 100%;
    text-align: center;
    font-size: 16px;
    margin-top: 16px;
    font-family: pingfang SC;
    font-weight: 400;
    color: #333333;
    line-height: 22px;
  }
  .modal-url {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-family: pingfang SC;
    font-weight: 400;
    color: #666666;
    line-height: 22px;
    padding: 0px 12px;
    padding-top: 12px;
    &:last-child {
      padding: 0px;
      padding-top: 4px;
    }
  }
  .modal-button {
    width: 100px;
    height: 38px;
    margin: 20px auto 24px auto;
    text-align: center;
    border: 1px solid #366be7;
    font-size: 14px;
    font-family: pingfang SC;
    font-weight: 400;
    color: #366be7;
    line-height: 38px;
  }
}
</style>
