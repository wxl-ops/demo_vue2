<template>
  <div id="app">
    <map-tick />
  </div>
</template>

<script>
import MapTick from "./components/MapTick/MapTick.vue";

export default {
  name: "App",
  components: {
    MapTick,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
