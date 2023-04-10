<template>
  <div class="list">
    <div class="header">
      <div class="left">
        <img src="../../assets/logo_zc.png" class="logo" />
        <div v-if="configInfo.session" class="title">
          {{ configInfo.session + configInfo.name + configInfo.system }}
        </div>
        <div v-else class="title">世界智能大会</div>
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
          <div v-else class="page-login-hd">世界智能大会</div>
          <div class="page-login-opt">服务政企、企企之间交流合作</div>
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
    <div class="list-bgc">
      <div class="list-wrapper">
        <div
          class="list-content"
          :class="(index + 1) % 2 ? '' : 'list-content-reverse'"
          v-for="(listItem, index) in listState"
          :key="index"
          ref="listRef"
        >
          <div class="list-content-img">
            <div
              class="img"
              :style="{
                background: `url(${require(`../../assets/pic0${
                  index + 1
                }.jpg`)}) 50% / cover`,
              }"
            ></div>
          </div>
          <div class="list-content-desc">
            <div class="desc-title">
              <h4>{{ listItem.title }}</h4>
            </div>
            <div class="desc-detail">
              <div>
                {{ listItem.abstract }}
              </div>
            </div>
            <div class="desc-btn">
              <button
                class="desc-btn-style"
                @click="
                  $router.push(`/list/listDetails/${listItem.article_id}`)
                "
              >
                查看详情
              </button>
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
  name: "List",
  mounted() {
    console.log(this.$refs.listRef);
    for (let i = 0; i < this.$refs.listRef.length; i++) {
      setTimeout(() => {
        this.$refs.listRef[i].classList.add("list-content-animation");
      }, i * 300);
    }
  },
  data() {
    return {
      configInfo: {},
      isbrowser: false,
      listState: [
        {
          article_id: "6295d46401e5b16fae551b1b",
          title: "2022 世界智能驾驶挑战赛",
          abstract:
            "世界智能驾驶挑战赛（World Intelligent Driving Challenge，WIDC）作为世界智能大会的重要组成部分，自2017年首次举办以来，始终受到部委领导、两院院士、整车企业、车联网产业链企业和科研机构的高度关注和认可，平均每年超过百支国内外赛队参与赛事，多次被中央电视台等国内外知名媒体报道。世界智能驾驶挑战赛为参与企业提供了面向行业和消费者的汽车智能科技展示平台，为智能网联汽车行业培养了一批高质量科技人才。",
          publish_time: 1656085226,
          cover_image:
            "https://sixcdn.wicongress.org.cn/media/1b090e0ba48e2eba1cc77de4ab35d020.jpg",
          sort: 10,
          lang: "zh",
          article: "",
          from: "cloud_match",
          match_type_id: 2,
          match_type_name: "页面跳转",
          skip_pc_url: "https://widc.icvrc.cn",
          skip_web_url: "https://widc.icvrc.cn/live",
        },
        {
          article_id: "629efa3671263b5d9b4b2ca4",
          title: "2022 中国（天津）工业 APP 创新应用大赛",
          abstract:
            "为贯彻国家软件发展战略，落实工业和信息化部《“十四五”软件和信息技术服务业发展规划》《工业互联网创新发展行动计划（2021-2023年）》，持续推进百万工业APP培育工程，由工业和信息化部、天津市人民政府共同主办的“2022中国（天津）工业APP创新应用大赛”（以下简称“大赛”）在第六届世界智能大会期间正式启动。",
          publish_time: 1655887353,
          cover_image:
            "https://sixcdn.wicongress.org.cn/media/0d19e82a6e27cf3195183091960f8ba8.jpg",
          sort: 20,
          lang: "zh",
          article: "",
          from: "cloud_match",
          match_type_id: 1,
          match_type_name: "文章详情",
          match_article_id: "627e2c10328e8f3d46121392",
        },
        {
          article_id: "629ef86171263b5d9b4b2ca0",
          title: "2022 中国华录杯 · 数据湖算法大赛",
          abstract:
            "本届华录杯大赛以“收、存、治、用、易”为理念，着力于智慧城市业务中的真实应用场景，旨在结合运用消防、市政、交通等真实行业领域数据，设置定向算法赛及应用算法赛。大赛旨在挑选出优秀的人工智能算法，并遴选出杰出的算法达人。同时，大赛中涌现的优秀团队将有机会入驻易华录科技企业孵化器，享受专业孵化服务，加速产品、项目落地。 ",
          publish_time: 1655866431,
          cover_image:
            "https://sixcdn.wicongress.org.cn/media/5c2b91cb9f9351077a49fc933ae230ac.png",
          sort: 30,
          lang: "zh",
          article: "",
          from: "cloud_match",
          match_type_id: 1,
          match_type_name: "文章详情",
          match_article_id: "629eca2c71263b5d9b4b2c8d",
        },
        {
          article_id: "629ecd86da6ee45ca95cca63",
          title: "2022 国际智能体育大会",
          abstract:
            "2022国际智能体育大会是第六届世界智能大会赛事的重要组成部分。自2019年在世界智能大会中首创《国际智能体育大会》赛事品牌以来，已成功的举办了三届，来自三十余个国家和地区的300余位职业选手和爱好者参加了比赛，完成了电子竞技、无人机、机器人、线上健步走和网络棋牌五大类共10个比赛项目超亿人参与，通过赛事平台引进了腾讯、阿里体育、上海歌速等行业顶级企业，为世界智能大会增加了亮点，为推动全国智能体育的发展起到了引领和示范作用，为人工智能与体育产业的深度融合奠定了基础。",
          publish_time: 1656209100,
          cover_image:
            "https://sixcdn.wicongress.org.cn/media/8557d01cf1600bdcc712736cd1a71b6c.png",
          sort: 40,
          lang: "zh",
          article: "",
          from: "cloud_match",
          match_type_id: 1,
          match_type_name: "文章详情",
          match_article_id: "629ecab271263b5d9b4b2c8e",
        },
        {
          article_id: "62a5b924d0c7c65010563a0f",
          title: "2022 亚太机器人世界杯天津国际邀请赛",
          abstract:
            "作为天津市第六届世界智能大会的重要组成部分，2022亚太机器人世界杯天津国际邀请赛（简称“RCAP天津国际邀请赛”）将于2022年6月4日以线上形式举办。本届大赛以创新、突破、融合为宗旨，增设新赛项、增加新亮点，采取线上连接全球的模式举办，与全球多个卫星赛场比拼，并首次携手津南区政府，为您呈现一场精彩的科技盛宴。",
          publish_time: 1655365019,
          cover_image:
            "https://sixcdn.wicongress.org.cn/media/2cf4bc55069577a8512397c1765ffda6.jpg",
          sort: 50,
          lang: "zh",
          article: "",
          from: "cloud_match",
          match_type_id: 1,
          match_type_name: "文章详情",
          match_article_id: "62a5b8e45b761f794b2bdea0",
        },
      ],
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
      .then((res) => {
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
      .catch((err) => {
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
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes list-card {
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.list {
  width: 100%;
  // height: 100vh;
  background-color: #f9f9f9;
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
  .list-bgc {
    overflow: hidden;

    .list-wrapper {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 50px;
      position: relative;
      .list-content-reverse {
        flex-direction: row-reverse;
      }
      .list-content-animation {
        animation: list-card 0.3s ease-in-out both;
      }
      .list-content {
        display: flex;
        width: 100%;
        height: 340px;
        background-color: #fff;
        margin-bottom: 25px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
        transform: translateY(100vh);
        opacity: 0;
        .list-content-img {
          width: 50%;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .list-content-desc {
          width: 50%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          .desc-title {
            font-size: 20px;
            h4 {
              font-weight: normal;
            }
          }
          .desc-detail {
            font-size: 14px;
            color: #999;
          }
          .desc-btn {
            .desc-btn-style {
              color: #fff;
              font-size: 16px;
              padding: 5px 24px;
              background-color: #2c6dff;
              border: 0;
              cursor: pointer;
            }
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
    // position: relative;
    // bottom: 0;
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