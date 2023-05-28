import Vue from 'vue'
import VueRouter from 'vue-router'
import { get , post} from '../modules/axios/axios'

// import index from '../views/index/index.vue'
import index from '../views/index/indexPage/indexPage.vue'
import indexPage from '../views/index/indexPage/indexPage.vue'
import aboutPage from '../views/index/aboutPage/aboutPage.vue'
import historyPage from '../views/index/historyPage/historyPage.vue'
import signUpPage from '../views/index/signUpPage/signUpPage.vue'
import ratePage from '../views/index/signUpPage/ratePage.vue'
import signPage from '../views/index/signUpPage/signPage.vue'
import memberPage from '../views/index/memberPage/memberPage.vue'

import admin from '../views/admin/admin.vue'
import loginPage from '../views/admin/loginPage/loginPage.vue'
import registrantPage from '../views/admin/registrantPage/registrantPage.vue'
import itMemberPage from '../views/admin/itMemberPage/itMemberPage.vue'
import commentsPage from '../views/admin/commentsPage/commentsPage.vue'
// import HomeView from '../views/HomeView.vue'
import notFound from '../views/notFound.vue'
let Base64 = require('js-base64').Base64

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
        redirect: '/index',
    },
            {
                path: '/index',
                name: 'indexPage',
                component: indexPage,
            },
            {
                path: '/index/about',
                name: 'aboutPage',
                component: aboutPage
            },
            {
                path: '/index/history',
                name: 'historyPage',
                component: historyPage
            },
            {
                path: '/index/signUp',
                name: 'signUpPage',
                component: signUpPage,
                redirect:'/index/signUp/sign',
                children:[
                    {
                        path:'/index/signUp/rate',
                        name:'ratePage',
                        component:ratePage
                    },
                    {
                        path:'/index/signUp/sign',
                        name:'signPage',
                        component:signPage,
                        children:[
                            {
                                path:''
                            }
                        ]
                    }
                ]
            },
            {
                path: '/index/member',
                name: 'memberPage',
                component: memberPage
            },

        


    
    {
        path: '/admin',
        name: 'admin',
        component: admin,
        meta: { "auth": true },
        children: [
            {
                path: '/admin/registrant',
                name: 'registrantPage',
                component: registrantPage,
                meta: { "auth": true },
            },
            {
                path: '/admin/comments',
                name: 'commentsPage',
                component: commentsPage,
                meta: { "auth": true },
            },
            {
                path: '/admin/itMember',
                name: 'itMemberPage',
                component: itMemberPage,
                meta: { "auth": true },
            }
        ],
    }, {
        path: '/admin/login',
        name: 'loginPage',
        component: loginPage
    }, {
        path: '/404',
        name: '404',
        component: notFound
    },
    {
        path: '*',
        redirect: '/404'
    }


]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach(async (to, from, next) => {
    if (to.meta.auth == true) {
        let auth = false;
        let loginMsg = JSON.parse(localStorage.getItem("login")) || {
            "access": "1.eyJleHAiOiIxIn0=.1",
            "refresh": "1.eyJleHAiOiIxIn0=.1"
        }

        // console.log(loginMsg, JSON.parse(Base64.decode(loginMsg.access.split(".")[1])).exp)
        let timeNow = Date.now()
        let accessExp = JSON.parse(Base64.decode(loginMsg.access.split(".")[1])).exp * 1000
        if (loginMsg != {}) {
            if (accessExp < timeNow) {
                // access过期
                console.log("access过期");
                let refreshExp = JSON.parse(Base64.decode(loginMsg.refresh.split(".")[1])).exp*1000;
                if (refreshExp < timeNow) {
                    //refresh过期
                    console.log("refresh过期");
                } else {
                    //access过期但refresh没过期
                    // console.log(this, Vue);
                    let refreshMsg = await post('/refresh/', {
                        "refresh": loginMsg.refresh
                    })
                    console.log("access过期但是refresh没有");
                    if (refreshMsg.status == 200) {
                        // console.log(refreshMsg.data,111);
                        localStorage.setItem("login",JSON.stringify(refreshMsg.data))
                        // console.log("login", JSON.parse(localStorage.getItem("login")));
                        auth = true
                    }
                }
            } else {
                auth = true
            }
        }

        if (auth) { // 有权限
            if (to.fullPath == '/admin') {
                next('/admin/registrant')
                return

            } else {
                next()
                return

            }
        } else {
            next("/admin/login")
            return
        }
    }
    next()
})
export default router
