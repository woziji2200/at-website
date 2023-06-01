<template>
  <div>
    <div class="button-box">
      <router-link to="/index"><backPagebutton class="b-button"></backPagebutton></router-link>
    </div>
    <div class="found">
       <div class="number">请输入电话号码或邮箱</div>
       <input type="text" v-model="phone">
       <div class="submit" @click="submit()">查询</div>
    </div>
    <div class="rate-box">
      <div class="first-line">
      <div class="box-one" :style="box1">
        <span :style="span1">初审</span>
        <div><img src="@/assets/sign/图像 6.png" v-if="ifImg1"></div>
        <div><img src="@/assets/sign/图像 7.png" v-if="ifImg1==false"></div>
        <p :style="p1">01</p>
      </div>
      <div class="box-two" :style="box2">
        <span :style="span2">面试</span>
        <div><img src="@/assets/sign/图像 5.png" v-if="ifImg2"></div>
        <div><img src="@/assets/sign/图像 8.png" v-if="ifImg2==false"></div>
        <p :style="p2">02</p>
      </div>
      </div>
      <div class="second-line">
      <div class="box-three" :style="box3">
        <span :style="span3">笔试</span>
        <div><img src="@/assets/sign/图像 2.png" v-if="ifImg3"></div>
        <div><img src="@/assets/sign/图像 3.png" v-if="ifImg3==false"></div>
        <p :style="p3">03</p>
      </div>
      <div class="box-four" :style="box4">
        <span :style="span4">录取结果</span>
        <!-- <span style="margin-top:0">结果</span> -->
        <div><img src="@/assets/sign/图像 4.png" v-if="ifImg4"></div>
        <div><img src="@/assets/sign/图像 9.png" v-if="ifImg4==false"></div>
        <p :style="p4">04</p>
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
  data(){
    return{
      phone:'',
      box1:'',
      box2:"",
      box3:'',
      box4:'',
      ifImg1:true,
       ifImg2:true,
       ifImg3:true,
       ifImg4:true,
      span1:'',
      span2:'',
      span3:'',
      span4:'',
      p1:'',
      p2:'',
      p3:'',
      p4:'',
    };
  },
  methods:{
    submit(){
      let rateform={
        string:this.phone,
      };
      this.$http.get("/v1/api/sign_up/",rateform,
        ).then((res)=>{
        console.log("res",res);
        if(res.data.data.status==3||res.data.data.status==7){
          this.box1="border-color:#91c2f7;"
          this.span1="color:#4CA2FF;"
          this.ifImg1=false;
          this.p1=" background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
        }
        else if(res.data.data.status==4||res.data.data.status==8||res.data.data.status==9||res.data.data.status==10){
          this.box1="border-color:#91c2f7;"
          this.span1="color:#4CA2FF;"
          this.ifImg1=false;
          this.p1=" background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
          this.box2="border-color:#91c2f7;"
          this.span2="color:#4CA2FF;"
          this.ifImg2=false;
          this.p2=" background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
        }
        else if(res.data.data.status==5){
          this.box1="border-color:#91c2f7;"
          this.span1="color:#4CA2FF;"
          this.ifImg1=false;
          this.p1=" background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
          this.box2="border-color:#91c2f7;"
          this.span2="color:#4CA2FF;"
          this.ifImg2=false;
          this.p2=" background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
          this.box3="border-color:#91c2f7;"
          this.span3="color:#4CA2FF;"
          this.ifImg3=false;
          this.p3=" background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
           this.box4="border-color:#91c2f7;"
          this.span4="color:#4CA2FF;"
          this.ifImg4=false;
          this.p4=" background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
        }
      }).catch((err)=>{
        console.log("err",err);
      });
    },
  }
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
  /* background-color: #91c2f7; */
  margin: auto;
  margin-top: 1vw;
}
.b-button{
  transition: all 0.3s;
}
.b-button:hover{
  transform: scale(1.1);
}
.found{
  /* display: flex; */
  width: 90vw;
  margin: auto;
  text-align: center;
}
.number{
  font-size: 2vw;
  font-weight: bold;
  /* color: #7a7a7a; */
}
.found input{
  margin-top: 1vw;
  margin-bottom: 1vw;
  padding-left: 0.8vw;
  width: 15vw;
  height: 2vw;
  border-radius: 0.7vw;
  border: rgb(182, 181, 181) 1.9px solid;
}
.found input:focus{
  outline: none;
}
.submit {
  cursor: pointer;
  padding-left: 8px;
  margin: auto;
  width: 5vw;
  height: 2vw;
  background-color: #007aff;
  border-radius:0.6vw;
  color: white;
  text-align: center;
  line-height: 2vw;
  font-size: 1.2vw;
  font-weight: bold;
  letter-spacing: 0.5vw;
  transition: all 0.3s;
}
.submit:hover{
  transform: scale(1.1);
}
.rate-box{
  display: flex;
  justify-content: space-around;
  width: 90vw;
  /* height:90vh; */
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
  height: 30vw;
  border: #dbd8d8 1px solid;
  border-radius: 5vw;
}
/* .box-two{
  margin-top: 80px;
}
.box-four{
  margin-top: 80px;
} */
p{
  margin-left: 7vw;
  margin-top: 0.01vw;
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
   margin-top: 0.4vw; 
}
/* .box-four div img{
  margin-top: -8px;
} */
/* @media only screen and (max-width: 767px) {
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
    div[class^="box"]{
      width: 120px;
      height: 300px;
    }
} */
</style>