import axios from "axios";

const requset = axios.create({
    baseURL: 'http://v1.hitokoto.cn/'
})
// requset.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });


export const get = (url, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        requset.get(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })

    })
}
export const post = (url, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        requset.post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })

    })
}

