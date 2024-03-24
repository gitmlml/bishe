// 封装request请求
import axios from 'axios'

// 创建axios实例对象
// eslint-disable-next-line no-unused-vars
const request = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 5000
})

// const service = axios.create({
// // baseURL: '/', // api的base_Url
// // 后端的请求路径
//   baseURL: '/api', // baseURL：追加一个前缀，如你需要访问的地址是localhost:9000/api/song/SongSheet在访问的时候，你只需要写成’localhost:9000/song/SongSheet
//   timeout: 50000 //   timeout:访问超时的时间ms，超过这个时间即为访问失败
// })

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
  // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
// 接口响应后处理结果
request.interceptors.response.use(
  // function (config) {
  //   // 对响应数据做点什么
  //   let res = response.data
  //   if (typeof res === 'string'){
  //     res = res ? JSON.parse(res) :
  //   }
  //   return config
  // },
  // function (error) {
  //   // 对响应错误做点什么
  //   return Promise.reject(error)
  // }
  response => {
    // response.data即为后端返回的result
    let res = response.data
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
    return res
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

// 暴露
export default request
