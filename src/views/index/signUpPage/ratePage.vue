<template>
  <div>
    <div class="button-box">
      <router-link to="/index"><backPagebutton></backPagebutton></router-link>
    </div>
    <div class="rate-box">
      <div class="box-one">
        <span>初审</span>
        <div><img src="@/assets/sign/图像 6.png"></div>
        <p>01</p>
      </div>
      <div class="box-two" style="margin-top:80px">
        <span>面试</span>
        <div><img src="@/assets/sign/图像 5.png"></div>
        <p>02</p>
      </div>
      <div class="box-three">
        <span>笔试</span>
        <div><img src="@/assets/sign/图像 2.png" ></div>
        <p>03</p>
      </div>
      <div class="box-four" style="margin-top:80px">
        <span>录取</span>
        <span style="margin-top:0">结果</span>
        <div><img src="@/assets/sign/图像 4.png" style="margin-top:8px"></div>
        <p>04</p>
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
  width: 1200px;
  /* background-color: aquamarine; */
  margin: auto;
  margin-top: 15px;
}
.rate-box{
  display: flex;
  justify-content: space-around;
  width: 1100px;
  height: 565px;
  /* background-color: aquamarine; */
  margin: auto;
  margin-top: 20px;
}
div[class^="box"]{
  width: 200px;
  height: 440px;
  border: #dbd8d8 1px solid;
  border-radius: 50px;
}
p{
  margin-left: 100px;
  margin-top: 5px;
  font-size: 4em;
  font-weight: bold;
  /* color: #807e7e; */
  background-image: -webkit-linear-gradient(bottom, rgb(99, 98, 98), #7a7a7a, rgb(155, 155, 153)); 
 -webkit-background-clip: text; 
 -webkit-text-fill-color: transparent;
}
span{
  display: block;
  margin-left: 20px;
  margin-top: 30px;
  font-size: 2.2em;
  font-weight: bold;
  color: #AAAAAA ;
}
div[class^="box"] img{
  width: 200px;
  margin-top: 50px;
}
</style>