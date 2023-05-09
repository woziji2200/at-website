import axios from "axios";

const request = axios.create({
    baseURL: 'http://backstage.daoxuan.cc',
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
        request.get(url, params)
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
        request.post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })

    })
}

// request.interceptors.request.use(
//     (config) => {
//       // 在请求发送之前对请求进行处理
//     //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//       return config;
//     },
//     (error) => {
//       // 请求错误时的处理
//       return Promise.reject(error);
//     }
//   );
