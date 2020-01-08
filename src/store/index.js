import Vue from "vue";
import Vuex from "vuex";

import service from "@/services/service.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    dataIsRecived: false
  },
  mutations: {
    UPDATE_DATA(state) {
      service
        .getData()
        .then(response => {
          state.data = response.data;
          state.dataIsRecived = true;
        })
        .catch(() => {
          state.dataIsRecived = false;
        });
    }
  },
  actions: {
    updateData(context) {
      context.commit("UPDATE_DATA");
    }
  },
  modules: {}
});
