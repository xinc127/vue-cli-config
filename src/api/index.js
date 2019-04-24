/**
 * api/index.js
 * 统一的 api 接口
 */

// 文章接口
import article from './article'
// 文件上传
import uploadFile from './uploadFile'

// 导出接口
export default {
  uploadFile,
  article,
}
