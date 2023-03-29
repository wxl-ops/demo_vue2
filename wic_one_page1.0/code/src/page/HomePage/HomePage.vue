<template>
  <div class="home_page_container">
    <div class="banner_wrapper">
      <div class="banner_img">
        <img src="../../assets/banner_pc.png" />
      </div>
      <div class="login_box">
        <div class="banner_login" v-if="!isLogin">
          <h2 class="login_title">申报记录</h2>
          <el-input v-model="username" placeholder="请输入内容"></el-input>
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
          <p class="p_login" @click="handleLogin">登录</p>
          <p class="p_register" @click="handleToRegisterPage">注册</p>
          <p class="p_forget_psd" @click="handleToForgetPsdPage">忘记密码</p>
        </div>
        <div class="banner_new_report" :class="this.isLogin ? '' : 'is_hidden'">
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
      <div class="introduction_article">
        <p>{{ articleContent[0] }}</p>
        <p>{{ articleContent[1] }}</p>
        <p>{{ articleContent[2] }}</p>
      </div>
      <p class="intro_ident">
        第七届世界智能大会“WIC智能科技创新应用优秀案例”面向<br />
        智能制造、智能网联汽车、智慧低碳发展领域进行全球征集
      </p>
      <div class="intro_detail_wrapper">
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
      <div class="news_content">
        <div class="news_loop">
          <el-carousel indicator-position="none">
            <el-carousel-item v-for="(item, index) in imgList" :key="index">
              <img :src="require(`../../assets/${item}`)" />
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="news_list"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      username: "",
      password: "",
      isLogin: false,
      articleContent: [
        `世界智能大会由党中央、国务院批准，国家发展和改革委员会、科学技术部、工业和信息化部、国家广播电视总局、国家互联网信息办公室、中国科学院、中国工程院、中国科学技术协会和天津市人民政府共同主办，自2017年以来已经成功举办6届，成为世界智能科技领域学术交流、展览展示、开放创新、深化合作的顶级盛会。中国国家主席习近平专门发来贺信，提出要通过世界智能大会，搭建交流合作、共赢共享的平台，推动新一代人工智能健康发展，更好造福世界各国人民。`,
        `为展示全球范围内智能产业全要素领域示范者，打造含金量足、权威性强、行业认可度高的评选评奖活动，提高大会在专业领域的影响力，2022第六届世界智能大会首次组织“WIC智能科技创新应用优秀案例”评选活动，由30位智能科技领域中外知名专家组织评审委员会，从创新性和独特性、应用价值与实效性、实施难度和复杂性、市场影响与推广性等维度对申报案例进行评审，最终遴选出极具代表性和推广度的10个优秀案例和20个入围案例，获得业界广泛认可。`,
        `第七届世界智能大会“WIC智能科技创新应用优秀案例”评选活动于2022年11月正式启动征集，聚焦“智能制造”、“智能网联汽车”、“智慧低碳发展”三大领域，现向全球各类科研机构、高校、国际组织、各行业企业、创新团队等发出邀请，征集参加评选活动的优秀案例。`,
      ],
      detailTitle: [
        {
          id: "1",
          title: "智能制造",
          content:
            "围绕关键技术与核心部件、智能化装备和制造过程智能化技术与系统方向，征集包括但不限于关键工序智能化、关键岗位机器人替代、生产过程智能优化控制、智能供应链、智能工厂/数字化车间、智能装备和产品、智能化管理、智能制造云服务平台、工业物联网、工业机器人等智能科技创新应用案例。",
        },
        {
          id: "2",
          title: "智能网联汽车",
          content:
            "围绕智能网联汽车关键核心技术、智能网联汽车平台和智能网联车安全方向，征集包括但不限于智能网联车关键零部件及系统开发应用、智能网联车复杂环境感知、新型电子电气架构、车载智能计算平台、车规级芯片、高性能车辆智能驱动、无线通信关键技术、数据管理平台、测试验证平台、数据融合与计算处理平台、智能网联汽车数据安全、网络安全、功能安全、道路交通安全、在线升级安全、自动驾驶安全等智能科技创新应用案例。",
        },
        {
          id: "3",
          title: "智慧低碳发展",
          content:
            "围绕人工智能技术在产业低碳转型、居民低碳环保生活和城乡智慧低碳发展领域中的典型应用，征集包括但不限于信息通信行业重点设施智慧绿色升级，能源、钢铁、化工和农业等产业智慧低碳转型，线上生活、低碳消费、城乡环境智慧低碳监测与治理、智慧低碳建筑、低碳节能系统等智能科技创新应用案例。",
        },
      ],
      imgList: [
        "0dc2_9faff740.jpg",
        "1f43_e44d5b6a.jpg",
        "5a21_83e42e04.jpg",
        "7e39_b7b54aa9.jpg",
        "3822_4b848d27.jpg",
        "b735_5b476607.jpg",
        "d9d2_48c97f08.jpg",
      ],
    };
  },
  methods: {
    handleLogin() {
      this.isLogin = true;
    },
    handleToRegisterPage() {},
    handleToForgetPsdPage() {},
    handleClick() {},
  },
};
</script>

<style lang='scss' scoped>
.is_hidden {
  display: none !important;
}
.home_page_container {
  .banner_wrapper {
    margin: 110px 0 137px;
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
        .intro_detail_img {
        }
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
    .news_img {
      margin-bottom: 65px;
    }
    .news_content {
      height: 397px;
      padding: 40px 30px;
      background-color: #05113a;
      display: flex;
      justify-content: space-between;
      .news_loop {
        width: 504px;
        height: 314px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .news_list {
        width: 53%;
        height: 100%;
        border: 1px solid white;
      }
    }
  }
}
</style>