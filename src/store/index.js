import { createStore } from "vuex";
import axios from "../configs/axios";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    logout(state) {
      state.user = null;
      localStorage.removeItem("access-token");
    },
  },
  actions: {
    loadMe({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("/me")
          .then(({ data }) => {
            commit("setUser", data);

            resolve(data);
          })
          .catch((e) => {
            console.log(e);
            reject(e);
          });
      });
    },

    setTitle(text) {
      document.title = text || "";
    },

    logout(state) {
      state.commit("logout");
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  modules: {},
});
