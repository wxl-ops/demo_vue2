import Vue from "vue";
import Router from "vue-router";
const home_page = () => import("@/page/HomePage/HomePage");

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [{ path: "/", component: home_page }]
});
