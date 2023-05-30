<template>
  <div>
    <div class="button-box">
      <router-link to="/index"><backPagebutton></backPagebutton></router-link>
    </div>
    <div class="rate-box">
      <div class="first-line">
      <div class="box-one">
        <span>初审</span>
        <div><img src="@/assets/sign/图像 6.png"></div>
        <p>01</p>
      </div>
      <div class="box-two">
        <span>面试</span>
        <div><img src="@/assets/sign/图像 5.png"></div>
        <p>02</p>
      </div>
      </div>
      <div class="second-line">
      <div class="box-three">
        <span>笔试</span>
        <div><img src="@/assets/sign/图像 2.png" ></div>
        <p>03</p>
      </div>
      <div class="box-four" >
        <span>录取</span>
        <span style="margin-top:0">结果</span>
        <div><img src="@/assets/sign/图像 4.png" ></div>
        <p>04</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import backPagebutton from "@/components/sign/backPagebutton.vue";
export default {
  name: "ratePage",
  components: {
    backPagebutton,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.button-box {
  /* display: flex;
    justify-content: space-between; */
  width: 90vw;
  /* background-color: aquamarine; */
  margin: auto;
  margin-top: 1vw;
}
.rate-box{
  display: flex;
  justify-content: space-around;
  width: 90vw;
  height:90vh;
  /* background-color: aquamarine; */
  margin: auto;
  margin-top: 1.2vw;
}
.first-line{
  display: flex;
  justify-content:space-around;
  width: 45vw;
}
.second-line{
  display: flex;
  justify-content: space-around;
  width: 45vw;
}
div[class^="box"]{
  width: 15vw;
  height: 34vw;
  border: #dbd8d8 1px solid;
  border-radius: 5vw;
}
.box-two{
  margin-top: 80px;
}
.box-four{
  margin-top: 80px;
}
p{
  margin-left: 7vw;
  margin-top: 0.1vw;
  font-size:5vw;
  font-weight: bold;
  /* color: #807e7e; */
  background-image: -webkit-linear-gradient(bottom, rgb(99, 98, 98), #7a7a7a, rgb(155, 155, 153)); 
 -webkit-background-clip: text; 
 -webkit-text-fill-color: transparent;
}
span{
  display: block;
  margin-left: 1.5vw;
  margin-top: 2vw;
  font-size: 2.7vw;
  font-weight: bold;
  color: #AAAAAA ;
}
div[class^="box"] img{
  width: 15vw;
  margin-top: 3.5vw;
}
.box-four div img{
  margin-top: 8px;
}
@media only screen and (max-width: 767px) {
    .rate-box{
      margin-top: 20px;
      width:70vw;
      display: flex;
      flex-direction: column;
    }
    .first-line{
      justify-content: space-between;
      margin: auto;
    }
    .second-line{
      justify-content: space-between;
      margin: auto;
    }
    .box-two{
      margin-top: 0;
    }
    .box-four{
      margin-top: 0;
    }
    .box-four div img{
      margin-top: -2px;
    }
    /* div[class^="box"]{
      width: 120px;
      height: 300px;
    } */
}
</style>