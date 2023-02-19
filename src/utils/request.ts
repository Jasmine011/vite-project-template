import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const service = axios.create({
  baseURL: "/api",
  timeout: 8000,
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    NProgress.start();

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    NProgress.done();
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    NProgress.done();
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
