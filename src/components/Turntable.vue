<template>
    <div class="turntable">
      <div class="turntable-container">
        <div
          v-for="(box, index) in boxes"
          :key="index"
          :class="{ active: currentIndex === index }"
          class="box"
          :style="box.style"
          @click="rotate(index)"
        >
          <span :class="{ blue: box.isBlue }">{{ box.content }}<div class="line"></div></span>
        </div>
      </div>
      <div class="info">
        <p v-if="currentIndex !== null">
          当前选中的盒子内容：{{ boxes[currentIndex].content }}
        </p>
      </div>
      <div class="buttons">
        <button @click="rotateRight">向右转</button>
        <button @click="rotateLeft">向左转</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boxes: [
          { content: "盒子1", isBlue: false, style: { transform: "rotate(-60deg)" } },
          { content: "盒子2", isBlue: false, style: { transform: "rotate(-30deg)" } },
          { content: "盒子3", isBlue: false, style: { transform: "rotate(0deg)" } },
          { content: "盒子4", isBlue: false, style: { transform: "rotate(30deg)" } },
          { content: "盒子5", isBlue: false, style: { transform: "rotate(60deg)" } },
          // ... 盒子3到盒子12的配置
        ],
        currentIndex: null
      };
    },
    methods: {
      rotate(index) {
        if (this.currentIndex === index) {
          // 取消选中
          this.currentIndex = null;
        } else {
          // 选中盒子
          this.currentIndex = index;
        }
      },
      rotateRight() {
        if (this.currentIndex !== null) {
          this.rotateBoxes(30);
        }
      },
      rotateLeft() {
        if (this.currentIndex !== null) {
          this.rotateBoxes(-30);
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .turntable-container {
    position: relative;
    width: 300px;
    height: 300px;
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
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    transition: transform 0.3s ease;
    text-align: right;
    width: 37vw;
    height: 10vh;
    background-color: pink; 
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
    margin-top: 20px;
    text-align: center;
  }
  
  .buttons {
    margin-top: 20px;
  }
  
  .buttons button {
    margin-right: 10px;
  }
  </style>
  
