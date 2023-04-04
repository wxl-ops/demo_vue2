import request from "./request/request";
export default {
  getArticleContent() {
    return request({
      url: "/getArticleContent",
      method: "GET"
    });
  },
  getDetailTitle() {
    return request({
      url: "/getDetailTitle",
      method: "GET"
    });
  },
  getImgList() {
    return request({
      url: "/getImgList",
      method: "GET"
    });
  },
  getNewsList() {
    return request({
      url: "/getNewsList",
      method: "GET"
    });
  },
  getExcellentCasesList() {
    return request({
      url: "/getExcellentCasesList",
      method: "GET"
    });
  },
  getAreaOptionsList() {
    return request({
      url: "/getAreaOptionsList",
      method: "GET"
    });
  },
  postLogin(data) {
    return request({
      url: "/postLogin",
      method: "POST",
      data
    });
  }
};
