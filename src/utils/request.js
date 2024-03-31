//axios封装处理
//根域名配置
//超时时间
//请求拦截器，响应拦截器
import axios from "axios";
import { getToken } from "./token";
const request = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0',
    timeout: 5000
})


request.interceptors.request.use((config) => {
    //操作config注入token
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
}
)

request.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})
export { request } 