import axios from "axios";
let Base64 = require('js-base64').Base64
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
let authUrl=["/login/", '/admin/']
request.interceptors.request.use(
    async (config)=> {
        if(authUrl.indexOf(config.url)!=-1){
            let loginMsg=localStorage.getItem("login") || {}
            let timeNow=Date.now()
            if(loginMsg!={}){
                if (Base64.decode(loginMsg.access.split(".")[1]).exp < timeNow) {
                    // access过期
                    console.log("access过期");
                    if(Base64.decode(loginMsg.refresh.split(".")[1]).exp<timeNow){
                        //refresh过期
                        console.log("refresh过期");
                    }else{
                        //access过期但refresh没过期
                        let refreshMsg=await this.$http.post('/refresh/',{
                            "refresh":loginMsg.refresh
                        })
                        console.log("access过期但是refresh没有");
                        if(refreshMsg.status==200){
                            localStorage.setItem(refreshMsg.data)
                            console.log("login",localStorage.getItem("login"));
                        }
                    }
                }
            }
        }
        return config;
    },
    (error) => {
        // 请求错误时的处理
        return Promise.reject(error);
    }
);
