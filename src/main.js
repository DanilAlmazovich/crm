import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import axiosApi from "axios";

const axios = axiosApi.create({
  baseURL: process.env.VUE_APP_API_URL,
});

window.axios = axios;

createApp(App).use(store).use(router).mount("#app");
