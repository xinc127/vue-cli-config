import request from './http'

const uploadFile = formData => {
  return request({
    method: 'post',
    url: '/upload',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export default uploadFile
