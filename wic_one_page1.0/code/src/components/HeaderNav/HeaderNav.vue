<template>
  <div class="header_nav_container">
    <div class="header_nav_wrapper">
      <div class="header_img">
        <img src="../../assets/wic_logo.png" />
      </div>
      <p class="p_title">WIC智能科技创新应用优秀案例评选</p>
      <ul v-if="this.$route.path != '/register'">
        <li
          v-for="(item, index) in headerList"
          :key="index"
          :class="isCurrent === index ? 'isActive' : ''"
        >
          <router-link :to="item.path" @click.native="handelToggleClass(index)">
            {{ item.listItem }}</router-link
          >
        </li>
      </ul>
      <p
        :class="
          this.$route.path != '/register'
            ? 'toggle_language'
            : 'toggle_language_register'
        "
      >
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
        { listItem: "评选首页", path: "/" },
        { listItem: "征集通知", path: "/" },
        { listItem: "新闻动态", path: "/" },
        { listItem: "往届优秀案例展示", path: "/case" },
        { listItem: "大会官网", path: "/" },
      ],
      isZh: Number(sessionStorage.getItem("isZh")),
      isCurrent: 0 || Number(sessionStorage.getItem("isActive")),
    };
  },
  methods: {
    handleCommand(command) {
      this.isZh = Number(command);
      sessionStorage.setItem("isZh", command);
    },
    handelToggleClass(index) {
      this.isCurrent = index;
      sessionStorage.setItem("isActive", index);
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang='scss' scoped>
.isActive {
  color: #21ddff;
  border-bottom: 2px solid #21ddff;
}
.header_nav_container {
  height: 81px;
  background-color: #00082b;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 75px;
  .header_nav_wrapper {
    width: 1200px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
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
      height: 100%;
      // justify-content: space-between;
      // flex: 1 0 auto;
      font-size: 14px;
      li {
        display: flex;
        align-items: center;
        padding: 0px 10px;
        height: 100%;
        cursor: pointer;
        &:hover {
          background-color: #232738;
        }
        p,
        a {
          cursor: pointer;
          color: inherit;
        }
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
    .toggle_language_register {
      font-size: 14px;
      position: absolute;
      right: 96px;
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