/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "@/locale";

Vue.config.productionTip = false;

new Vue({
  async beforeCreate() {
    await this.$store.dispatch("login/getMemberInfo");
  },
  store,
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
