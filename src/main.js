import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import axios from "./configs/axios";
import Layout from "./layouts/Layout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import Icon from "./components/Icon.vue";
import Input from "./components/Input.vue";
import Button from "./components/Button.vue";
import Datepicker from "vue3-date-time-picker";
import Multiselect from "@suadelabs/vue3-multiselect";
import Viewer from "v-viewer";
import Modal from "./plugins/modal/plugin";
import _ from "lodash";
import Notifications from '@kyvg/vue3-notification'
import moment from 'moment'
import Pagination from "./components/Pagination.vue";

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties._ = _;
app.config.globalProperties.moment = moment;

app.component("icon", Icon);
app.component("layout", Layout);
app.component("auth-layout", AuthLayout);
app.component("v-input", Input);
app.component("v-button", Button);
app.component("datepicker", Datepicker);
app.component("multiselect", Multiselect);
app.component("pagination", Pagination);

app.use(Viewer);
app.use(Modal);
app.use(Notifications)

document.querySelector(
  "head"
).innerHTML += `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap">`;

moment.locale('ru');

app.use(store).use(router).mount("#app");
