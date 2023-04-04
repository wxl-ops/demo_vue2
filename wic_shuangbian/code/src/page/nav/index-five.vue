<template>
  <div class="backstage-login">
    <div class="page-login-wrap">
      <div class="page-login-inner">
        <div class="page-login-hd">
          <h3 class="page-login-tit">世界智能大会双边会谈</h3>
        </div>
        <div class="page-login-bd">
          <div class="page-login-opt">
            <h3 class="page-login-opt-tit">线上平台开通云会谈室，服务政企、企业之间交流合作</h3>
            <div class="page-login-opt-btns">
              <button class="wic-btn wic-btn--hole size-l" @click="goPage('login')">
                <span class="wic-btn__text">登录</span>
              </button>
              <button class="wic-btn wic-btn--hole size-l" @click="goPage('register')">
                <span class="wic-btn__text">企业注册</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goPage (val) {
      let env = 'test'
      if (process.env.NODE_ENV === 'development' || window.location.hostname === 't-meeting.wicongress.org.cn') {
        env = 'test'
      } else {
        env = 'pro'
      }
      let url = ''
      if (val === 'login') {
        url = env === 'test' ? 'https://t-meeting.wicongress.org.cn/login' : 'https://meeting.wicongress.org.cn/login'
      } else {
        url = env === 'test' ? 'https://t-meeting.wicongress.org.cn/register/register' : 'https://meeting.wicongress.org.cn/register/register'
      }
      window.location.href = url
    },
  },
};
</script>

<style lang="scss">
.backstage-login {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 1920px 1080px;
  background-position: bottom;
  // background-image: url("@/assets/bg-login.jpg");
  background-image: url("https://ti-wic-test-1302130151.cos.ap-beijing.myqcloud.com/pc-ui-fe-web/style/img/login/bg-login.jpg");
  background-color: #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .page-login-wrap {
    padding: 40px 10px 120px;
    max-width: 540px;
    width: 100%;
    box-sizing: border-box;
    .page-login-inner {
      .page-login-hd {
        margin-bottom: 46px;
        .page-login-tit {
          text-align: center;
          line-height: 56px;
          font-size: 40px;
          color: #fff;
          font-weight: 500;
        }
      }
      .page-login-bd {
        .page-login-opt {
          .page-login-opt-tit {
            text-align: center;
            margin-bottom: 20px;
            line-height: 20px;
            font-size: 16px;
            color: #fff;
            font-weight: 400;
          }
          .page-login-opt-btns {
            font-size: 0;
            .wic-btn {
              display: inline-block;
              box-sizing: border-box;
              min-width: 104px;
              height: 36px;
              padding: 0 24px;
              font-size: 14px;
              line-height: 34px;
              white-space: nowrap;
              text-align: center;
              text-decoration: none;
              vertical-align: middle;
              background-color: #fff;
              border: 1px solid transparent;
              outline: 0 none;
              cursor: pointer;
              margin: 0;
              max-width: none;
              width: calc((100% - 30px) / 2);
              min-width: 152px;
              height: 40px;
              padding: 0 24px;
              line-height: 38px;
              color: #366be7;
              transition: all 0.5s;
              &:nth-last-child(1){
                margin-left: 30px;
              }
              &:hover{
                background-color: #366be7;
                color: #fff;
              }
            }
          }
        }
      }
    }
    .page-login-pft {
      margin-top: 82px;
      padding-top: 12px;
      line-height: 20px;
      font-size: 14px;
      color: #9b9b9b;
      border-top: 1px solid #d4d4d4;
    }
  }
}
</style>
