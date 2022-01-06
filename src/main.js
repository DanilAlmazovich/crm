import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import axiosApi from "axios";
import Layout from "./layouts/Layout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import Icon from "./components/Icon.vue";
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import Datepicker from "vue3-date-time-picker";
import Multiselect from "@suadelabs/vue3-multiselect";
import Viewer from "v-viewer";
import Modal from "./plugins/modal/plugin";

const app = createApp(App);

const axios = axiosApi.create({
  baseURL: process.env.VUE_APP_API_URL,
});

window.axios = axios;

app.component("icon", Icon);
app.component("layout", Layout);
app.component("auth-layout", AuthLayout);
app.component("v-input", Input);
app.component("v-button", Button);
app.component("datepicker", Datepicker);
app.component("multiselect", Multiselect);

app.use(Viewer);
app.use(Modal);

document.querySelector(
  "head"
).innerHTML += `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap">`;

app.use(store).use(router).mount("#app");
