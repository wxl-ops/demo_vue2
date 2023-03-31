/*
 * @Author: hyman
 * @Date: 2022-03-29 18:59:10
 * @LastEditors: hyman
 * @LastEditTime: 2022-04-14 16:39:48
 * @Description: 请填写简介
 */
"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");
const assetsPublicPath =
  "https://tj-test-1302130151.file.myqcloud.com/tj-register/";
const assetsPublicPathCOS_ENV =
  "https://tj-shuangbian-cos-prod-1302130151.file.myqcloud.com/tj-register/";

const COS_ENV =
  process.env.COS_ENV === "CosPro" ? assetsPublicPathCOS_ENV : assetsPublicPath;

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {
      "/api": {
        target: "https://t-meeting.wicongress.org.cn",
        changeOrigin: true, //是否跨域
        pathRewrite: {
          "^/api": "" //需要rewrite重写的,
        }
      }
    },

    // Various Dev Server settings
    host: "localhost", // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: "cheap-module-eval-source-map",

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, "../dist/index.html"),

    // Paths
    assetsRoot: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: COS_ENV,

    /**
     * Source Maps
     */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: "#source-map",

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ["js", "css"],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
