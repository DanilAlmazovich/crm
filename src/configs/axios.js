import axiosApi from "axios";
import _ from "lodash";
import store from "../store";
import router from "../router";

const axios = axiosApi.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "X-Custom-Header": "XMLHttpRequest",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  },
  withCredentials: true,
});

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem("access-token");

  if (token) {
    config.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  function (response) {
    if (response.headers && _.has(response.headers, "authorization")) {
      localStorage.setItem("access-token", response.headers.authorization);
    }

    return response;
  },
  function (error) {
    console.log(error);
    if (
      error.response &&
      error.response.status &&
      error.response.status === 401
    ) {
      store.dispatch("logout");
      router.push({ name: "Login" });
    }

    return Promise.reject(error.response);
  }
);

export default axios;
