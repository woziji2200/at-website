<template>
    <div class="shell" id="shell">
      <img src="@/assets/img/背景图.webp" class="background-white" v-if="!flag">
      <div class="history1" v-if="!flag">
        <Turntable />
    </div>
    <div class="history2" v-if="flag">
      <div class="header">
        <h2 class="title">艾特の历史作品</h2>
        <h3 class="subtitle">TT IT</h3>
      </div>
      <div class="timeline">
        <div v-for="(item, index) in years" :key="index" class="item" :data-text="item.text0">
          <div class="content">
            <img :src="item.image" alt="" class="img">
            <h2 class="content-title">{{ item.year }}</h2>
            <h3 class="content-desc2">{{ item.workShow1 }}</h3>
            <p class="content-desc">{{ item.text1 }}</p>
            <h3 class="content-desc2">{{ item.workShow2 }}</h3>
            <p class="content-desc">{{ item.text2 }}</p>
            <h3 class="content-desc2">{{ item.workShow3 }}</h3>
            <p class="content-desc">{{ item.text3 }}</p>
            <h3 class="content-desc2">{{ item.workShow4 }}</h3>
            <p class="content-desc">{{ item.text4 }}</p>
          </div>
        </div>
      </div>
</div>
<!-- <button class="unfold" @click="flag=!flag" v-if="!flag"><span class="button-text"> 展开</span><span class="underLine"></span></button> -->
<!-- <button class="fold" @click="flag=!flag" v-if="flag"><span class="button-text">收起</span><span class="underLine"></span></button> -->
<button class="goToHomePage1" @click="goToHomePage" v-if="!flag"><span class="button-text">返回主页</span><span class="goToHomePageLine"></span></button>
<button class="goToHomePage2" @click="goToHomePage" v-if="flag"><span class="button-text">返回主页</span><span class="goToHomePageLine"></span></button>
</div>
  </template>
  
  <script>
  import Turntable from "@/components/Turntable.vue";
  export default {
    data() {
      return {
        flag:false,
        years:[
                {
                    image: require("@/assets/img/2022《大地之歌》.webp"),
                    backgroundImage:require("@/assets/img/22.webp"),
                    year:"2022",
                    text0:'艾特历史作品',
                    workShow1:'制作新游戏',
                    text1:'游戏部门独立完成一款横板闯关类游戏《大地之歌》',
                    workShow2:'莱博电商平台',
                    text2:'由爱特成员为校友企业制作电商购物网站' ,
                    workShow3:'工程学院网站',
                    text3:'为工程学院中英海洋能研究基地制作展示网站',
                    workShow4:'物联网数据平台',
                    text4:'为校外企业制作物联网数据实时展示平台' ,
                },
                {
                    image: require("@/assets/img/校团委.webp"),
                    backgroundImage:require("@/assets/img/21.webp"),
                    year:"2021",
                    text0:'艾特历史作品',
                    workShow1:'校团委网站',
                    text1:'由爱特制作的中国海洋大学网站成功上线运行',
                    workShow2:'',
                    text2:'' ,
                },
                {
                    image: require("@/assets/img/2020.webp"),
                    backgroundImage:require("@/assets/img/20.webp"),
                    year:"2020",
                    text0:'艾特历史作品',
                    workShow1:'作品展示',
                    text1:'艾特历史作品',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                },
                {
                    image: require("@/assets/img/dlbb.webp"),
                    backgroundImage:require("@/assets/img/19.webp"),
                    year:"2019",
                    text0:'艾特历史作品',
                    workShow1:'作品展示',
                    text1:'19年游戏部合作完成了一个可联网、能存档的俯视角射击游戏。',
                    workShow2:'部门合作作品',
                    text2:'Ul与web开发、APP、程序合作。设计了爱特读书及爱特读书APP、爱特展示网、IT日程APP。' ,
                },
                {
                    image: require("@/assets/img/2019.webp"),
                    backgroundImage:require("@/assets/img/19.webp"),
                    year:"2018",
                    text0:'艾特历史作品',
                    workShow1:'开拓展示网',
                    text1:'开拓爱特展示网，成功上线运行',
                    workShow2:'新网站上线',
                    text2:'制作众创空间预约系统，成功上线运行' ,
                },
                {
                    image: require("@/assets/img/2019.webp"),
                    backgroundImage:require("@/assets/img/19.webp"),
                    year:"2017",
                    text0:'艾特历史作品',
                    workShow1:'开拓信院网站',
                    text1:'开拓信息科学与工程学院网站，成功上线运行',
                },
                {
                    image: require("@/assets/img/jjwz.webp"),
                    backgroundImage:require("@/assets/img/19.webp"),
                    year:"2016",
                    text0:'艾特历史作品',
                    workShow1:'上线教育网站',
                    text1:'爱特为中国海洋大学国际教育学院制作的新版展示网上线运行',
                    workShow2:'上线网站',
                    text2:'由爱特制作的中国海洋大学计算机系网站成功上线' ,
                },
                {
                    image: require("@/assets/img/QQ截图20220623151316.webp"),
                    backgroundImage:require("@/assets/img/19.webp"),
                    year:"2015",
                    text0:'艾特历史作品',
                    workShow1:'新网站上线',
                    text1:'中国海洋大学海洋技术系网站成功上线运行',
                    workShow2:'制作展示页',
                    text2:'为中国海洋大学iGEM比赛团队制作静态展示页面' ,
                },
                {
                    image: require("@/assets/img/信息.webp"),
                    backgroundImage:require("@/assets/img/19.webp"),
                    year:"2014",
                    text0:'艾特历史作品',
                    workShow1:'新网站上线',
                    text1:'开拓信息科学与工程学院网站，成功上线运行',
                },
            ],
            pointerAngle: 0,
      };
    },
    mounted() {
      this.activateFirstItem();
      window.addEventListener("scroll", this.handleScroll);
    },
    created() {
    // 判断设备类型
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      this.flag = true; // 在手机端将flag设为true
    }
    // 使用窗口宽度进行判断
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    this.flag = mediaQuery.matches; // 初始时根据媒体查询结果设置 flag 的初始值

    // 监听媒体查询变化，并更新 flag 值
    mediaQuery.addListener((mq) => {
      this.flag = mq.matches;
    });
  },
    methods: {
      goToHomePage() {
      this.$router.go(-1) 
    },
        rotatePointer(angle) {
        this.pointerAngle=angle;
        let rotationAngle = 0;
    },
    activateFirstItem() {
        this.$nextTick(() => {
          const firstItem = this.$el.querySelector(".item");
          firstItem.classList.add("item--active");
          this.setBackgroundImage(firstItem.querySelector(".img").getAttribute("src"));
        });
      },
      setBackgroundImage(imageUrl) {
        this.$el.style.backgroundImage = `url(${imageUrl})`;
      },
      handleScroll() {
      const scrollPosition = window.scrollY;
      const items = this.$el.querySelectorAll(".item");
      items.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemBottom = itemTop + item.offsetHeight;
        if (index === items.length - 2 && scrollPosition > itemBottom - item.offsetHeight / 2) {
          this.activateItem(item);
        } else if (scrollPosition <= itemBottom - 10 && scrollPosition >= itemTop) {
          this.setBackgroundImage(this.years[index].backgroundImage); // Update background image
          this.activateItem(item);
        }
      });
    },
      activateItem(item) {
        const activeItem = this.$el.querySelector(".item--active");
        if (activeItem) {
          activeItem.classList.remove("item--active");
        }
        item.classList.add("item--active");
      }
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },

    components: {
    Turntable
  },
  };
  </script>
  
  <style scoped>
    .background-white {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .control{
    display: flex;
    flex-wrap: wrap;
    top: -10vh;
    left: 10vw;
    width: 20vw;
    position: absolute;
  }
  .up{
    width: 20vw;
    height: 20vw;
  }
  .down{
    width: 20vw;
    height: 20vw;
  }
  .unfold{
    background: #007AFF;
    border: 1px transparent;
    border-radius: 1vw;
    position: absolute;
    width: 7vw;
    height: 4.5vh;
    left: 46vw;
    top: 92.5vh;
}
.button-text {
  width: 7vw;
  height: 6vh;
  font-size: 1.4vw;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 2.8vh;
}
.fold{
  background: #007AFF;
    border: 1px transparent;
    border-radius: 1vw;
    position: absolute;
    width: 7vw;
    height: 4.5vh;
    position: sticky;
    left: 46vw;
    top: 70vh;
    bottom: 5vh;
}

.goToHomePage1{
  background: #007AFF;
    border: 1px transparent;
    border-radius: 1vw;
    position: absolute;
    width: 8vw;
    height: 4.5vh;
    left: 90vw;
    top: 92.5vh;
    bottom: 5vh;
}
.goToHomePage2{
  background: #007AFF;
    border: 1px transparent;
    border-radius: 1vw;
    position: sticky;
    width: 8vw;
    height: 4.5vh;
    left: 90vw;
    bottom: 5vh;
}

.goToHomePageLine{
  background: #FFFFFF;
    height: 0.3vh;
    width: 4vw;
    position: absolute;
    left: 2vw;
    top: 3.6vh;
}

.underLine{
  background: #FFFFFF;
    height: 0.3vh;
    width: 2vw;
    position: absolute;
    left: 2.5vw;
    top: 3.5vh;
}
.years{
    display: flex;
    position: relative;
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
.history{
position: relative;
}
.history1{
    position: absolute;
    left: -10vw;
    top: 39vh;
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
  * {
    padding: 0;
    margin: 0;
}

.shell {
    width: 100%;
    position: relative;
    padding: 13vh 0;
    transition: 0.3s ease 0s;
    background-attachment: fixed;
    background-size: cover;
    background-position:center;
    background-image: url("@/assets/img/19.webp");
}

.shell:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(99, 99, 99, 0.8);
    content: "";
}

.header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
}

.title {
    color: #fff;
    font-size: 46px;
    font-weight: normal;
    margin: 0;
}

.timeline {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 700px;
    position: relative;
    padding-bottom: 400px;
}
.content-title {
    font-weight: normal;
    font-size: 66px;
    margin: -10px 0 0 0;
    transition: 0.4s;
    padding: 0 10px;
    box-sizing: border-box;
    color: #fff;
}

.content-desc {
    margin: 0;
    font-size: 15px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    line-height: 25px;
}
.content-desc2{
  margin: 0;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    line-height: 25px;
}

.timeline:before {
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    content: "";
    background: rgba(255, 255, 255, 0.07);
}

.item {
    padding: 40px 0;
    opacity: 0.3;
    filter: blur(2px);
    transition: 0.5s;
    box-sizing: border-box;
    width: calc(50% - 40px);
    display: flex;
    position: relative;
    transform: translateY(-80px);
}

.item:before {
    content: attr(data-text);
    letter-spacing: 3px;
    width: 100%;
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    top: 70%;
    margin-top: -5px;
    padding-left: 15px;
    opacity: 0;
    right: calc(-100% - 56px);
    font: 900 20px '';
    letter-spacing: 5px;
}

.item:nth-child(even) {
    align-self: flex-end;
}

.item:nth-child(even):before {
    right: auto;
    text-align: right;
    left: calc(-100% - 56px);
    padding-left: 0;
    border-left: none;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    padding-right: 15px;
}

.item--active {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
}

.item--active:before {
    top: 50%;
    transition: 0.3s all 0.2s;
    opacity: 1;
}

.item--active .content-title {
    margin: -50px 0 20px 0;
}

.img {
    max-width: 100%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
}

.footer {
    padding: 95px 0;
    text-align: center;
}

.footer a {
    color: #999;
    display: inline-block;
}

@media only screen and (max-width: 767px) {
    .item {
        align-self: baseline !important;
        width: 100%;
        padding: 0 30px 150px 80px;
    }

    .item:before {
        left: 10px !important;
        padding: 0 !important;
        top: 50px;
        text-align: center !important;
        width: 60px;
        border: none !important;
    }

    .item:last-child {
        padding-bottom: 40px;
    }
}

@media only screen and (max-width: 767px) {
    .timeline:before {
        left: 40px;
    }
}
@media (max-width: 768px) {
  .history1,
  .unfold,
  .fold {
    display: none;
  }
}
  </style>
