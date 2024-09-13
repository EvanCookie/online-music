import axios from 'axios'
import { Message } from '@arco-design/web-vue'

// 配置环境变量
const baseURL = import.meta.env.VITE_BASE_API_URL

const http = axios.create({
  baseURL,
  timeout: 10000
})

// 添加请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data.code === 200) {
      return response
    }
    // 处理业务失败，抛出错误
    return Promise.reject(response.data)
  },
  (error) => {
    // 对响应错误做点什么
    const status = error.response.status

    switch (status) {
      case 401:
        Message.error('请求参数错误')
        break
      case 404:
        Message.error('请求路径错误')
        break
      case 500 | 501 | 502 | 503 | 505 | 505:
        Message.error('服务器出错')
        break
      default:
        Message.error(error.message)
    }

    return Promise.reject(error)
  }
)

export default http
