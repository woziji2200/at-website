<template>
    <div class="turntable">
      <div class="turntable-containerBox">
        <img src="@/assets/img/指针.png" alt="" class="point">
        <div class="pointText">IT STDIO</div>
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
        <img :src=boxes[currentIndex-1].image alt="" class="infoImg">
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
            image: require("@/assets/img/19.jpg"),
            year:"2022",
            workShow1:'作品展示',
            text1:'2022游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
            workShow2:'作品展示',
            text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
            style: { transform: "rotate(-60deg)" } 
          },
          { content: "盒子2", 
          isBlue: false,
          image: require("@/assets/img/12.jpg"),
          year:"2021",
          workShow1:'作品展示',
          text1:'2021游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
          workShow2:'作品展示',
          text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' , 
          style: { transform: "rotate(-30deg)" } 
        },
          { content: "盒子3", 
          isBlue: true,                    
          image: require("@/assets/img/13.jpg"),
          year:"2020",
          workShow1:'作品展示',
          text1:'2020游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
          workShow2:'作品展示',
          text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' ,
          style: { transform: "rotate(0deg)" } 
        },
          { content: "盒子4", 
          isBlue: false,
          image: require("@/assets/img/14.jpg"),
          year:"2019",
          workShow1:'作品展示',
          text1:'2019游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
          workShow2:'作品展示',
          text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' , 
          style: { transform: "rotate(30deg)" } 
        },
          { content: "盒子5", 
          isBlue: false,
          image: require("@/assets/img/21.jpg"),
          year:"2018",
          workShow1:'作品展示',
          text1:'2018游戏部门独立完成了一款PC端的2.5D游戏《幽灵骑士》',
          workShow2:'作品展示',
          text2:'程序、APP与UI合作完成了爱特展示网、海迅APP等作品。' , 
          style: { transform: "rotate(60deg)" } 
        },
          // ... 盒子3到盒子12的配置
        ],
        currentIndex: 3,
      };
    },
    methods: {
      rotateRight() {
        if (this.currentIndex>0) {
          this.rotateBoxes(30);
          this.currentIndex--;
        }
      },
      rotateLeft() {
        if (this.currentIndex<5) {
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
    width: 50vw;
    height: 50vw;
    top: -41vh;
    left: -13vw;
    overflow: hidden;
  }

  .turntable-container {
    position: absolute;
    left: -1vw;
    width: 50vw;
    height: 50vw;
    border: 0.5vw solid #333333;
    border-radius: 50%;
  }
  
  .point{
    position: absolute;
    z-index: 10;
    width: 12vw;
    height: 7vh;
    top: 48%;
    left: 20vw;
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
    top: 67%;
    left: 23vw;
  }
  .box {
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
    width: 50vw;
    height: 10vh;
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
    margin-left: 35vw;
  }
  .box span.blue {
    color: #0450AC;
    font-size: 3vw;
    transition: 0.5s;
  }
  .line{
    position: absolute;
    background-color: #333333;
    width: 6%;
    height: 5.3%;
    border: 1px solid #333333;
    margin-top: -3vh;
    margin-left: 16%;
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
  </style>
  
