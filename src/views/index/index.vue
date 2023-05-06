<template>
    <div id="app">
        <div class="nav">
            <div class="nav-link" v-for="i in links">
                <span><router-link :to="i.path">{{ i.name }}</router-link></span>
            </div>
        </div>
        index.vue
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [{
                'name': '首页',
                'path': '/index'
            }, {
                'name': '加入爱特',
                'path': '/index/signUp'
            }, {
                'name': '爱特历史',
                'path': '/index/history'
            }, {
                'name': '关于爱特',
                'path': '/index/about'
            }]
        }
    }
}
</script>

<style>
.nav {}
</style>
