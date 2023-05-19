<template>
  <div class="show">
   <div class="mainTitle">APP开发</div>
   <div class="title">APPLICATION</div>
   <div class="scroll">爱特工作室APP应用部门是在移动端高速发展下，于2017年成<br>立的部门。Android应用开发基于Java等语言，负责编写应用<br>客户端界面，完成客户端与服务端的信息应用开发部门扩展了<br>社团的变量，使工作室的技术力量多样化。</div>
  <div class="scroll1">APP部门主要负责移动APP和微信小程序的设计与制作，在一<br>年的学习你将动手实现5个不同类型的APP，拥有自主设计开发<br>APP的能力，加入我们让我们一起设计一款属于你自己的APP<br>吧。</div>
<div class="image"><img style="width:100%;height:100%;" src="@/assets/about/app.png" alt=""></div>
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
color: #333333;width: 16vw;height:3.3951vw ;

}
.title{width: 16vw;
font-size: 2vw;
margin-left: 5.1vw;margin-top: 2.15vw;
font-weight: bold;
color: #333333;
}
.show{
width: 61vw;margin-top: 1.45vw;
height:38vw;
background: rgb(253, 228, 230);
border-radius: 3.85vw;
}
</style>
