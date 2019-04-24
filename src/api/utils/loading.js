import { Toast } from 'cube-ui'

/**
 * 请求合并只出现一次 loading
 */
let needLoadingRequestCount = 0

function loading (str) {
  let toast = Toast.$create({
    txt: 'Loading...',
    mask: true,
    time: 0
  })

  if (str === 'start') {
    toast.show()
  } else if (str === 'end') {
    toast.hide()
  }
}

export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    loading('start')
  }
  needLoadingRequestCount++
}

export const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    loading('end')
  }
}
