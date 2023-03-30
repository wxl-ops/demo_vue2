<template>
  <div class="footer_wrapper">
    <div class="footer_content">
      <div class="footer_info_text">
        <ul>
          <li>
            <p>大会官网</p>
            <p>www.wicongress.org.cn</p>
          </li>
          <li>
            <p>邮箱</p>
            <p>wic@wicongress.org</p>
          </li>
          <li>
            <p>评选咨询热线</p>
            <p>022-81593136</p>
          </li>
        </ul>
        <div>
          <p>大会组委会秘书处地址：天津市河西区友谊路35号城市大厦8层</p>
        </div>
      </div>
      <div class="footer_img">
        <div class="img_con">
          <img src="../../assets/Applets.png" />
          <p>官方小程序</p>
        </div>
        <div class="img_con">
          <img src="../../assets/code_pic.jpg" />
          <p>官方微信公众号</p>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <p>世界智能大会WORLD INTELLIGENCE CONGRESS</p>
      <p>津ICP备17008349号-3津公网安 备12010302002098号 官方声明</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style lang='scss' scoped>
.footer_wrapper {
  width: 100%;
  background: #4b68b4;
  color: white;
  font-size: 18px;
  .footer_content {
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0 37px;
    display: flex;
    justify-content: space-between;
    .footer_info_text {
      flex: 1;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 49%;
          margin-bottom: 12px;
          p {
            margin-bottom: 10px;
          }
        }
      }
    }
    .footer_img {
      flex: 0.5;
      display: flex;
      justify-content: space-around;
      .img_con {
        display: inline-flex;
        align-items: center;
        flex-direction: column;
        img {
          width: 116px;
          height: 116px;
        }
        p {
          text-align: center;
          margin-top: 15px;
        }
      }
    }
  }
  .footer_bottom {
    width: 1200px;
    margin: 0px auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      &:first-child {
        margin-bottom: 15px;
      }
    }
  }
}
</style>