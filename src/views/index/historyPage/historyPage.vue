<!-- <template>
    <div class="shell" id="shell">
      <div class="background-white" v-if="!flag"></div>
      <div class="history1" v-if="!flag">
        <Turntable />
    </div>
    <div class="history2" v-if="flag">
      <div class="header">
        <h2 class="title">艾特の历史作品</h2>
        <h3 class="subtitle">TT IT</h3>
      </div>
      <div class="timeline">
        <div v-for="(item, index) in years" :key="index" class="item" :data-text="item.text1">
          <div class="content">
            <img :src="item.image" alt="" class="img">
            <h2 class="content-title">{{ item.year }}</h2>
            <h3 class="content-desc2">{{ item.workShow1 }}</h3>
            <p class="content-desc">{{ item.text1 }}</p>
            <h3 class="content-desc2">{{ item.workShow2 }}</h3>
            <p class="content-desc">{{ item.text2 }}</p>
          </div>
        </div>
      </div>
</div>
<button class="unflod" @click="flag=!flag" v-if="!flag"><span class="button-text"> 展开</span><span class="underLine"></span></button>
<button class="flod" @click="flag=!flag" v-if="flag"><span class="button-text">收起</span><span class="underLine"></span></button>
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
                    title: "《你的孤独，虽败犹荣》",
                    image: require("@/assets/img/19.jpg"),
                    year:"2022",
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                    description: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。"
                },
                {
                    title: "《你的孤独，虽败犹荣》",
                    image: require("@/assets/img/12.jpg"),
                    year:"2021",
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                    description: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。"
                },
                {
                    title: "《你的孤独，虽败犹荣》",
                    image: require("@/assets/img/13.jpg"),
                    year:"2020",
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                    description: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。"
                },
                {
                    title: "《你的孤独，虽败犹荣》",
                    image: require("@/assets/img/14.jpg"),
                    year:"2019",
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                    description: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。"
                },
                {
                    title: "《你的孤独，虽败犹荣》",
                    image: require("@/assets/img/21.jpg"),
                    year:"2018",
                    workShow1:'作品展示',
                    text1:'游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
                    workShow2:'作品展示',
                    text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
                    description: "如果你停止，就是谷底。如果你还在继续，就是上坡。这是我听过关于人生低谷最好的阐述。"
                },
            ],
            pointerAngle: 0,
      };
    },
    mounted() {
      this.activateFirstItem();
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
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
            this.setBackgroundImage(item.querySelector(".img").getAttribute("src"));
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
    width: 100%;
    height: 100%;
    background-color: white;
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
  .unflod{
    background: #007AFF;
    border: 1px transparent;
    border-radius: 1vw;
    position: absolute;
    width: 7vw;
    height: 4.5vh;
    left: 46vw;
    top: 70vh;
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
.flod{
  background: #007AFF;
    border: 1px transparent;
    border-radius: 1vw;
    position: absolute;
    width: 7vw;
    height: 4.5vh;
    position: sticky;
    left: 46vw;
    top: 70vh;
    bottom: 2vh;
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
    top: 18vh;
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
    padding: 80px 0;
    transition: 0.3s ease 0s;
    background-attachment: fixed;
    background-size: cover;
    background-image: url("@/assets/img/19.jpg");
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
  </style>
   -->
