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
          console.log(response);
        })
        .catch(error => {
          console.log("There was an error:", error.response);
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
