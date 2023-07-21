<template>
  <div class="show">
   <div class="mainTitle">APP开发</div>
   <div class="title">APPLICATION</div>
   <div class="big">
   <div class="scroll"><p>爱特工作室APP应用部门是在移动端高速发展下，于2017年成<br>立的部门。Android应用开发基于Java等语言，负责编写应用<br>客户端界面，完成客户端与服务端的信息应用开发部门扩展了<br>社团的变量，使工作室的技术力量多样化。</p> </div>
  <div class="scroll1"><p>APP部门主要负责移动APP和微信小程序的设计与制作，在一<br>年的学习你将动手实现5个不同类型的APP，拥有自主设计开发<br>APP的能力，加入我们让我们一起设计一款属于你自己的APP<br>吧。</p> </div>
</div>
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
width: 61vw;margin-top: 1.45vw;
height:38vw;
background: rgb(253, 228, 230);
border-radius: 3.85vw;
}
  .show {
    width: 61vw;overflow: hidden;
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
width: 61vw;margin-top: 1.45vw;
height:38vw;
background: rgb(253, 228, 230);
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
width: 61vw;margin-top: 1.45vw;
height:38vw;
background: rgb(253, 228, 230);
border-radius: 3.85vw;
}
  }
</style>
