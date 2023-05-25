<template>
    <div class="turntable">
      <div class="turntable-containerBox">
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
        <img :src=boxes[currentIndex-1].image alt="">
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
            image: require("@/assets/img/07.jpg"),
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
  
  <style>
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
    width: 37vw;
    height: 37vw;
    border: 0.5vw solid black;
    top: -21vh;
    border-radius: 50%;
  }

  .turntable-container {
    position: absolute;
    top: 30vh;
    left: -1vw;
    width: 37vw;
    margin: 20px;
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
    width: 37vw;
    height: 10vh;
    display: flex;
  }
  .box span{
    width: 7vw;
    height: 3vw;
    font-size: 2vw;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    line-height: 3vw;
    margin-left: 24vw;
  }
  .box span.blue {
    color: blue;
  }
  .line{
    position: absolute;
    background-color: black;
    width: 3vw;
    height: 1vh;
    border: 1px solid #333333;
    margin-top: -3vh;
    margin-left: 7vw;
}
  .info {
    position: relative;
    top: -22vh;
    left: 60vw;
  }
  
  .buttons {
    position: absolute;
    margin-top: -20vh;
    margin-left: 20vw;
    display: flex;
    flex-wrap: wrap;
    width: 37vw;
  }
  
  .buttons button {
    background-color:transparent;
    border-style:none;
    margin-right: 10px;
    width: 37vw;
    height: 30vh;
  }
  </style>
  
