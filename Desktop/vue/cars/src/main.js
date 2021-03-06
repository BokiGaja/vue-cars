import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router.js'
import Http from './services/Http'


Vue.use(VueRouter)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';

Vue.use(BootstrapVue)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
