import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../views/index/index.vue'
import indexPage from '../views/index/indexPage/indexPage.vue'
import aboutPage from '../views/index/aboutPage/aboutPage.vue'
import historyPage from '../views/index/historyPage/historyPage.vue'
import signUpPage from '../views/index/signUpPage/signUpPage.vue'

import admin from '../views/admin/admin.vue'
import loginPage from '../views/admin/loginPage/loginPage.vue'
import registrantPage from '../views/admin/registrantPage/registrantPage.vue'
import itMemberPage from '../views/admin/itMemberPage/itMemberPage.vue'
import commentsPage from '../views/admin/commentsPage/commentsPage.vue'
// import HomeView from '../views/HomeView.vue'
import notFound from '../views/notFound.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
        redirect: '/index',
        children: [
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
                component: signUpPage
            },

        ],


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
                name: 'registrantPage',
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
router.beforeEach((to, from, next) => {
    if (to.meta.auth == true) {
        if (true) { // 有权限
            if (to.fullPath == '/admin') {
                next('/admin/registrant')
            } else {
                next()
            }
        } else {
            next("/admin/login")
        }
    }
    next()
})
export default router
