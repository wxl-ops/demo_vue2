<template>
  <div class="container">
    <div class="home_page_container">
      <div class="banner_wrapper">
        <div class="banner_img">
          <img src="../../assets/banner_pc.png" />
        </div>
        <div class="login_box">
          <div class="banner_login" v-if="!isLogin">
            <h2 class="login_title">申报记录</h2>
            <el-input v-model="username" placeholder="请输入账号"></el-input>
            <el-input
              placeholder="请输入密码"
              v-model="password"
              show-password
            ></el-input>
            <p class="p_login" @click="handleLogin">登录</p>
            <p class="p_register" @click="handleToRegisterPage">注册</p>
            <p class="p_forget_psd" @click="handleToForgetPsdPage">忘记密码</p>
          </div>
          <div
            class="banner_new_report"
            :class="this.isLogin ? '' : 'is_hidden'"
          >
            <h2 class="report_title">新申报</h2>
            <p class="p_report" @click="handleClick">智能制造</p>
            <p class="p_report" @click="handleClick">智能网联汽车</p>
            <p class="p_report" @click="handleClick">智慧低碳发展</p>
          </div>
        </div>
      </div>
      <div class="introduction_wrapper">
        <div class="introduction_image">
          <img src="../../assets/jieshao.png" />
        </div>
        <div class="introduction_article" v-if="articleContent.length">
          <p>{{ articleContent[0] }}</p>
          <p>{{ articleContent[1] }}</p>
          <p>{{ articleContent[2] }}</p>
        </div>
        <p class="intro_ident">
          第七届世界智能大会“WIC智能科技创新应用优秀案例”面向<br />
          智能制造、智能网联汽车、智慧低碳发展领域进行全球征集
        </p>
        <div class="intro_detail_wrapper" v-if="detailTitle.length">
          <div class="intro_detail" v-for="item in detailTitle" :key="item.id">
            <div class="intro_detail_img">
              <img :src="require(`../../assets/jieshao_${item.id}.png`)" />
            </div>
            <p class="intro_title">{{ item.title }}</p>
            <p class="intro_content">{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <div class="img_title">
          <img src="../../assets/liucheng.png" />
        </div>
        <div class="img_content">
          <img src="../../assets/liucheng_line_pc.png" />
        </div>
      </div>
      <div class="signup_wrapper">
        <div class="signup_img">
          <img src="../../assets/fangshi.png" />
        </div>
        <div class="signup_content">
          <h3>(一)申报渠道</h3>
          <p>案例征集采取专业机构推荐和申报单位(个人)自荐相</p>
          <p>结合的方式，通过线上申报系统提交优秀案例申报材料。</p>
          <p>申报系统网址：https://award.wicongress.org.cn/</p>
          <h3>(二)需要提交的材料</h3>
          <p>
            注册申报系统后，登录并下载填报《第七届世界智能大会WIC智能科技创新应用优秀案例申报书》。
          </p>
          <p>除基本信息外,申报者应提供如下材料(包含但不限于):</p>
          <p>1.案例介绍</p>
          <p>2.自主知识产权等相关佐证材料。</p>
          <p>
            3.第三方鉴定报告、科技查新报告、媒体报道等真实性、先进性相关佐证材料。
          </p>
          <p>4.该案例取得或预期取得经济效益和社会效益的相关佐证材料。</p>
        </div>
      </div>
      <div class="news_wrapper">
        <div class="news_img">
          <img src="../../assets/xinwen.png" />
        </div>
        <div class="news_content" v-if="imgList.length">
          <div class="news_loop">
            <el-carousel
              indicator-position="none"
              class="carousel"
              @change="handleChangeCarousel"
              ref="refCarousel"
            >
              <el-carousel-item
                v-for="(item, index) in imgList[currentList]"
                :key="index"
              >
                <img :src="require(`../../assets/${item}`)" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="news_list" v-if="newsList.length">
            <ul>
              <li
                v-for="(newsTitle, index) in newsList[currentList]"
                :key="index"
              >
                <p
                  class="p_title"
                  :class="index === currentCarousel ? 'p_title_blue' : ''"
                  @mouseenter="handleMouseenter(index)"
                >
                  {{ newsTitle.newsTitle }}
                </p>
                <p class="p_time">{{ newsTitle.newsTime }}</p>
              </li>
            </ul>
            <div class="div_pagination">
              <el-pagination
                background
                layout="pager"
                :total="30"
                @current-change="handleCurrentChange"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <div class="cases_wrapper">
        <div class="cases_img">
          <img src="../../assets/anli.png" />
        </div>
        <div class="excellent_cases_wrapper">
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
      <div class="supporting_wrapper">
        <div class="supporting_img">
          <img src="../../assets/title_zhichi_zh.png" />
        </div>
        <ul>
          <li>中国空间技术研究院航天生产力促进中心</li>
          <li>法国里昂商学院</li>
          <li>锦囊专家（北京捷恩旭技术咨询有限公司）</li>
          <li>河北 CIO社区</li>
          <li>青岛CIO联盟</li>
          <li>工业4.0俱乐部</li>
          <li>西南CIO联盟</li>
          <li>黑龙江省CIO联盟</li>
          <li>河南CIO社区</li>
          <li>武汉企业信息化促进会</li>
          <li>黑龙江省工业和信息化厅</li>
          <li>湖北省经济和信息化厅</li>
          <li>福建省工业和信息化厅</li>
          <li>江苏省工业和信息化厅</li>
          <li>四川省经济和信息化厅</li>
        </ul>
      </div>
      <el-dialog
        :title="excellentCasesList[currentIdDetail].title"
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
        :title="excellentCasesList[currentIdDetail].title"
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
  name: "HomePage",
  data() {
    return {
      username: "",
      password: "",
      isLogin: false,
      currentPage: 1,
      currentCarousel: 0,
      DetailDialogVisible: false,
      VideoDialogVisible: false,
      currentIdDetail: 0,
      isCurrent: true,
      articleContent: [],
      detailTitle: [],
      imgList: [],
      newsList: [],
      excellentCasesList: [],
    };
  },
  computed: {
    currentList() {
      return this.currentPage - 1;
    },
  },
  methods: {
    handleLogin() {
      apis
        .postLogin({ username: this.username, password: this.password })
        .then((res) => {
          this.isLogin = true;
        });
    },
    handleToRegisterPage() {
      this.$router.push("/register");
    },
    handleToForgetPsdPage() {},
    handleClick() {},
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    handleChangeCarousel(currentCarousel) {
      this.currentCarousel = currentCarousel;
    },
    handleMouseenter(index) {
      this.currentCarousel = index;
      this.$refs.refCarousel.setActiveItem(index);
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
    apis.getArticleContent().then((res) => {
      this.articleContent = res.data.data;
    });
    apis.getDetailTitle().then((res) => {
      this.detailTitle = res.data.data;
    });
    apis.getImgList().then((res) => {
      this.imgList = res.data.data;
    });
    apis.getNewsList().then((res) => {
      this.newsList = res.data.data;
    });
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
.is_hidden {
  display: none !important;
}
.is_current {
  background-color: orange;
  border-color: orange !important;
  color: #fff;
}
.container {
  background: url("../../assets/back_pc.jpg") 0% 0% / cover;
}
.home_page_container {
  width: 1200px;
  margin: 0 auto;
  .banner_wrapper {
    padding: 110px 0 137px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .login_box {
      .banner_login {
        width: 366px;
        height: 348px;
        padding: 37px 35px;
        background: hsla(0, 0%, 100%, 0.8);
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-content: space-between;
        .login_title {
          width: 100%;
          text-align: center;
          color: #244cce;
        }
        .p_login,
        .p_register {
          height: 42px;
          width: 142px;
          font-size: 18px;
          text-align: center;
          line-height: 42px;
          border-radius: 21px;
          letter-spacing: 5px;
          cursor: pointer;
        }

        .p_login {
          margin-right: 12px;
          background: linear-gradient(0deg, #406cdf, #618ce8);
        }
        .p_register {
          background: linear-gradient(0deg, #e18a23, #e28618);
        }
        .p_forget_psd {
          color: #000;
          cursor: pointer;
          &:hover {
            color: #244cce;
            text-decoration: underline;
          }
        }
      }
      .banner_new_report {
        width: 366px;
        height: 348px;
        padding: 37px 35px;
        background: hsla(0, 0%, 100%, 0.8);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .report_title {
          color: #244cce;
        }
        .p_report {
          height: 42px;
          width: 68%;
          text-align: center;
          line-height: 42px;
          border-radius: 21px;
          cursor: pointer;
          background-color: #fa8b08;
        }
      }
    }
  }
  .introduction_wrapper {
    .introduction_image {
      margin-bottom: 65px;
    }
    .introduction_article {
      background: url("../../assets/jieshao_back_pc.png") 0% 0%/100% 100%;
      padding: 80px 64px;
      p {
        font-size: 18px;
        line-height: 3;
        text-indent: 2em;
        text-align: justify;
      }
    }
    .intro_ident {
      font-size: 32px;
      font-weight: 600;
      color: #21ddff;
      text-align: center;
      margin: 96px 0 92px;
    }
    .intro_detail_wrapper {
      margin-bottom: 75px;
      display: flex;
      justify-content: space-between;
      .intro_detail {
        width: 380px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        .intro_title {
          font-size: 28px;
          font-weight: 600;
          margin: 30px 0 40px;
          background-image: -webkit-linear-gradient(bottom, #bae8fc, #3cc0d5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .intro_content {
          font-size: 18px;
          line-height: 1.8;
        }
      }
    }
  }
  .img_wrapper {
    margin-bottom: 75px;
    .img_title {
      margin-bottom: 65px;
    }
    .img_content {
      display: flex;
      justify-content: center;
    }
  }
  .signup_wrapper {
    .signup_img {
      margin-bottom: 65px;
    }
    .signup_content {
      h3,
      p {
        margin-bottom: 18px;
      }
      p {
        font-size: 18px;
        &:last-child {
          margin-bottom: 99px;
        }
      }
    }
  }
  .news_wrapper {
    margin-bottom: 75px;
    .news_img {
      margin-bottom: 65px;
    }
    .news_content {
      padding: 40px 30px;
      background-color: #05113a;
      display: flex;
      justify-content: space-between;
      .news_loop {
        width: 504px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .news_list {
        width: 53%;
        height: 317px;
        font-size: 20px;
        list-style: none;
        position: relative;
        ul {
          height: 100%;
          li {
            line-height: 27px;
            font-weight: 300;
            display: flex;
            justify-content: space-between;
            .p_title {
              flex: 1.5;
              @include ellipsis_text-row;
              cursor: pointer;
            }
            .p_title_blue {
              font-weight: 900;
              color: #20ddff;
            }
            .p_time {
              flex: 0.5;
              color: #ccc;
              font-family: fangsong, "Helvetica Neue";
              text-align: right;
            }
            &:not(:last-child) {
              margin-bottom: 22px;
            }
          }
        }

        .div_pagination {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
        }
      }
    }
  }
  .cases_wrapper {
    margin-bottom: 75px;
    .cases_img {
      margin-bottom: 65px;
    }
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
  .supporting_wrapper {
    padding-bottom: 75px;
    .supporting_img {
      margin-bottom: 65px;
    }
    ul {
      li {
        font-size: 18px;
        padding-bottom: 20px;
      }
    }
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
}
</style>
<style lang="scss">
/* 新建一个style文件，化解更改el组件样式困难的问题 */
.home_page_container {
  .el-carousel {
    height: 100%;
    .el-carousel__container {
      height: 100%;
    }
  }
  .el-pagination {
    &.is-background {
      .el-pager {
        li {
          &:not(.disabled) {
            &.active {
              background-color: #4a68b4 !important;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .el-dialog__body {
    padding: 0;
  }
}
</style>