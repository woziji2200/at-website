<template>
    <div @click="goback()" class="route">
        <div class="pageButton">
            <div class="text">返回主页</div>
            <div class="whiteLine"></div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {

        }
    },
    methods: {
        goback() {
            this.$router.go(-1)
            // history.go(-1)
        }
    }
}
</script>

<style scoped>

.route {
    width: 6.1vw;
    text-decoration: none;
    display: inline-block;
    height: 2.4vw;
}

.text {
    padding-top: 0.27vw;
    height: 1.1vw;
    font-weight: bold;
    font-size: 1.2vw;
    color: #FFFFFF;
    margin: 0 auto;
}

.whiteLine {
    width: 3.8vw;
    height: 0.1vw;
    background: #FFFFFF;
    margin: 0.5vw auto 0 auto;
}

.pageButton {
    text-align: center;
    height: 2.4vw;
    background: #007AFF;
    box-shadow: 0px 3px 3px 0px rgba(112, 112, 112, 0.16);
    border-radius: 0.9vw;

}
</style>
