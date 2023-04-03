import Vue from "vue";
import Router from "vue-router";
const home_page = () => import("@/page/HomePage/HomePage");
const outstanding_case = () =>
  import("@/page/OutstandingCases/OutstandingCases");
const register_page = () => import("@/page/RegisterPage/RegisterPage");
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: home_page },
    { path: "/case", component: outstanding_case },
    { path: "/register", component: register_page }
  ]
});
