// api/http.js
import axios from 'axios'
// import router from '@/router'
import { Toast } from 'cube-ui'
import {
  showFullScreenLoading,
  tryHideFullScreenLoading,
} from './utils/loading'

const service = axios.create({
  // 设置超时时间
  timeout: 5000,
  baseURL: process.env.BASE_URL,
})

// 设置 POST 请求头为 application/x-www-form-urlencode; charset=UTF-8
service.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencode;charset=UTF-8'

/**
 * 请求前拦截
 */
service.interceptors.request.use(
  config => {
    // 可配置是否显示 loading
    // if (config.showLoading) {
    //   showFullScreenLoading()
    // }
    showFullScreenLoading()
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = token
    } else {
      // router.replace({
      //   path: loginUrl,
      //   query: {
      //     redirect: router.currentRoute.fullPath
      //   }
      // })
    }
    return config
  },
  error => {
    tryHideFullScreenLoading()
    return Promise.reject(error.data)
  },
)

/**
 * 请求响应拦截
 */
service.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()
    const responseCode = response.status
    if (responseCode === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    tryHideFullScreenLoading()
    // 断网超时处理
    if (!error.response) {
      if (error.message.includes('timeout')) {
        console.log('超时了')
        Toast.$create({
          txt: '请求超时，请检查网络是否连接正常',
          type: 'error',
        }).show()
      } else {
        console.log('断网了')
        Toast.$create({
          txt: '请求失败，请检查网络是否连接正常',
          type: 'error',
        }).show()
      }
    }
    const responseCode = error.response.status
    switch (responseCode) {
      case 404:
        Toast.$create({
          txt: '网络请求不存在',
          type: 'error',
        }).show()
        break
      default:
        Toast.$create({
          txt: error.reponse.data.message,
          type: 'error',
        }).show()
    }
    return Promise.reject(error.data)
  },
)

export default service
