<template>
  <div class="backstage-login">
    <div class="header">
      <div class="left">
        <img src="../../assets/logo_zc.png" class="logo" />
        <div v-if="configInfo.session" class="title">
          {{ configInfo.session + configInfo.name + configInfo.system }}
        </div>
        <div v-else class="title">
          世界智能大会
        </div>
      </div>
      <div class="right" @click="toOfficial">官网首页</div>
    </div>
    <div class="page-login-outer">
      <div class="page-login-wrap">
        <img src="../../assets/login_banner.png" class="page-login-banner" />
        <div class="page-login-inner">
          <div class="page-login-hd" v-if="configInfo.name">
            {{ configInfo.name + configInfo.system }}
          </div>
          <div v-else class="page-login-hd">
            世界智能大会
          </div>
          <div class="page-login-opt">
            服务政企、企企之间交流合作
          </div>
          <div class="page-login-opt-btns">
            <button
              class="wic-btn wic-btn--hole size-l"
              @click="goPage('login')"
            >
              <img src="../../assets/icon_dl.png" class="wic-icon" />
              <span class="wic-btn__text">登录</span>
            </button>
            <button
              class="wic-btn wic-btn--hole size-l"
              @click="goPage('register')"
            >
              <img src="../../assets/icon_qyzc.png" class="wic-icon" />
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
              <img src="../../assets/image_bt_sz.png" class="sort-login" />
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
              <img src="../../assets/image_bt_sz.png" class="sort-login" />
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
              <span :class="isbrowser ? 'procedure-text' : 'procedure-texts'"
                >第二阶段：</span>
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
          <div class="page-login-title">
            <div class="page-login-sort">
              <img src="../../assets/image_bt_sz.png" class="sort-login" />
              <span class="sort-text">03</span>
            </div>
            <div class="page-login-tip">
              <div class="tip-content">
                <span class="tip-background"></span>
                <span class="tip-text">打造永不落幕的世界智能大会“双边会谈”活动</span>
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
              <img src="../../assets/image_bt_sz.png" class="sort-login" />
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
                <img src="../../assets/icon_me_dh.png" class="btn-icon" />
                <span class="btn-text">
                  咨询热线：022-83608031
                </span>
              </div>
              <div class="introduce-btn">
                <img src="../../assets/icon_me_yx.png" class="btn-icon" />
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
      <span class="bottom-text">世界智能大会 WORLD INTELLIGENCE CONGRESS</span>
      <span class="bottom-text">津ICP备17008349号-3</span>
      <img src="../../assets/ioc_bootom.png" class="bottom-logo" />
      <span class="bottom-text">津公网安备 12010302002098号</span>
    </div>
  </div>
</template>

<script>
import apis from "@/api/common.js";
export default {
  data() {
    return {
      configInfo: {},
      isbrowser: false
    };
  },
  created() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      debugger;
      this.$router.push({ path: "/nav-h5" });
    } else {
    }

    this.isMac();
    apis
      .GetTimeRange()
      .then(res => {
        this.configInfo = res.data;
        console.log("this.configInfo", this.configInfo);
        if (this.configInfo.session) {
          // document.title = `第${this.configInfo.session}届世界智能大会双边会谈系统`;
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
      }
      console.log(this.isbrowser);
    },
    goPage(val) {
      let env = "test";
      if (
        process.env.NODE_ENV === "development" ||
        window.location.hostname === "t-meeting.wicongress.org.cn"
      ) {
        env = "test";
      } else {
        env = "pro";
      }
      let url = "";
      if (val === "login") {
        url = window.location.protocol + "//" + window.location.host + "/login";
        // env === "test"
        //   ? "https://t-meeting.wicongress.org.cn/login"
        //   : "https://meeting.wicongress.org.cn/login";
      } else {
        url =
          window.location.protocol +
          "//" +
          window.location.host +
          "/register/register";
        // env === "test"
        //   ? "https://t-meeting.wicongress.org.cn/register/register"
        //   : "https://meeting.wicongress.org.cn/register/register";
      }
      window.location.href = url;
    },
    toOfficial() {
      window.location.href = "https://www.wicongress.org.cn/";
    }
  }
};
</script>

