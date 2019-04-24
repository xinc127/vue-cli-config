// router/index.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const defaultRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
]

let routes = []

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 不做处理
  if (route.startsWith('./index')) return
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = [...defaultRoutes, ...(routerModule.default || routerModule)]
})

export default new Router({
  routes: routes,
})
