<template>
    <div class="history">
    <div class="leftPart">
        <div>
            <div class="years">
                <button class="up" @click="up"></button>
                <button class="down" @click="down"></button>
                <div v-for="(year, index) in years" :key="index" :class="`year${year.year}`"  @click="rotatePointer(pointerAngle * index)">
                <div class="number">{{ year.year }}</div>
                <div class="line"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="rightPart">
        <div class="historyImg">
            <img :src=years[0].historyImg alt="">            
        </div>
        <div class="workShow">
            <h3>{{ years[0].workShow1 }}</h3>
            <div>{{ years[0].text1 }}</div>
            <h3>{{ years[0].workShow2 }}</h3>
            <div>{{ years[0].text2 }}</div>
        </div>
    </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            years:[
                {
                    year:2022,
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                },
                {
                    year:2021,
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                },
                {
                    year:2020,
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                },
                {
                    year:2019,
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                },
                {
                    year:2018,
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                }
            ],
            pointerAngle: 0,
        }
    },
    // methods:{
    //     rotatePointer(angle) {
    //     this.pointerAngle=angle;
    //     let rotationAngle = 0;
    // }

}
</script>

<style>
.years{
    display: flex;
    position: relative;
}
.year2022:hover{
    transform-origin: center;
    transition-duration: 1s;
    transform: rotate(0deg);
}
.number{
    width: 7vw;
    height: 3vw;
    font-size: 3vw;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #0450AC;
    line-height: 3vw;
    margin-left: 26vw;
}
.line{
    background-color: black;
    width: 4vw;
    height: 1vh;
    border: 1px solid #333333;
    margin-top: 4vh;
}
.years>div{
    position: absolute;
    width: 37vw;
    height: 10vh;
    background-color: pink;
    top: 27vh;
    display: flex;
}
.year2022{
    transform: rotate(-60deg);
}
.year2021{
    transform: rotate(-30deg);
}
.year2020{
    transform: rotate(0deg);
}
.year2019{
    transform: rotate(30deg);
}
.year2018{
    transform: rotate(60deg);
}
.history{
display: flex;
position: relative;
}
.rightPart{
    position: absolute;
    left: 49vw;
}
.historyImg{
    width: 41vw;
    height: 26vh;
    top: 4vh;
}
.workShow{
    top: 33vh;
}
</style>
