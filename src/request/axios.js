import axios from 'axios';
import Qs from 'qs'

// 创建axios实例
const res = axios.create({
    withCredentials: true, // 默认的false  // `withCredentials` 表示跨域请求时是否需要使用凭证cookie
    timeout: 8000, // 请求超时时间
    baseURL: process.env.VUE_APP_BASE_API,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});

// request拦截器
res.interceptors.request.use(config => {
    if (config.method === 'get' && config.params) {
        config.url + '?' + Qs.stringify(config.params)
    }
    return config;
}, error => {
    // console.log("请求失败")
    Promise.reject(error);
});
// respone拦截器
res.interceptors.response.use(
    response => {
        if (response.data.Result === -11) {
            window.location.href = `https://login.lexun.com/login/touch/login.aspx?fw=`;
            return;
        }
        // console.log(response);
        return Promise.resolve(response.data)
    },
    error => {
        // 失败请求操作
        return Promise.reject(error);
    }
);
/** 请求封装 */
export function get(url, params) {
    return res.get(url, { params });
}

export function post(url, data) {
    return res.post(url, { data });
}

export function request(method, url, data = {}, headers = {}) {
    const dataType = method.toLocaleLowerCase() == 'get' ? 'params' : 'data';
    let options = {
        url,
        method,
        [dataType]: data,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            ...headers
        }
    }
    return res(options)
}