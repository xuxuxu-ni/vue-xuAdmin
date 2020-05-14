/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2019-01-02
 * Description: 文件描述
 */
import axios from "axios"
import Cookies from "js-cookie"
import NProgress from "nprogress"
import { Message } from "element-ui"
// axios默认配置
axios.defaults.timeout = 10000 // 超时时间
axios.defaults.baseURL = process.env.API_HOST

// http request 拦截器
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers["Content-Type"] = "application/json;charset=UTF-8"
  if (Cookies.get("access_token")) {
    config.headers.Authorization = "Bearer" + Cookies.get("access_token")
  }
  return config
},
error => {
  return Promise.reject(error.response)
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    NProgress.done()
    if (response.data.code === 11000) {
      Cookies.set("access_token", response.data.message, { expires: 1 / 12 })
      return Promise.resolve()
    } else if (response.data.code === 10000) { // 约定报错信息
      Message({
        message: response.data.message,
        type: "warning"
      })
      return Promise.reject(response)
    } else {
      return Promise.resolve(response)
    }
  },
  error => {
    if (error.response.status === 404) {
      Message({
        message: "请求地址出错",
        type: "warning"
      })
    } else if (error.response.status === 401) {
      Message({
        message: error.response.data.message,
        type: "warning"
      })
      Cookies.remove("access_token")
      setTimeout(() => {
        location.reload()
      }, 3000)
    }
    return Promise.reject(error.response) // 返回接口返回的错误信息
  })
export default axios
