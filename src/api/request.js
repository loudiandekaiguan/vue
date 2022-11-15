import axios from 'axios'
import nprogress from 'nprogress' //这是进度条
import "nprogress/nprogress.css"

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000
})

requests.interceptors.request.use((config) => {
  nprogress.start()//进度条启动
  return config
})

requests.interceptors.response.use((res) => {
  nprogress.done()//进度条结束
  return res.data
}, (error) => {
  return Promise.reject(new Error('faile'))
})

export default requests