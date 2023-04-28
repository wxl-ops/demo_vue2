<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <SdkDemo />
</template>

<script>
import SdkDemo from "./components/SdkDemo.vue";
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    SdkDemo,
    // HelloWorld
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background-color: black;
}
</style>
