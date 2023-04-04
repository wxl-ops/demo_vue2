/*
 * @Author: hyman
 * @Date: 2022-03-21 17:17:18
 * @LastEditors: hyman
 * @LastEditTime: 2022-03-31 13:32:32
 * @Description: 请填写简介
 */
import Vue from "vue";
import Router from "vue-router";
//引用页面组件
//注册信息
import register from "@/page/register/detail";
import nav from "@/page/nav/index";
import navh5 from "@/page/nav/index-h5";
import Layout from "@/components/layout";
import list from "@/page/list/list";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/register/",
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      redirect: { name: "register" },
      children: [
        {
          path: "/register",
          name: "register",
          component: register,
          meta: {
            title: "注册",
            highlight: "register",
            active_name: "register"
          }
        },
        {
          path: "/nav",
          name: "nav",
          component: nav,
          meta: {
            title: "落地页",
            highlight: "nav",
            active_name: "nav"
          }
        },
        {
          path: "/nav-h5",
          name: "navh5",
          component: navh5,
          meta: {
            title: "落地页",
            highlight: "nav",
            active_name: "nav"
          }
        },
        {
          path: "/list",
          name: "list",
          component: list,
          meta: {
            title: "落地页",
            highlight: "list",
            active_name: "list"
          }
        }
      ]
    }
  ]
});
