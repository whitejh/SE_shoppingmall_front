import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import mixins from './mixins';
// import store from './store';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'; //
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  VueSweetalert2,
  BootstrapVue, // Install BootstrapVue
  IconsPlugin,  // Optionally install the BootstrapVue icon components plugin
  // mixins,
  // store,
  render: h => h(App)
}).$mount('#app')

window.Kakao.init('7193607a13069418981fb575a7e60559');