<template>
    <div class="turntable" @wheel="handleWheel">
      <div class="turntable-containerBox">
        <img src="@/assets/img/指针.png" alt="" class="point">
        <img src="@/assets/img/logo1.png" class="logo"><div class="pointText">IT STUDIO</div>
      <div class="turntable-container">
        <div
          v-for="(box, index) in boxes"
          :key="index"
          :class="{ active: currentIndex === index }"
          class="box"
          :style="box.style"
        >
          <span :class="{ blue: box.isBlue }">{{ box.year }}<div class="line"></div></span>
        </div>
      </div>
    </div>
      <div class="buttons">
        <button @click="rotateRight"></button>
        <button @click="rotateLeft"></button>
      </div>
      <div class="info">
        <transition name="fade">
        <img :src="boxes[currentIndex-1].image" alt="" class="infoImg">
        </transition>
        <h3>{{ boxes[currentIndex-1].workShow1 }}</h3>
        <div>{{ boxes[currentIndex-1].text1 }}</div>
        <h3>{{ boxes[currentIndex-1].workShow2 }}</h3>
        <div>{{ boxes[currentIndex-1].text2 }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boxes: [
          { content: "盒子1",
            isBlue: false,
            image: require("@/assets/img/2022《大地之歌》.png"),
            backgroundImage:require("@/assets/img/22.png"),
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
            style: { transform: "rotate(-60deg)" } 
          },
          { content: "盒子2", 
          isBlue: false,
          image: require("@/assets/img/校团委.jpg"),
          backgroundImage:require("@/assets/img/21.png"),
          year:"2021",
          text0:'艾特历史作品',
          workShow1:'校团委网站',
          text1:'由爱特制作的中国海洋大学网站成功上线运行',
          style: { transform: "rotate(-30deg)" } 
        },
          { content: "盒子3", 
          isBlue: true,                    
          image: require("@/assets/img/2020.png"),
          backgroundImage:require("@/assets/img/20.png"),
          year:"2020",
          text0:'艾特历史作品',
          workShow1:'作品展示',
          text1:'艾特历史作品',
          workShow2:'作品展示',
          text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
          style: { transform: "rotate(0deg)" } 
        },
          { content: "盒子4", 
          isBlue: false,
          image: require("@/assets/img/dlbb.png"),
          backgroundImage:require("@/assets/img/19.png"),
          year:"2019",
          text0:'艾特历史作品',
          workShow1:'作品展示',
          text1:'19年游戏部合作完成了一个可联网、能存档的俯视角射击游戏。',
          workShow2:'部门合作作品',
          text2:'Ul与web开发、APP、程序合作。设计了爱特读书及爱特读书APP、爱特展示网、IT日程APP。' ,
          style: { transform: "rotate(30deg)" } 
        },
          { content: "盒子5", 
          isBlue: false,
          image: require("@/assets/img/2019.png"),
          backgroundImage:require("@/assets/img/19.png"),
          year:"2018",
          text0:'艾特历史作品',
          workShow1:'开拓展示网',
          text1:'开拓爱特展示网，成功上线运行',
          workShow2:'新网站上线',
          text2:'制作众创空间预约系统，成功上线运行' ,
          style: { transform: "rotate(60deg)" } 
        },
        { content: "盒子6", 
          isBlue: false,
          image: require("@/assets/img/2019.png"),
          backgroundImage:require("@/assets/img/19.png"),
          year:"2017",
          text0:'艾特历史作品',
          workShow1:'开拓信院网站',
          text1:'开拓信息科学与工程学院网站，成功上线运行',
          style: { transform: "rotate(90deg)" } 
        },
        { content: "盒子7", 
          isBlue: false,
          image: require("@/assets/img/jjwz.png"),
          backgroundImage:require("@/assets/img/19.png"),
          year:"2016",
          text0:'艾特历史作品',
          workShow1:'上线教育网站',
          text1:'爱特为中国海洋大学国际教育学院制作的新版展示网上线运行',
          workShow2:'上线网站',
          text2:'由爱特制作的中国海洋大学计算机系网站成功上线' ,
          style: { transform: "rotate(120deg)" } 
        },
        { content: "盒子8", 
          isBlue: false,
          image: require("@/assets/img/QQ截图20220623151316.jpg"),
          backgroundImage:require("@/assets/img/19.png"),
          year:"2015",
          text0:'艾特历史作品',
          workShow1:'新网站上线',
          text1:'中国海洋大学海洋技术系网站成功上线运行',
          workShow2:'制作展示页',
          text2:'为中国海洋大学iGEM比赛团队制作静态展示页面' ,
          style: { transform: "rotate(150deg)" } 
        },
        { content: "盒子9", 
          isBlue: false,
          image: require("@/assets/img/信息.jpg"),
          backgroundImage:require("@/assets/img/19.png"),
          year:"2014",
          text0:'艾特历史作品',
          workShow1:'新网站上线',
          text1:'开拓信息科学与工程学院网站，成功上线运行',
          style: { transform: "rotate(180deg)" } 
        },
          // ... 盒子3到盒子12的配置
        ],
        currentIndex: 3,
      };
    },

    methods: {
      handleWheel(event) {
      event.preventDefault(); // 阻止滚动事件的默认行为
      const delta = event.deltaY || event.detail || event.wheelDelta;
      if (delta > 0) {
        this.rotateLeft();
      } else if (delta < 0) {
        this.rotateRight();
      }
    },
      rotateRight() {
        if (this.currentIndex>0) {
          this.rotateBoxes(30);
          this.currentIndex--;
        }
      },
      rotateLeft() {
        if (this.currentIndex<9) {
          this.rotateBoxes(-30);
          this.currentIndex++;
        }
      },
      rotateBoxes(angle) {
        this.boxes.forEach((box) => {
          const currentAngle = parseInt(box.style.transform.slice(7));
          const newAngle = (currentAngle + angle) % 360;
          box.style.transform = `rotate(${newAngle}deg)`;
          if (newAngle === 0 || newAngle === -0) {
            box.isBlue = true;
          } else {
            box.isBlue = false;
          }
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .turntable {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 10vh;
  }
  
  .turntable-containerBox{
    position: absolute;
    width: 59vw;
    height: 110vh;
    top: -49vh;
    left: -13vw;
    overflow: hidden;
  }

  .turntable-container {
    top: 1vh;
    position: absolute;
    left: -1vw;
    width: 58vw;
    height: 58vw;
    border: 0.6vw solid #333333;
    border-radius: 50%;
  }
  
  .point{
    position: absolute;
    z-index: 10;
    width: 12vw;
    height: 9vh;
    top: 51%;
    left: 20vw;
  }

  .logo{
    position: absolute;
    top: 75%;
    left: 23.5vw;
    width: 2vw;
    height: 2vw;
    background-image: url('@/assets/img/QQ截图20220623151316.jpg');
  }
  .pointText{
    position: absolute;
    width: 13vw;
    height: 2vh;
    font-size: 2vw;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #333333;
    line-height: 2vh;
    top: 75.8%;
    left: 26vw;
  }
  .box {
    overflow: hidden;
    font-weight:bolder;
    color: #666666;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: transparent;
    transition: transform 0.3s ease;
    text-align: right;
    width: 58.1vw;
    height: 11.5vh;
    display: flex;
    top: 45%;
  }
  .box span{
    width: 7vw;
    height: 3vw;
    font-size: 2.5vw;
    font-family: Adobe Heiti Std R;
    font-weight: normal;
    line-height: 2.5vw;
    margin-left: 39vw;
  }
  .box span.blue {
    color: #0450AC;
    font-size: 3vw;
    transition: 0.5s;
  }
  .line{
    position: absolute;
    background-color: #333333;
    width: 9%;
    height: 8%;
    border: 1px solid #333333;
    margin-top: -3vh;
    margin-left: 15%;
}
  .info {
    width: 40vw;
    height: 100vw;
    position: relative;
    top: -30vh;
    left: 60vw;
  }
  .infoImg{
    top: 5vh;
    width: 40vw;
    height: 25.2vw;
  }
  .info h3{
    font-size: 1.5vw;
  }
  .info div{
    font-size: 1vw;
  }
  .buttons {
    position: absolute;
    margin-top: -39vh;
    margin-left: 30vw;
    display: flex;
    flex-wrap: wrap;
    width: 50vw;
    overflow: hidden;
  }
  
  .buttons button {
    background-color:transparent;
    border-style:none;
    margin-right: 10px;
    width: 30vw;
    height: 24vw;
  }
  .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
  </style>
  
