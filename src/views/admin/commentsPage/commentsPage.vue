<template>
    <div id="app" class="main2">
        <el-button type="primary" @click="openComments()">登录评论管理面板</el-button>
        <p>没有账号的话注册一下</p>
        <p>每条评论必须审核后才能显示</p>
        <p>注册邮箱如果设置为qq邮箱，会自动获取qq头像作为评论头像</p>
        <div id="waline"></div>
    </div>
</template>
<script>
// import { init } from '@waline/client/full';
// import '@waline/client/dist/waline.css';
export default {
    methods: {
        openComments() {
            window.open("https://it.funny233.xyz/ui/login")
        }
    },    
    mounted() {
        // init({
        //     el: '#waline',
        //     serverURL:"https://at-website-waline.vercel.app/",
        //     emoji:["//unpkg.com/@waline/emojis@1.1.0/bilibili"],
        //     search:false,
        //     avatar:"hide",

            
        // });
    },
}
</script>
<style scoped>
.main2{
    padding: 20px;
}
</style>