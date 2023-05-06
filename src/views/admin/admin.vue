<template>
    <div id="app">
        <div class="nav">
            <div class="nav-link" v-for="i in links">
                <span><router-link :to="i.path">{{ i.name }}</router-link></span>
            </div>
        </div>
        admin.vue
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [{
                'name': '管理报名信息',
                'path': '/admin/registrant'
            }, {
                'name': '管理历史项目',
                'path': '/admin/itMember'
            }]
        }
    }
}
</script>

<style>
.nav {}
</style>
