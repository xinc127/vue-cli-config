import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store'

import './components/index' // 全局注册组件
import api from './api' // api 出口
import * as filters from './filters' // 全局的 filters

import 'normalize.css/normalize.css' // css 样式重置模板
import './styles/index.scss' // 全局的 css
import './cube-ui'

Vue.config.productionTip = false
// 挂载 api 到 vue 实例
Vue.prototype.$api = api
// 注册全局的 filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
