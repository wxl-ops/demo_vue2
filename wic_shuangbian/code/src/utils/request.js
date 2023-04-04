
import axios from 'axios'
import cookies from '@/utils/cookies'
import Vue from 'vue'
import router from '@/router'
import { Message } from 'element-ui';
// 创建一个 axios 实例


let apiUrl =''
if (
  process.env.NODE_ENV === "development"
) {
  apiUrl = "/api";
}
else if( window.location.hostname === "t-meeting.wicongress.org.cn"){
  apiUrl = "//t-meeting.wicongress.org.cn";
} else {
  apiUrl = "//meeting.wicongress.org.cn";
}

const service = axios.create({
  // true表示本地环境，false表示线上环境
  baseURL: apiUrl,
  timeout: 20000 // 请求超时时间
})


// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理
    // const token = cookies.get('skey')
    // config.data = Object.assign(config.data, { schoolId: util.cookies.get('schoolId'), campusId: util.cookies.get('campusId') })
    if (config.method.toUpperCase() === 'GET') {
      const params = config.data
      let str = config.url + '?'
      for (const key in params) {
        str += `${key}=${params[key]}&`
      }
      let url = str
      if (str.indexOf('&') !== -1) {
        const idx = str.lastIndexOf('&')
        url = str.slice(0, idx)
      }
      config.url = url
    }
    return config
  },
  error => {
    // 发送失败
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const customError = response.config.data  && (JSON.parse(response.config.data).customError || false)
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { ret, errorcode, msg } = dataAxios
    // 根据 code 进行判断
    if (ret === undefined) {
      // 如果没有 code 代表这不是项目后端开发的接口
      return dataAxios
    } else {
      // 有 code 代表这是一个后端接口 可以进行进一步的判断
      switch (ret) {
        case 0:
          // [ 示例 ] code === 0 代表没有错误

          return dataAxios
        case 1:

          // [ 示例 ] code === 0 代表没有错误
          if (errorcode === 99999) {
            const is_show = cookies.get('is_show')
            // 登录失效
            if (is_show === '1') {
              return false
            } else {
              cookies.set('is_show', '1')
            }
            cookies.remove('w_skey')
            cookies.remove('w_uid')
            const url = dataAxios.data.login_url
            Vue.prototype.$Message.error({
              content: '请登录',
              onClose: () => {
                cookies.set('is_show', '2')
                window.location.href = url
              }
            })
          } else if (errorcode === 888888) {
            const url = dataAxios.data.login_url
            Vue.prototype.$Message.error({
              content: '权限不足，请联系管理员',
              onClose: () => {
                window.location.href = url
              }
            })
            // Vue.prototype.$Message.error({
            //   content: '权限不足，请联系管理员',
            //   onClose: () => {
            //     window.location.href = url
            //   }
            // })

            setTimeout(() => {
              window.location.href = url
            }, 3000);

          } else {
            Vue.prototype.$Message.error(msg)
          }
          return Promise.reject(dataAxios)

        default:
          // 不是正确的 code
          return dataAxios
      }
    }
  },
  error => {
    console.log('俩')
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问'; break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default: break
      }
    }
    Vue.prototype.$Message.error(error.message)
    return Promise.reject(error)
  }
)
export default service
