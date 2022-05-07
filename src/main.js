import Vue from 'vue'
import App from './App'
import router from "./route/index";
import store from "./store/index";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$store = store
Vue.use(VueLazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
