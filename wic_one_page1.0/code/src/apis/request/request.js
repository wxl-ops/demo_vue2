import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000
});

instance.interceptors.request.use(
  config => {
    console.log("请求拦截器返回的内容", config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    console.log("响应拦截器返回的内容", response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
