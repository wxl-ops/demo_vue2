<template>
  <div id="app">
    <header-nav />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>


<script>
import HeaderNav from "./components/HeaderNav/HeaderNav.vue";
export default {
  components: { HeaderNav },
  name: "App",
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  // height: 100%;
  background: url("./assets/back_pc.jpg") 0% 0% / cover no-repeat;
  font: 16px "PingFang SC", "微软雅黑", "Microsoft YaHei", Helvetica,
    "Helvetica Neue", Tahoma, Arial, sans-serif;
  color: #fff;
  .container {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
