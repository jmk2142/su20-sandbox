import Vue from "vue";
import { firestorePlugin } from "vuefire";
import App from "./App.vue";
import router from "./router";

/* LODASH ----------------- */
// import _ from "lodash";

/* BOOTSTRAP-VUE ---------- */
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";

/* INITIALIZE APP --------- */
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(firestorePlugin);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
