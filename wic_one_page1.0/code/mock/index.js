const Mock = require("mockjs");
const data = require("./data.json");
const baseURL = "http://localhost:8080";
// Mock.setup({ timeout: "1000-2000" });
Mock.mock(baseURL + "/getArticleContent", {
  code: 0,
  data: data.articleContent
});
Mock.mock(baseURL + "/getDetailTitle", {
  code: 0,
  data: data.detailTitle
});
Mock.mock(baseURL + "/getImgList", {
  code: 0,
  data: data.imgList
});
Mock.mock(baseURL + "/getNewsList", {
  code: 0,
  data: data.newsList
});
Mock.mock(baseURL + "/getExcellentCasesList", {
  code: 0,
  data: data.excellentCasesList
});
