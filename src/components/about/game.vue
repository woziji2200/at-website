<template>
  <div class="show">
   <div class="mainTitle">游戏开发</div>
   <div class="title">GAME DEVELOP</div>
   <div class="big">
   <div class="scroll"><p>爱特游戏部门是2018年新成立的部门。专注与2D游戏的开发。游戏以游戏性为本，以社交性为辅，以商业性为底。他们用心为自己的理想开辟道路。</p> </div>
 <div class="scroll1"><p>大一秋季学期期间会交给新生Unity的一些简单的使用，包括场景实例搭建和脚本代码编写，让新生具备自主开发简单的小游戏的能力。期间会有三次项目作业，难度逐步提升。大一春季学期期间则分组安排进行团队项目开发，每组成员在一学期内多人合作完成一个大型游戏项目的开发。</p> </div>
 </div>
 <div class="image"><img style="width:100%;height:100%;" src="@/assets/about/game.png" alt=""></div>
  </div>
</template>

<script>
export default {

  data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 100px) and (max-width: 500px) {
    .big{
 height: 55vh;
   overflow: auto;
  }
.image{
     position: absolute;
    bottom: -0.3vw;
    right: -4.5vw;
    width: 36vw;
}
.scroll1{
  width: 31.7vw;
 margin-top: 0.9vw;font-weight: bold;
 margin-left: 5.1vw;
 font-size: 1vw;line-height:1.6vw ;
}
.scroll{
width: 31.7vw;
 margin-top: 1.3vw;
 margin-left: 5.1vw;line-height: 1.6vw;
 font-size: 1vw;font-weight: bold;
}
.mainTitle{
margin-left: 5.1vw;
font-size: 3.5vw;
font-family: Adobe Heiti Std;padding-top: 3.8vw;
font-weight: bold;
color: #333333;height:3.3951vw ;

}
.title{
font-size: 2vw;
margin-left: 5.1vw;margin-top: 2.15vw;
font-weight: bold;
color: #333333;
}
.show{
margin-top: 1.45vw;overflow: hidden;

background: rgb(228, 247, 231);
border-radius: 3.85vw;
}
  .show {
    width: 61vw;
    height: 70vh;
    margin: 1.45vw auto 0 auto;
  }

  .mainTitle,
  .title,
  .big,
  .scroll,
  .scroll1 {
    margin: 0 auto;
    text-align: center;
  }

  .image {
    display: none;
  }
  p {
      line-height: 1.2rem;  /* 在页面宽度小于等于768px时调整文字之间的距离 */
    }
}
@media (min-width: 501px) and (max-width: 768px) {
    p {
      line-height: 1.2rem;  /* 在页面宽度小于等于768px时调整文字之间的距离 */
    }
    .big{
  height: 22vw;
   overflow: auto;

  }
.image{
   position: absolute;
    bottom: -1.8vw;
    right: -7vw;
    width: 40.5vw;
}
.scroll1{
  width: 31.7vw;
 margin-top: 0.9vw;font-weight: bold;
 margin-left: 5.1vw;
 font-size: 1vw;line-height:1.6vw ;
}
.scroll{  
width: 31.7vw;
 margin-top: 1.3vw;
 margin-left: 5.1vw;line-height: 1.6vw;
 font-size: 1vw;font-weight: bold;
}
.mainTitle{
margin-left: 5.1vw;
font-size: 3.5vw;
font-family: Adobe Heiti Std;padding-top: 3.8vw;
font-weight: bold;
color: #333333;height:3.3951vw ;

}
.title{
font-size: 2vw;
margin-left: 5.1vw;margin-top: 2.15vw;
font-weight: bold;
color: #333333;
}
.show{
width: 61vw;margin-top: 1.45vw;
height:38vw;
background: rgb(228, 247, 231);
border-radius: 3.85vw;
}
  }
 @media (min-width: 769px)  {
    
    .big{
  height: 22vw;
   overflow: auto;

  }
.image{
   position: absolute;
    bottom: -1.8vw;
    right: -7vw;
    width: 40.5vw;
}
.scroll1{
  width: 31.7vw;
 margin-top: 0.9vw;font-weight: bold;
 margin-left: 5.1vw;
 font-size: 1vw;line-height:1.6vw ;
}
.scroll{  
width: 31.7vw;
 margin-top: 1.3vw;
 margin-left: 5.1vw;line-height: 1.6vw;
 font-size: 1vw;font-weight: bold;
}
.mainTitle{
margin-left: 5.1vw;
font-size: 3.5vw;
font-family: Adobe Heiti Std;padding-top: 3.8vw;
font-weight: bold;
color: #333333;height:3.3951vw ;

}
.title{
font-size: 2vw;
margin-left: 5.1vw;margin-top: 2.15vw;
font-weight: bold;
color: #333333;
}
.show{
width: 61vw;margin-top: 1.45vw;
height:38vw;
background: rgb(228, 247, 231);
border-radius: 3.85vw;
}
 }
</style>
