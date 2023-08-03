<template>
    <div class="drew" >
        <div class="textname" ref="fivepa">
            <div class="text1" :class="changeFlag ? 'out1':''">五大部门</div>
            <div class="text2" >五大部门</div>
            <div class="text1" :class="changeFlag ? 'out3':''">五大部门</div>
        </div>
        <div class="typ1"></div>
        <div class="typm" :class="bk[0]">
            <div class="coverere"></div>
            <div class="name">
                <div class="texts">程序开发</div>
                <div class="underer"></div>
            </div>
        </div>
        <div class="typ2"></div>
        <div class="typ3"></div>
        <div class="typm" :class="bk[1]">
            <div class="coverere"></div>
            <div class="name">
                <div class="texts">Web开发</div>
                <div class="underer"></div>
            </div>
        </div>
        <div class="typ4"></div>
        <div class="typ5"></div>
        <div class="typm" :class="bk[2]">
            <div class="coverere"></div>
            <div class="name">
                <div class="texts">UI设计</div>
                <div class="underer"></div>
            </div>
        </div>
        <div class="typ6"></div>
        <div class="typ3"></div>
        <div class="typm" :class="bk[3]">
            <div class="coverere"></div>
            <div class="name">
                <div class="texts">游戏开发</div>
                <div class="underer"></div>
            </div>
        </div>
        <div class="typ4"></div>
        <div class="typ1"></div>
        <div class="typm" :class="bk[4]">
            <div class="coverere"></div>
            <div class="name">
                <div class="texts">APP开发</div>
                <div class="underer"></div>
            </div>
        </div>
        <div class="typ2"></div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            bk: ["cxbk", "webbk", "uibk", "yxbk", "appbk"],
            changeFlag:false,
        }
    },
    methods:{
        scrolling() {
            // 滚动条距文档顶部的距离
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            // console.log(scrollTop)
            var element2 = this.$refs.fivepa;
            var rect2 = element2.getBoundingClientRect();
            if (scrollTop >= rect2.top  ) {
                // console.log("header 到了最顶部")
                this.changeFlag=true;
            }
            else {
                this.changeFlag=false;
            }
        },
    },
    mounted() {
        window.addEventListener("scroll", this.scrolling);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrolling);
    },
}
</script>

<style scoped>
.drew {
    width: 1920px;
    height: 1849px;
    background-color: white;
    background-image: url(@/assets/img/index/partbk.webp);
    background-position: center;
    box-shadow: inset 0px 8px 18px 1px rgba(0, 0, 0, 0.16);
    border-radius: 80px 80px 80px 80px;
    opacity: 1;
    margin: 0 auto;
    margin-top: -340px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 136px;
    align-items: center;
    position: relative;
    overflow-y: hidden;


}

.typ1 {
    width: 311px;
    height: 389px;
    background: #FFFFFF;
    box-shadow: 0px 18px 18px 1px rgba(112, 112, 112, 0.16);
    border-radius: 80px 80px 80px 80px;
    opacity: 1;
    margin-bottom: 46px;
}

.typm {
    width: 311px;
    height: 629px;
    background: #1A1A1A;
    box-shadow: 0px 18px 18px 1px #707070;
    border-radius: 80px 80px 80px 80px;
    position: relative;
    transition: all 0.3s;
    /* cursor: pointer; */
}


.typ2 {
    width: 311px;
    height: 448px;
    background: #FFFFFF;
    box-shadow: 0px 18px 18px 1px rgba(112, 112, 112, 0.16);
    border-radius: 80px 80px 80px 80px;
    opacity: 1;
    margin-top: 110px;
}

.typ3 {
    width: 311px;
    height: 600px;
    background: #FFFFFF;
    box-shadow: 0px 18px 18px 1px rgba(112, 112, 112, 0.16);
    border-radius: 80px 80px 80px 80px;
    opacity: 1;
    margin-bottom: 46px;
}

.typ4 {
    width: 311px;
    height: 294px;
    background: #FFFFFF;
    box-shadow: 0px 18px 18px 1px rgba(112, 112, 112, 0.16);
    border-radius: 80px 80px 80px 80px;
    opacity: 1;
    margin-top: 53px;
}

.typ5 {
    width: 311px;
    height: 389px;
    background: #FFFFFF;
    box-shadow: 0px 18px 18px 1px rgba(112, 112, 112, 0.16);
    border-radius: 80px 80px 80px 80px;
    opacity: 1;
    margin-bottom: 44px;
}

.typ6 {
    width: 311px;
    height: 448px;
    background: #FFFFFF;
    box-shadow: 0px 18px 18px 1px rgba(112, 112, 112, 0.16);
    border-radius: 80px 80px 80px 80px;
    opacity: 1;
    margin-top: 111px;
}

.name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
    z-index: 5;
    transition: all 0.3s;
}
.typm:hover{
    transform: translateY(-60px);
    /* margin-top: -60px; */
}
.name:hover .texts{
    transform:scale(110%);
}
.name:hover .underer{
    margin-top: 30px;
    transform: scaleX(110%);
}
.texts {
    width: 300px;
    height: 60px;
    font-size: 60px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 60px;
    text-align: center;
    transition: all 0.3s;
}


.underer {
    width: 117px;
    height: 0px;
    margin-top: 15px;
    border: 6px solid #FFFFFF;
    border-radius: 6px;
    background-color: #FFFFFF;
    transition: all 0.3s;

}

.cxbk {
    background-image: url(@/assets/img/index/cx.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

.webbk {
    background-image: url(@/assets/img/index/web.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

.uibk {
    background-image: url(@/assets/img/index/ui.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

.yxbk {
    background-image: url(@/assets/img/index/yx.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

.appbk {
    background-image: url(@/assets/img/index/app.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
}

.coverere {
    width: 311px;
    height: 628px;
    background: #1A1A1A;
    box-shadow: 0px 18px 18px 1px #707070;
    border-radius: 80px 80px 80px 80px;
    opacity: 0.4;
    position: absolute;
    top: 0px;
    left: 0px;
}

.textname {
    width: 480px;
    top: 136px;
    position: absolute;

    margin: 0 auto;
}

.text1 {
    position: absolute;
    width: 480px;
    height: 120px;
    font-size: 120px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 120px;
    -webkit-text-stroke: 4px #007AFF;
    -webkit-text-fill-color: transparent;
    margin-top: 100px;
    transition: 1.2s linear;

}
.text2 {
    position: absolute;
    width: 480px;
    height: 120px;
    font-size: 120px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    line-height: 120px;
    margin-top: 100px;
}
.out1{
    margin-top: -10px;
}
.out3{
    margin-top: 210px;
}
</style>
