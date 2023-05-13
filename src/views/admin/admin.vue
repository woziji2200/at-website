<template>
    <div id="app" class="admin">
        <div class="top">
            <span>爱特展示网管理系统</span>
        </div>
        <div class="menu">
            <el-menu background-color="#545c64" text-color="#fff" active-text-color="#fff" :default-active="'1'"
                class="el-menu-vertical-demo menu-open" :collapse="isCollapse">
                <el-menu-item index="0" class="open-close" @click="openCollapse">
                    <i :class="openCollapseLogo"></i>
                    <span slot="title">{{ isCollapse ? "展开菜单" : "收回菜单" }}</span>
                </el-menu-item>
            </el-menu>
            <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-active="'1'"
                class="el-menu-vertical-demo menu-main" :collapse="isCollapse">
                <el-menu-item index="1" @click="openPage('/admin/registrant')">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">管理报名信息</span>
                </el-menu-item>
                <el-menu-item index="2" @click="openPage('/admin/itMember')">
                    <i class="el-icon-edit-outline"></i>
                    <span slot="title">管理历史项目</span>
                </el-menu-item>
                <el-menu-item index="3" @click="openPage('/admin/comments')">
                    <i class="el-icon-message"></i>
                    <span slot="title">回复评论</span>
                </el-menu-item>
            </el-menu>
        </div>
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
            },
            {
                'name': '回复评论',
                'path': '/admin/comments'
            }],
            isCollapse: false,
            openCollapseLogo: "el-icon-arrow-left", 
            
        }
    },
    methods: {
        openCollapse() {
            this.isCollapse = !this.isCollapse
        },
        openPage(path) {
            if (this.$route.path != path)
                this.$router.push({ path });
        }
    },
    watch: {
        isCollapse(newVal, oldVal) {
            this.openCollapseLogo = newVal ? "el-icon-arrow-right" : "el-icon-arrow-left"
        }
    }
}
</script>

<style scoped>
#app {
    width: 100%;
}

.admin {
    display: flex;

    position: relative;
    padding-top: 50px;
}

.top {
    /* width: 100%; */
    height: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: #545c64;
}

.top span {
    color: white;
    line-height: 50px;
    padding-left: 40px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /* min-height: 400px; */
}

.menu {
    display: flex;
    flex-direction: column;
}

.menu-open {
    height: 56px;
}

.menu-main {
    height: calc(100vh - 56px);
}
</style>
