import storage from 'utils/storage'

const baseURI = import.meta.env.VITE_BASE_URL

const config = {
  baseUrl: baseURI,
  header: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  timeout: 10000,
}
// 拦截器
const interceptor = {
  // 请求拦截
  request: (config) => {
    config.header = {
      Authorization: storage.get('applet_token') || '',
    }
  }, // 响应拦截
  response: (response) => {
    //判断返回状态 执行相应操作
    const { statusCode, data = { code: 0, msg: '' } } = response
    const { code, msg } = data
    if (statusCode === 200) {
      if (code === 200) {
        return response.data
      } else if (code === 401) {
        uni.showToast({
          icon: 'none',
          title: msg || code + '异常',
        })
        // todo ... 退出登录
      } else {
        uni.showToast({
          icon: 'none',
          title: msg || '服务异常，请稍后再试',
        })
      }
    } else {
      uni.showToast({
        icon: 'none',
        title: '后台服务异常，请稍后再试',
      })
    }
    uni.hideLoading()
    setTimeout(() => {
      uni.hideToast()
    }, 2000)
  },
}
// 请求
const request = (options) => {
  return new Promise((resolve, reject) => {
    let _config = null
    options.url = baseURI + options.url
    options.complete = (response) => {
      let { statusCode, data } = response
      response.config = _config

      if (interceptor.response) {
        let newResponse = interceptor.response(response)
        if (newResponse) {
          response = newResponse
        }
      }
      if (statusCode === 200 && data.code === 200) {
        //成功
        resolve(response)
      } else {
        reject(response)
      }
    }

    _config = Object.assign({}, config, options)
    _config.requestId = new Date().getTime()

    if (interceptor.request) {
      interceptor.request(_config)
    }

    uni.request(_config)
  })
}

;['get', 'post', 'put', 'delete'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    })
  }
})

export default request
