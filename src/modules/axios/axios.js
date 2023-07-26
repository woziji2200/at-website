import axios from "axios";
let Base64 = require('js-base64').Base64
const request = axios.create({
    // baseURL: 'http://backstage.daoxuan.cc',
})
// requset.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     return config;
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });


// export const get = (url, params) => {
//     params = params || {};
//     return new Promise((resolve, reject) => {

//         request.get(url, {
//             params
//         }).then(res => {
//             resolve(res)
//         })
//             .catch(err => {
//                 reject(err)
//             })

//     })
// }
let backstageUrl = ['/login/', '/registrant/', '/registrant/delete/', '/refresh/']
let commentsUrl = ['/api/comment/', '/api/comment?type=count/', '/api/comment?type=recent/', ]
export const get = async (url2, params) => {
    let url = ""
    if (backstageUrl.indexOf(url2) != -1) url = "http://backstage.daoxuan.cc" + url2;
    else if(commentsUrl.indexOf(url2) != -1) url = "https://it.funny233.xyz" +url2;
    else url = "http://itstudio.daoxuan.cc" + url2
    console.log(url);

    let params2 = params || {};
    try {
        const response = await request.get(url, { params: params2 });
        return response
    } catch (error) {
        return error.response
    }
};
export const post = async (url2, params) => {
    let url = ""
    if (backstageUrl.indexOf(url2) != -1) url = "https://backstage.daoxuan.cc" + url2;
    else if(commentsUrl.indexOf(url2) != -1) url = "https://it.funny233.xyz" +url2;
    else url = "https://itstudio.daoxuan.cc" + url2
    let params2 = params || {};
    try {
        const response = await request.post(url, params2);
        return response
    } catch (error) {
        return error.response
    }
};
let authUrl = ["https://backstage.daoxuan.cc/admin/login/", 'https://backstage.daoxuan.cc/admin/', "https://backstage.daoxuan.cc/registrant/", "https://backstage.daoxuan.cc/registrant/delete/"]
request.interceptors.request.use(
    async (config) => {
        // console.log(config);
        if (authUrl.indexOf(config.url) != -1) {
            console.log("需要验证的请求：");
            let auth = false;
            let loginMsg = JSON.parse(localStorage.getItem("login")) || {
                "access": "1.eyJleHAiOiIxIn0=.1",
                "refresh": "1.eyJleHAiOiIxIn0=.1"
            }

            console.log(loginMsg, JSON.parse(Base64.decode(loginMsg.access.split(".")[1])).exp)
            let timeNow = Date.now()
            let accessExp = JSON.parse(Base64.decode(loginMsg.access.split(".")[1])).exp * 1000
            if (loginMsg != {}) {
                if (accessExp < timeNow) {
                    // access过期
                    console.log("access过期");
                    let refreshExp = JSON.parse(Base64.decode(loginMsg.refresh.split(".")[1])).exp * 1000;
                    if (refreshExp < timeNow) {
                        //refresh过期
                        console.log("refresh过期");
                    } else {
                        //access过期但refresh没过期
                        let refreshMsg = await this.$http.post('/refresh/', {
                            "refresh": loginMsg.refresh
                        })
                        // console.log(refreshMsg);
                        console.log("access过期但是refresh没有");

                        if (refreshMsg.status == 200) {
                            localStorage.setItem(JSON.stringify(refreshMsg.data))
                            console.log("login", JSON.parse(localStorage.getItem("login")));
                            auth = true
                        }
                    }
                } else {
                    auth = true
                }
            }

            if (auth) { // 有权限
                config.headers.Authorization = "Bearer " + JSON.parse(localStorage.getItem("login")).access
                // console.log(config);
                return config
            } else {
                // next("/admin/login") 
                this.$router.push({ "path": "/admin/login/" })
                return
            }
        }
        return config;
    },
    (error) => {
        // 请求错误时的处理
        return Promise.reject(error);
    }
);
