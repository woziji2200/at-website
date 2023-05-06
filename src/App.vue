<template>
    <div id="app">
        <!-- <button @click="test()">test</button> -->
        <router-view></router-view>
    </div >
</template>
<script>
export default {
    methods:{
        // async test(){
        //     console.log(await this.$http.get("","")); 
        //     console.log("afterGet");
        // }
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>
