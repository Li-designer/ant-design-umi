import axios, { AxiosResponse, AxiosError } from 'axios'
import { message, notification } from 'antd'
import { ERROR_MSG } from '@/constants'

// 请求配置文件
const config = {
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: '',

  timeout: 1000 * 15,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false,

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 3,
  headers: {
    'Content-Type': ' application/json;charset=UTF-8',
  },
}

const instance = axios.create(config)
instance.interceptors.request.use(
  (config) => {
    // 携带token
    // let token = getToken();
    // if (token) {
    //   config.headers['authorization'] = `Bearer ${token}`;
    // }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data) {
      let { msg, status } = response.data
      if (status === 1) {
        message.error(msg)
      }
    }
    return response && response.data
  },
  (error: AxiosError) => {
    const { response } = error

    if (response && response.status) {
      const errorText = ERROR_MSG[response.status] || response.statusText
      const { status, config } = response
      notification.error({
        message: `请求错误 ${status}: ${config.url}`,
        description: errorText,
      })
      if (response.status === 401 || response.status === 403) {
        notification.error({
          message: 'token过期请重新登录!',
          description: errorText,
        })
      }
    } else if (!response) {
      notification.error({
        description: '客户端异常或网络问题，请清除缓存！',
        message: '状态异常',
      })
    }
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export default instance
