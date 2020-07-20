import Vue from "vue";
import App from "./App.vue";
import "./scss/style.scss";
Vue.config.productionTip = false;
import AppButton from "./components/AppButton.vue";
require("vue2-animate/dist/vue2-animate.min.css");
Vue.component("AppButton", AppButton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