<style lang="scss" scoped>
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
    height: 80px;
    width: 100%;
    align-items: center;
    background: #ffffff;
    box-sizing: border-box;
    padding: 0 40px;
    cursor: pointer;
    .left {
      display: flex;
      flex: 1;
      .logo {
        height: 39px;
      }
      .title {
        font-size: 25px;
        font-family: pingfang SC;
        font-weight: 500;
        color: #2a2c2e;
        line-height: 25px;
        display: flex;
        align-items: center;
        margin-left: 20px;
      }
    }
    .right {
      cursor: pointer;
      padding: 11px 15px;
      font-size: 18px;
      font-family: pingfang SC;
      font-weight: 400;
      color: #2a2c2e;
      line-height: 18px;
      border: 1px solid #bbbbbb;
    }
  }
  .page-login-outer {
    width: 100%;
    margin-top: 80px;
    background-color: #000517;
    .page-login-wrap {
      max-width: 1920px;
      margin: 0px auto;
      width: 100%;
      height: 446px;
      position: relative;
      .page-login-banner {
        max-width: 1920px;
        max-height: 446px;
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
        padding: 99px 0px;
        padding-left: 8.75%;
        .page-login-hd {
          font-size: 48px;
          font-family: pingfang SC;
          font-weight: bold;
          color: #ffffff;
          line-height: 60px;
        }
        .page-login-opt {
          font-size: 24px;
          font-family: pingfang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 24px;
          margin-top: 24px;
          margin-bottom: 80px;
        }
        .page-login-opt-btns {
          font-size: 0;
          .wic-btn {
            display: inline-block;
            box-sizing: border-box;
            width: 197px;
            height: 60px;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.8);
            cursor: pointer;
            transition: all 0.5s;
            &:nth-last-child(1) {
              margin-left: 16px;
            }
            &:hover {
              background: #366ce7;
              color: #fff;
              border: none;
            }
            .wic-icon {
              display: inline-block;
              width: 28px;
              height: 28px;
              margin-right: 9px;
            }
            .wic-btn__text {
              position: relative;
              top: -4px;
              font-size: 20px;
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
    max-width: 1920px;
    width: 100%;
    height: auto;
    margin: 0px auto;
    .page-login-details {
      width: 82.5%;
      margin: 0px auto;
      height: auto;
      background: #ffffff;
      /* padding: 0px 18.75% 51px; */
      padding-bottom: 51px;
      .page-login-group {
        margin-top: 60px;
        .page-login-title {
          width: 100%;
          position: relative;
          .page-login-sort {
            width: 26px;
            height: 26px;
            display: inline-block;
            position: relative;
            .sort-login {
              width: 100%;
              height: 100%;
            }
            .sort-text {
              width: 20px;
              display: inline-block;
              position: absolute;
              top: 4px;
              left: 3px;
              font-size: 17px;
              font-family: pingfang SC;
              font-weight: bold;
              color: #ffffff;
              line-height: 17px;
            }
          }
          .page-login-tip {
            width: 80%;
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
                top: 24px;
                z-index: 1;
              }
              .tip-text {
                font-size: 24px;
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
          margin-top: 20px;
          margin-left: 34px;
          font-size: 16px;
          font-family: pingfang SC;
          font-weight: 400;
          color: #333333;
          line-height: 22px;
          .introduce-title {
            width: 100%;
            .introduce-mark {
              display: inline-block;
              width: 3px;
              height: 12px;
              background: #366ce7;
              margin-right: 4px;
            }
            .introduce-text {
              display: inline-block;
              font-size: 16px;
              font-family: pingfang SC;
              font-weight: 500;
              color: #333333;
              line-height: 22px;
            }
            .introduce-texts {
              display: inline-block;
              font-size: 16px;
              font-family: pingfang SC;
              font-weight: 600;
              color: #333333;
              line-height: 22px;
            }
          }
          .special {
            margin-top: 12px;
          }
          .introduce-bottom {
            width: 100%;
            font-size: 0;
            .introduce-btn {
              margin-top: 20px;
              display: inline-block;
              background: #366ce7;
              border-radius: 24px;
              box-sizing: border-box;
              padding: 6px 20px 6px 8px;
              cursor: pointer;
              &:last-child {
                margin-left: 16px;
              }
              .btn-icon {
                width: 35px;
                height: 35px;
                display: inline-block;
                vertical-align: middle;
              }
              .btn-text {
                margin-left: 10px;
                vertical-align: middle;
                font-size: 14px;
                display: inline-block;
                font-family: pingfang SC;
                font-weight: 400;
                color: #ffffff;
                line-height: 20px;
              }
            }
          }
        }
        .page-login-procedure {
          width: 100%;
          margin-left: 34px;

          .procedure-title {
            display: inline-block;
            margin-top: 30px;
            margin-bottom: 12px;
            background: rgba(54, 108, 231, 0.05);
            border-radius: 15px;
            padding: 3px 12px;
            font-size: 0px;
            &:first-child {
              margin-top: 17px;
            }
            .procedure-text {
              font-size: 16px;
              font-family: pingfang SC;
              font-weight: 500;
              color: #333333;
              margin-right: 12px;
            }
            .procedure-texts {
              font-size: 16px;
              font-family: pingfang SC;
              font-weight: 600;
              color: #333333;
              margin-right: 12px;
            }
            .procedure-tip {
              font-size: 16px;
              font-family: pingfang SC;
              font-weight: 500;
              color: #333333;
              line-height: 22px;
            }
            .procedure-tips {
              font-size: 16px;
              font-family: pingfang SC;
              font-weight: 600;
              color: #333333;
              line-height: 22px;
            }
          }
          .procedure-content {
            font-size: 16px;
            font-family: pingfang SC;
            font-weight: 400;
            color: #333333;
            line-height: 22px;
          }
        }
        .page-login-tips{
            margin-top: 20px;
            margin-left: 34px;
            p{
                font-size: 16px;
                font-family: pingfang SC;
                font-weight: 400;
                color: #333333;
                line-height: 22px;
            }
            .row{
                margin-top: 16px;
            }
        }
      }
    }
  }
  .page-login-bottom {
    width: 100%;
    padding: 30px 0px;
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
      margin-right: 32px;
      vertical-align: middle;
      &:last-child {
        margin-right: 0px;
      }
    }
    .bottom-logo {
      width: 21px;
      height: 21px;
      vertical-align: middle;
      margin-right: 6px;
      display: inline-block;
    }
  }
}
</style>
