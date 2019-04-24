import request from './http'

const article = {
  // 新闻列表
  articleList () {
    return request({
      url: '/get/articles'
    })
  },
  // 新闻详情
  articleDetail (id, params) {
    return request({
      url: `/get/article/${id}`,
      params
    })
  }
}

export default article
