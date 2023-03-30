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
        <div class="news_list">
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
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
        <li>中国空间技术研究院航天生产力促进中心</li>
      </ul>
    </div>
    <el-dialog
      :title="excellentCasesList[currentIdDetail].title"
      :visible.sync="DetailDialogVisible"
      width="30%"
      class="detail_dialog_style"
    >
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
    >
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
</template>

<script>
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
        [
          "0dc2_9faff740.jpg",
          "1f43_e44d5b6a.jpg",
          "1f43_e44d5b6a.jpg",
          "1f43_e44d5b6a.jpg",
          "1f43_e44d5b6a.jpg",
          "1f43_e44d5b6a.jpg",
          "1f43_e44d5b6a.jpg",
        ],
        [
          "5a21_83e42e04.jpg",
          "7e39_b7b54aa9.jpg",
          "7e39_b7b54aa9.jpg",
          "7e39_b7b54aa9.jpg",
          "7e39_b7b54aa9.jpg",
          "7e39_b7b54aa9.jpg",
          "7e39_b7b54aa9.jpg",
        ],
        [
          "3822_4b848d27.jpg",
          "b735_5b476607.jpg",
          "b735_5b476607.jpg",
          "b735_5b476607.jpg",
          "b735_5b476607.jpg",
        ],
      ],
      newsList: [
        [
          {
            newsTitle:
              "“WIC智能科技创新应用优秀案例”征集倒计时7天，带上您的优秀案例，快来参加吧",
            newsTime: "2023-02-23",
          },
          {
            newsTitle:
              "“WIC智能科技创新应用优秀案例”征集倒计时7天，带上您的优秀案例，快来参加吧",
            newsTime: "2023-02-24",
          },
          {
            newsTitle:
              "“WIC智能科技创新应用优秀案例”征集倒计时7天，带上您的优秀案例，快来参加吧",
            newsTime: "2023-02-25",
          },
          {
            newsTitle:
              "“WIC智能科技创新应用优秀案例”征集倒计时7天，带上您的优秀案例，快来参加吧",
            newsTime: "2023-02-26",
          },
          {
            newsTitle:
              "“WIC智能科技创新应用优秀案例”征集倒计时7天，带上您的优秀案例，快来参加吧",
            newsTime: "2023-02-27",
          },
          {
            newsTitle:
              "“WIC智能科技创新应用优秀案例”征集倒计时7天，带上您的优秀案例，快来参加吧",
            newsTime: "2023-02-28",
          },
          {
            newsTitle:
              "“WIC智能科技创新应用优秀案例”征集倒计时7天，带上您的优秀案例，快来参加吧",
            newsTime: "2023-02-29",
          },
        ],
        [
          {
            newsTitle:
              "@智能网联汽车赛道的你，WIC智能科技创新应用优秀案例评选火热征集中",
            newsTime: "2023-12-15",
          },
          {
            newsTitle:
              "@智能网联汽车赛道的你，WIC智能科技创新应用优秀案例评选火热征集中",
            newsTime: "2023-12-16",
          },
          {
            newsTitle:
              "@智能网联汽车赛道的你，WIC智能科技创新应用优秀案例评选火热征集中",
            newsTime: "2023-12-17",
          },
          {
            newsTitle:
              "@智能网联汽车赛道的你，WIC智能科技创新应用优秀案例评选火热征集中",
            newsTime: "2023-12-18",
          },
          {
            newsTitle:
              "@智能网联汽车赛道的你，WIC智能科技创新应用优秀案例评选火热征集中",
            newsTime: "2023-12-19",
          },
          {
            newsTitle:
              "@智能网联汽车赛道的你，WIC智能科技创新应用优秀案例评选火热征集中",
            newsTime: "2023-12-20",
          },
          {
            newsTitle:
              "@智能网联汽车赛道的你，WIC智能科技创新应用优秀案例评选火热征集中",
            newsTime: "2023-12-21",
          },
        ],
        [
          {
            newsTitle:
              "“WIC奖”展播三：面向铸造行业的全流程生产数字化及优化控制关键技术与产业化",
            newsTime: "2023-11-15",
          },
          {
            newsTitle:
              "“WIC奖”展播三：面向铸造行业的全流程生产数字化及优化控制关键技术与产业化",
            newsTime: "2023-11-16",
          },
          {
            newsTitle:
              "“WIC奖”展播三：面向铸造行业的全流程生产数字化及优化控制关键技术与产业化",
            newsTime: "2023-11-17",
          },
          {
            newsTitle:
              "“WIC奖”展播三：面向铸造行业的全流程生产数字化及优化控制关键技术与产业化",
            newsTime: "2023-11-18",
          },
          {
            newsTitle:
              "“WIC奖”展播三：面向铸造行业的全流程生产数字化及优化控制关键技术与产业化",
            newsTime: "2023-11-19",
          },
        ],
      ],
      excellentCasesList: [
        {
          id: "1",
          title: "海尔智家灯塔工厂数字化平台",
          key_word: "IOT、机器视觉、人工智能",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/b735_5b476607.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/8cbd_71ab72da.png",
          company: "青岛海尔科技有限公司",
          field: "制造过程智能化技术与系统（数字化工厂/车间）",
          chinese_intro:
            "      海尔智家目前已有 4 家工厂，由世界经济论坛和麦肯锡咨询公司共同评为“灯塔工厂”。海尔智家灯塔工厂数字化平台为工厂的数字化升级转型提供了基础平台和能力支撑。灯塔工厂的数字化赋能首先从工厂内部的互联互通开始建设，通过搭建灯塔工厂 IOT 互联平台，实现人机、机机、机物互联，生产过程各环节透明可控，平台调度中心集中监控、实时调度，推动工厂内生产高效协同。搭建数字化员工工作台，为制造全流程的参与者提供一站式办公服务，覆盖产前培训学习、任务代办通知、过程异常预警、产品创新交互等工作场景，构建了“事前有预算，事中有反馈、事后有闭环”的工作模式，极大提升了员工工作效率，同时有效保障了产品质量和制造成本的控制。然后是提升工厂并联供应商供应链协同能力，通过供应商数字化工作台的建设，从研发、生产、质量、交付全流程赋能工厂和供应商的深度协同，提升供应商的交付效率和交付质量，打造敏捷、高效、互信的供应链新生态。",
          english_intro:
            "      Four manufacturing sites of Haier Smart Home have joined the Global Lighthouse Network by the World Economic Forum and McKinsey Consulting Company. The Lighthouse Digital Platform provides excellent support for Haier's digital transformation (DT). Interconnectivity runs as the start of “Lighthouse” DT: The IoT platform is established to build connections between man-machine, machine-machine or machine-things, and the control center will monitor, dispatch in real-time during the whole visualization process. The staff digital workstation provides “one-stop” service to meet all possible needs from staff during the work, including training, notice, alert, task tracing etc., which improves the entire work efficiency tremendously, and keeps the quality and cost running at a competitive level. Next step is to increase the capability of synergy with suppliers: delivery efficiency and quality is improved by deep synergy in each step during the whole business process like R&D, manufacturing, quality-control and delivery. Finally, with the integrated digital platform, Haier Smart Home built the new supply chain ecosystem of agility, efficiency and mutual trust.",
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/715c_9780b88f.mp4",
          publish_date: "2022-06-16 15:39:13",
          create_date: "2022-06-16 15:39:09",
        },
        {
          id: "2",
          title: "基于工业互联网标识解析的全生命周期高端智能厂内物流系统",
          key_word:
            "数字化、智能化、全生命周期管理、工业互联网二级节点标识解析",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/c55c_335b81f6.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/eb5e_fe7c7ae5.png",
          company: "昆山同日工业自动化有限公司",
          field: "制造过程智能化技术与系统（数字化工厂/车间）",
          chinese_intro:
            "      贵阳万江是一家具有 60 多年历史的生产航空机载产品和汽车零部件的军、民用企业。由于原材料和产品品类繁多，在材料的拣选、分类、搬运耗费了大量的人力物力。\n      昆山同日为其设计、实施了包括新厂建设和旧厂改造在内的智能仓储物流系统，该系统基于物联网和工业大数据技术，通过建设入库输送线、智能货柜、智能货架、分拣输送线、跨楼层货梯、自动导引车（AGV）、智能料塔、TRX 软件平台，工业互联网标识解析体系，逐步实现厂房与厂房之间、厂房内区域之间、区域内设备之间三个层级的柔性联动；确保在合适的时间，通过合适的装备，将合适的物料送到合适的位置，达到信息流、生产流和物料流的深度融合，达到智能“感知”、精准“互联”和高效“执行”，最终实现技术创新驱动管理创新。\n      系统适应性强，特别适合服务器电脑主机、卫浴洁具、汽车零部件、线束等行业的生产制造过程跟踪、物料容器精细化管理，是实实在在的智能制造落地开花的应用系统。",
          english_intro:
            '      Guiyang Wanjiang is a military and civil enterprise with more than 60 years of experience in the production of aviation products and auto parts. Because of the variety of raw materials and products, selection, classification and transportation of materials consumes much time and manpower.\n      Tungray (Kunshan) has designed and implemented an intelligent warehousing and logistics system including the construction of a new factory and the renovation of the old one. The system is based on the Internet of Things (IoT) and industrial big data technology. The flexible interaction of devices in three levels, including plants and plants, regions and regions, and devices and devices, is realized through the construction of warehousing conveying line, intelligent container, intelligent shelf, sorting conveying line, cross-floor cargo elevator, automatically guided vehicles (AGV), intelligent material tower, TRX software platform and industrial internet identification analysis system, ensuring that the right materials are delivered to the right place at the right time with the right equipment, achieving in-depth integration of information flow, production flow and material flow, reaching the target of combining intelligent "perception", precise "connectivity" and efficient "execution", and ultimately realizing management innovation driven by technology innovation.\n      The system has strong adaptability, especially suitable for tracking the manufacturing process and fine management of material containers in the industries of server computer mainframe, sanitary ware, auto parts, wire harness, etc. It is a real application system of intelligent manufacturing.',
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/8382_b0308c64.mp4",
          publish_date: "2022-06-16 15:50:23",
          create_date: "2022-06-16 15:44:46",
        },
        {
          id: "3",
          title: "面向铸造行业的全流程生产数字化及优化控制关键技术与产业化",
          key_word: "铸造数字化技术、轻量化建模、模块化柔性拼接",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/63e3_2be1cca1.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/0795_196e40af.png",
          company: "天津开发区精诺瀚海数据科技有限公司",
          field: "制造过程智能化技术与系统（数字化工厂/车间）",
          chinese_intro:
            "      铸造是制造业的基础，是衡量国家工业水平的重要标志，为解决我国铸造行业生产过程中存在的工艺复杂、智能化转型困难等共性问题，项目研究了面向铸造行业的全流程生产数字化及优化控制关键技术，实现了工艺、生产、产品等数据的实时采集、在线共享和全面融合，通过挖掘数据价值，提出了设备群故障诊断与健康管理的方法，建立了预测、优化的核心工艺库，完成了快速柔性拼接的模块化开发、部署技术。",
          english_intro:
            "      Casting is the foundation of manufacturing industry and an important symbol to measure the national industrial level. To solve the common problems of complex process and intelligent transformation in the production process of China's foundry industry, the project has studied the key technologies of digitalization and control optimization in the whole process of foundry industry, and realized the real-time collection, online sharing and comprehensive integration of data of process, production and product. By mining the data value, the method of equipment fault diagnosis and health management has been put forward, the core process database of prediction and optimization has been established, and the modular development and deployment technology of fast and flexible splicing has been completed.",
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/7891_b3f5391f.mp4",
          publish_date: "2022-06-16 15:50:24",
          create_date: "2022-06-16 15:47:42",
        },
        {
          id: "4",
          title: "智能加工机器人技术及应用",
          key_word: "性能设计、工艺规划、多模式控制",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/5a21_83e42e04.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/8a57_99fcc467.png",
          company: "天津大学",
          field: "智能化装备",
          chinese_intro:
            "      项目针对跨尺度多材质铸造件磨切一体加工需求，从基础理论、装备创成和工程应用三个层面，攻克了机构发明、性能设计、工艺规划与智能控制等核心技术，研制成功 3 个系列 10 种规格新一代磨切一体智能加工机器人，已在航空航天、汽车船舶、轨道交通等领域应用 150 台 / 套，有效解决了铸造件磨切一体加工难题。\n      项目授权中国专利 49 件，发表学术论文 24 篇，整体成果达到了“国际领先”水平，获得 2020 年天津市技术发明一等奖、中国好设计金奖等荣誉，并入选 2021 年中国智能制造十大科技进展。项目突破了制约行业产能、安全生产和环境治理等方面的技术瓶颈，推动了铸造业转型升级；经济与社会效益显著，对促进我国高端制造装备的自主创新具有重大意义。",
          english_intro:
            '      Aiming at the needs of integrated grinding and cutting technique of multi-scale and multi-material castings, the project has developed core technologies such as mechanism invention, performance design, process planning and intelligent control from basic theory, equipment creation and engineering application, and developed 10 specifications of new generation intelligent machining robots with integrated grinding and cutting technique in three series. 150 sets of the robots have been applied in aerospace, automobile and ship, rail transit and other fields, effectively solving the casting-processing problem of grinding and cutting integration.\n      The project has authorized 49 Chinese patents and published 24 academic papers, and the overall achievement has reached the "international leading" level. It has won the first prize of Tianjin Technological Invention Award, Gold Award of China Good Design and other honors in 2020, and has been selected as one of the top ten Scientific and Technological Progress of Intelligent Manufacturing in China in 2021. The project breaks through the technical bottlenecks that restrict industrial production capacity, safety production and environmental governance, and promotes the transformation and upgrading of the foundry industry. The economic and social benefits of the project are significant, and it is of great significance to promote the independent innovation of high-end manufacturing equipment in China.',
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/960c_e2d51eb8.mp4",
          publish_date: "2022-06-16 15:50:25",
          create_date: "2022-06-16 15:49:06",
        },
        {
          id: "5",
          title: "基于自主创新的大型流域水电公司智慧企业建设",
          key_word: "智慧企业、人机协同、大数据",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/1f43_e44d5b6a.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/5f83_2550577a.png",
          company: "国能大渡河流域水电开发有限公司",
          field: "智能化装备",
          chinese_intro:
            "      2014年以来，国能大渡河公司深入贯彻新发展理念，全面落实国家能源集团战略，基于大型流域水电企业开展智慧企业探索实践，以中国工程院原常务副院长潘云鹤院士为总顾问，钟登华、陈纯院士等一批国内知名专家学者组成的顾问团队完成智慧企业顶层设计，在企业界首创提出智慧企业理论体系，率先在大型国有企业开展实践，实现千万千瓦机组智能自主运行。在企业整体的角度，强化物联网建设、深化大数据挖掘、推进管理变革创新，将先进的信息技术、工业技术和管理技术深度融合，实现企业全要素的数字化感知、网络化传输、大数据处理和智能化应用，从而使企业呈现出风险识别自动化、决策管理智能化、纠偏升级自主化的柔性组织形态和新型管理模式。经过8年智慧企业建设有力推动大渡河公司管理模式由层级制向中心制转变，生产管理由人工化向智能化转变，决策指挥由经验化向数据化转变，风险防控由被动式向预判式转变，职工队伍由生产型向创新型转变。",
          english_intro:
            "      Since 2014, CHN Energy Dadu River Hydropower Development Company, thoroughly following the new development  philosophy and fully implementing the strategy of the China Energy Group, has put together an advisory team consisting of  nationally renowned experts and scholars, including Academician Pan Yunhe, former executive vice president of the Chinese  Academy of Engineering, as the leading advisor, and Academician Zhong Denghua and Academician Chen Chun, to explore the  possible approach of transforming the hydroelectricity enterprise of a large river basin into an intelligent enterprise. The team  became the first to complete the top-design and introduced the intelligent enterprise theory, and the Dadu River Hydropower  Development Company became the first state-owned enterprise to initiate the transition, realizing smart and autonomous  operation of turbine units totaling over 10 million kilowatts. Aiming at in-depth integration of advanced information technology,  engineering and management, the enterprise has strengthened the construction of the IoT, deepened big data mining,  promoted management reform and innovation and as a result, successfully realized the digital perception, network-based  transmission, big data processing and application of smart technology of all enterprise resources.                         \n      A flexible organizational  structure and new management model is established, featuring automated risk identification, smart decision-making, and  autonomous correcting and upgrading. After eight years of building an intelligent enterprise, the Dadu River Hydropower  Development Company has transformed its management model from hierarchical structure to center-oriented, its production  management from manual to AI-assisted, its decision-making from empirical to data-supported, its risk prevention and control  from passive to proactive, and its employees from workers to innovators.",
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/f6d4_0e4ffee6.mp4",
          publish_date: "2022-06-16 15:50:26",
          create_date: "2022-06-16 15:50:18",
        },
        {
          id: "6",
          title: "印刷行业大规模个性化定制解决方案",
          key_word: "大数据分析、人工智能、VR技术",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/3822_4b848d27.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/97aa_7b17b648.png",
          company: "世纪开元智印互联科技集团股份有限公司",
          field: "制造过程智能化技术与系统（数字化工厂/车间）",
          chinese_intro:
            "      世纪开元打造益好定制印刷服务平台，以 C2B 模式为指导，运用“互联网 + 智能工厂”的方式，通过线上接单、在线设计，线下智能化生产、物流配送，满足用户印刷产品个性化定制服务需求。本平台通过科技研发和智能生产，解决了印刷行业大规模个性化定制的生产难题，创新性主要体现在：\n      平台化设计的创新：自主研发众包设计师平台及智能设计系统，根据众包模式与共享经济红利搭建的创意设计师平台拥有 40 万在线设计师，可为用户提供千万套自助设计模板与定制服务，提升产品设计质量和效率。\n      智能化生产的创新：通过益好定制印刷服务平台的柔性化智能印刷系统能够处理海量订单，低成本、高品质地完成小批量柔性化生产，并实现快速交付。\n      网络化协同的创新：益好定制印刷服务平台的供应链管理系统，能够将平台海量的订单根据客户需求及距离远近实现自动匹配，由自建工厂和全国各地的外协厂家通过网络化协同完成个性化订单的生产。\n      个性化定制的创新：在 C2B 和 S2b2C 的商业模式下，根据用户定制需求调整设计、生产、供应指标，为用户提供个性化的产品。\n      服务化延伸的创新：从生产型制造向服务型制造转型，线下开展新零售模式触达用户，感知用户需求。通过智慧门店管理系统以及微商城 APP，促进线上线下融合发展。\n      数字化管理的创新：以益好定制印刷服务平台，整合线上线下全渠道的订单；自主研发的商业系统通过智能化，实现全链路的数字化经营管理系统标准化的流程，将小订单整合优化，转化为规模效应。同时通过SaaS 级的云端管理软件，提供给所有合作伙伴，实现业务在线化、可视化、数据化、智能化，提升管理效率。",
          english_intro:
            "      Shandong Century Innovation E-commerce Group builds the Yeehaw Custom printing service platform (referred to as“Yeehaw” hereinafter) to meet the users’ personalized customization demand of printing products, guided by the C2Bmodel, using the “Internet + Smart Factory” approach, through online ordering, online design, offline intelligent production,logistics and distribution. This platform solves the production challenges of mass customization facing the printing industrythrough technological research and intelligent production. The innovations are mainly reflected in:\n      Innovation in platform-based design: a crowdsourcing designer platform and an intelligent design system are independentlydeveloped. The creative designer platform built upon outsourcing mode and sharing economy dividends contains more than400,000 online designers and can provide users with thousands of DIY design templates and customization services to improvethe quality and efficiency of product design.\n      Innovation in intelligent production: the Yeehaw flexible intelligent printing system is able to handle massive orders,complete small-batch flexible production with low cost, high quality and fast delivery.\n      Innovation in networked collaboration: Yeehaw platform’s supply chain management system is able to automaticallymatch the massive orders on the platform according to customers’ demands and distances, then finish the customizationorders through the interconnected collaboration between the self-built factory and outsourced factories all around the country.\n      Innovation in personalized customization: Under the business model of C2B and S2b2C, the design, production and supplyquota are adjusted to the customization needs of users, so as to provide users with personalized products.\n      Innovation in service-oriented extension: transform from production-based manufacturing to service-based manufacturingand carry out a new retail model offline to reach users and perceive their needs. Through the smart store management systemand Micro-Mall application, it improves the integrated development of online and offline businesses.\n      Innovation in digitalized management: Yeehaw platform integrates online and offline orders in all channels; Via intelligence,the independently developed business system assembles and optimizes small orders and turns them into economies ofscales through the standardization process of the full-link digitalized management system. Meanwhile, through SaaS cloudmanagement software, the platform is accessible to all partners to improve the management efficiency by realizing online,visualized, data-based, intelligent business.",
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/5907_5929f258.mp4",
          publish_date: "2022-06-16 15:52:29",
          create_date: "2022-06-16 15:52:26",
        },
        {
          id: "7",
          title: "无人驾驶新概念智能农机",
          key_word: "无人驾驶、人工智能、农业机器人",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/7e39_b7b54aa9.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/2648_f19d7401.png",
          company: "北京中科原动力科技有限公司",
          field: "智能化装备",
          chinese_intro:
            "      无人驾驶新概念智能农机集合人工智能和无人驾驶技术，具备全昼夜无人化精准作业能力，相比传统农机，作业更安全、更精准、更省钱、更高效。应用场景覆盖耕整地、播种、中耕植保、收获、秸秆还田等大田作业全过程，可适配二十余种不同农具；大幅减少作业人员数量，实现一人对多机管理，补充“老机手”缺口；可承受连续、高强度、长时间作业，解决有限时间窗口内大强度作业问题。产品已应用于北大荒集团、中粮集团以及多家现代农机专业合作社，在黑龙江、河北、北京等地累计完成无人标准化作业超 10 万亩，参与研究的“蔬菜规模化生产人机智能协作技术”入选农业农村部十大引领性技术。",
          english_intro:
            '      Unmanned new-concept intelligent agricultural machinery, empowered by AI and autonomous driving technology, can operate with precision all day and night, making farming operations safer, more accurate, more economical and more efficient. It can be used in the whole process of ploughing, sowing, planting, intertillage and plant protection, harvesting, straw turnover etc. Also, it can be adapted to more than 20 different agricultural tools. It helps significantly reduce the number of operators required, realize one-to-many machine management and solve the problem of insufficient senior operators. It can bear continuous, high-intensity and long-term operation with precision, hence solving the problem of high-intensity operation in limited time. Our products have been commercialized and put into use by Beidahuang Group, COFCO and a number of large scale modern agricultural machinery cooperatives. In terms of actual production, our products have been used in standardized unmanned operations covering an area of over 100,000 mu (about 6,666 hectares) in Heilongjiang, Hebei, Beijing etc. We have participated in the development of "intelligent human-machine collaboration technology for vegetable mass production", which has been included into the list of ten leading technologies of the Ministry of Agriculture and Rural Affairs of PRC.',
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/22ed_58e030a5.mp4",
          publish_date: "2022-06-16 15:57:45",
          create_date: "2022-06-16 15:53:37",
        },
        {
          id: "8",
          title:
            "天津港依托华为5G及车路云协同技术，打造自动化集装箱码头高效智能水平运输解决方案",
          key_word: "AI智能调度、5G+北斗、无人驾驶",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/d9d2_48c97f08.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/d4fe_5baca22c.png",
          company: "天津港第二集装箱码头有限公司",
          field: "智能化装备",
          chinese_intro:
            "      天津港第二集装箱码头有限公司自主设计和研发 76 台智能水平运输机器人 ART，港口领域全球首创，它采用超 L4 级无人驾驶技术，依托 5G 网络和北斗定位技术，实现集装箱自动化水平运输。同时，自主设计和研发智能水平运输系统，创新性应用全局路径规划与局部路径规划相结合的方式，加持自适应变拓扑动态路径规划算法，实现 ART 精确引导和驾驶协管控，满足集装箱自动化水平运输过程中充电、超车、避障、绕行、缓冲调序等全工况需求，打造全球首个基于超 L4 级无人驾驶技术和水平布置边装卸工艺的智能化集装箱码头水平运输解决方案，为传统人工码头智能化升级改造提供可推广可复制的“天津方案”。",
          english_intro:
            '      The company has independently designed and manufactured 76 intelligent horizontal transportation robots ART, which is the first in the world in the port field. It adopts ultra-L4 unmanned technology and relies on 5G network and Beidou Navigation System to realise the automated horizontal transportation of containers. At the same time, the project has independently designed and developed an intelligent horizontal transportation system, which is creatively applied with the combination of overall and partial path planning, added with the algorithm of adaptive variable topology dynamic path planning, hence realising ART accurate guidance and driving assistant control, meeting the needs of all working conditions such as charging, overtaking, obstacle avoidance, bypassing, buffering and sequencing, and creating the world\'s first intelligent horizontal transportation solution for container terminals based on ultra-L4 driverless technology and horizontal loading and unloading technology. It then provides a popular and replicable "Tianjin solution" for the intelligent upgrading and transformation of traditional terminals.',
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/af2f_be5f3aa2.mp4",
          publish_date: "2022-06-16 15:57:47",
          create_date: "2022-06-16 15:54:38",
        },
        {
          id: "9",
          title: "现代中药智能制造",
          key_word:
            "现代中药智慧生产系统、现代中药生产过程控制技术、现代中药高速滴制技术",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/2b2d_78361d58.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/6a51_c63dadbf.png",
          company: "天士力医药集团股份有限公司",
          field: "智能化装备、制造过程智能化技术与系统（数字化工厂/车间）",
          chinese_intro:
            "      中医药是中华文化的瑰宝，是实现“健康中国”的重要支撑力量，对推动构建人类卫生健康共同体具有重要意义。长期以来，天士力以国际化为引领，助推中医药振兴发展，打造了世界领先的现代中药智能制造平台，建立了中药生产新模式。\n      为达到国际药物研究和药品监管近乎严苛的安全性和质量标准要求，天士力自主研发了全球唯一的超高速滴丸生产设备，突破多项智能制造核心装备短板，并将质量数字化与工业化、信息化融合，把传统中药的模糊语言转换为现代中药的数字化语言，把数字化语言集成为逻辑性系统，把数字系统导入智能制造装备，最终实现基于数据整合的产品全生命周期协同管理，打造了“会说话的现代中药”。使过去笼统模糊、说不清楚的传统中药，达到药效物质明确，作用机理清晰，质量一致可控。天士力由此荣膺天津市制造业单项冠军和领航企业，入选国家智能制造试点示范。\t2016 年，复方丹参滴丸顺利完成美国 FDA 全球多中心、随机双盲、大样本三期临床试验，开创历史先河。依托新生产模式在生产效率、运营成本、产品研制周期、产品不良率、单位产值能耗等综合指标的提高改善，公司产品竞争力持续提升，超过 10 款单品销售过亿，复方丹参滴丸在全国口服类缺血性心脏病中成药排名第一。\n      天士力还将智能制造技术与装备建设成为全产业链范围内标准化、规范化技术体系，体系可推广、可转移，为行业提供系统性技术解决方案与良好示范效应。",
          english_intro:
            '      Traditional Chinese medicine (TCM) is a treasure of Chinese culture and an important support force for the realizationof a "healthy China". It is of great significance to the building of a community of health for mankind. For a long time, Taslyhas promoted the revitalization and development of TCM, built the world\'s leading Modern Chinese Medicine intelligentmanufacturing platform, and established a new model of TCM production.\n      To meet the nearly rigorous safety and quality standards of international herbal products research and it’s regulation,Tasly has independently researched and developed the world\'s only ultra-high-speed dropping pill production equipment,broken through many shortcomings of intelligent manufacturing core equipment, and integrated quality digitalization withindustrialization and information, converting the fuzzy language of TCM into the digital language of Modern Chinese Medicine,integrating the digital language into a logical system, and introducing the digital system into intelligent manufacturing equipment,finally realizing the collaborative management of product life cycle based on data integration, and creating a "Taking ModernChinese Medicine". The TCM, which was vague and unclear in the past, has achieved clear pharmacodynamic substances,clear mechanism of action and consistent and controllable quality. As a result, Tasly won the title of Tianjin manufacturingsingle champion and pilot enterprise, and was selected as the national intelligent manufacturing pilot demonstration. In 2016,Compound Salvia Miltiorrhiza Dripping Pills successfully completed the global multi-center, randomized double-blind, large\u0002sample phase III clinical trial of the US FDA, creating a historical precedent. Relying on the improvement of the new productionmode in production efficiency, operating cost, product development cycle, product defect rate, energy consumption per unitoutput value and other comprehensive indicators, the company\'s product competitiveness has been continuously improved,with more than 10 single products sold over 100 million. Compound Salvia Miltiorrhiza Dripping Pills ranks first in oral Chinesepatent medicine for ischemic heart disease in China.\n      Tasly will also build intelligent manufacturing technology and equipment into a standardized technical system within thewhole industry chain, which can be promoted and transferred to provide systematic technical solutions and good demonstrationeffect for the industry.',
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/26ea_3c81d81d.mp4",
          publish_date: "2022-06-16 15:57:51",
          create_date: "2022-06-16 15:56:15",
        },
        {
          id: "10",
          title: "基于数据流AI芯片的智慧安监解决方案",
          key_word: "数据流技术",
          cover:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/fbab_cb9a212b.jpg",
          logo: "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/1e2a_5696072b.png",
          company: "深圳鲲云信息科技有限公司",
          field: "关键技术及核心基础部件",
          chinese_intro:
            "      鲲云科技基于自主研发的数据流架构，发挥底层算力优势，利用数倍于国内外同类产品的芯片利用率优势为行业提供具有绝对算力性价比优势的数据流 AI 芯片，推出星空加速卡系列及边缘计算小站等 AI 计算平台，面向工业领域石油、化工、电力、冶金等行业中的 AI 视觉分析需求，充分发挥算力和算法联合优化的技术优势，提供更具算力性价比的软硬件一体化解决方案，支持人员行为、环境风险、生产设备、特殊作业的实时智能监测报警，助力工业制造业实现安全生产管理智能化。",
          english_intro:
            "      Corerain Technologies is a leading artificial intelligence chip company, developing a new AI chip architecture CAISA3.0,Custom Artificial Intelligence Streaming Accelerator (CAISA) Architecture, and released the world's first commercially availablestreaming AI chip CAISA. With a series of technical breakthroughs, this chip utilised the advantages of the data streamingarchitecture and achieved over 10x efficiency when compared with other similar products in the market. With only 1/3 of thepeak performance, CASIA chip can provide over 3 times measurable performance of the popular GPU based products. As thefirst streaming AI chip company to achieve mass production, Corerain has teamed up with the world's leading IT companies,such as Intel Corp, Inspur Group, China Unicom, Phytium and Dell.\n      Based on CAISA chip, Corerain integrates Accelerators-Algorithm-Platform applying AI visual intelligence analysis technologyto provide solutions with real-time intelligent monitoring and alarming of personnel behavior, environmental risks, productionequipment and special operations, to help the chemical industry achieve intelligent EHS management.",
          video:
            "https://dawards-oss.oss-cn-beijing.aliyuncs.com/upload/px/8e7b_43adcbca.mp4",
          publish_date: "2022-06-16 15:57:53",
          create_date: "2022-06-16 15:57:42",
        },
      ],
    };
  },
  computed: {
    currentList() {
      return this.currentPage - 1;
    },
  },
  methods: {
    handleLogin() {
      this.isLogin = true;
    },
    handleToRegisterPage() {},
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
    margin-bottom: 75px;
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