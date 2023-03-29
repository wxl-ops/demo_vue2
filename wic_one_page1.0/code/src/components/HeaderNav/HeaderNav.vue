<template>
  <div class="header_nav_container">
    <div class="header_nav_wrapper">
      <div class="header_img">
        <img src="../../assets/wic_logo.png" />
      </div>
      <p class="p_title">WIC智能科技创新应用优秀案例评选</p>
      <ul>
        <li v-for="(headerItem, index) in headerList" :key="index">
          {{ headerItem }}
        </li>
      </ul>
      <p class="toggle_language">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ isZh ? "中文" : "English"
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">中文</el-dropdown-item>
            <el-dropdown-item command="0">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      headerList: [
        "评选首页",
        "征集通知",
        "新闻动态",
        "往届优秀案例展示",
        "大会官网",
      ],
      isZh: Number(sessionStorage.getItem("isZh")),
    };
  },
  methods: {
    handleCommand(command) {
      this.isZh = Number(command);
      sessionStorage.setItem("isZh", command);
    },
  },
};
</script>

<style lang='scss' scoped>
.header_nav_container {
  height: 81px;
  background-color: #00082b;
  display: flex;
  justify-content: center;
  align-items: center;
  .header_nav_wrapper {
    width: 1200px;
    display: flex;
    align-items: center;
    .header_img {
      width: 136px;
      height: 41px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 750px) {
      .header_img {
        width: 36px;
        height: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .p_title {
      // flex: 1 0 auto;
      font-size: 18px;
      padding-left: 37px;
      margin-right: 136px;
    }
    ul {
      list-style: none;
      display: flex;
      // justify-content: space-between;
      // flex: 1 0 auto;
      font-size: 14px;
      li {
        padding-right: 5px;
      }
    }
    .toggle_language {
      // flex: 1 0 auto;
      font-size: 14px;
      margin-left: 96px;
      .el-dropdown-link {
        color: #fff;
        .el-icon-arrow-down {
          font-size: 12px;
        }
      }
    }
  }
}
</style>