<template>
  <div id="app">
    <header-nav />
    <!-- <div class="container"> -->
    <router-view />
    <!-- </div> -->
    <footer-page />
  </div>
</template>


<script>
import FooterPage from "./components/FooterPage/FooterPage.vue";
import HeaderNav from "./components/HeaderNav/HeaderNav.vue";
export default {
  components: { HeaderNav, FooterPage },
  name: "App",
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  min-width: 1219px;
  // height: 100%;
  // background: url("./assets/back_pc.jpg") 0% 0% / cover no-repeat;
  font: 16px "PingFang SC", "微软雅黑", "Microsoft YaHei", Helvetica,
    "Helvetica Neue", Tahoma, Arial, sans-serif;
  color: #fff;
  // .container {
  //   width: 1200px;
  //   margin: 0 auto;
  // }
}
</style>
