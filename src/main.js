import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './components/index'
import api from './api'

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
