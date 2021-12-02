// 封装一个axios实例,向后台发请求
// 1.先导入axios
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net' // 设置一个基地址
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // 在发送请求之前做些什么

  return config
}, error => {
  // 对请求错误做些什么

  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use((response) => {
  // 2XX 范围内的状态码,都会触发该函数
  // 对响应数据做点什么

  return response
}, error => {
  // 超出2XX 范围稍微状态码都会触发该函数
  // 对响应错误做点什么

  return Promise.reject(error)
})

export default request
