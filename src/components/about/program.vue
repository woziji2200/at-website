<template>
   <div class="show">
   <div class="mainTitle">程序开发</div>
   <div class="title">PROGRAM</div>
   <div class="big">
   <div class="scroll"><p>程序部门主要职能为基于Django, ASP.NET, PHP, JSP等技术，应用Python, c#, Java, c++等语言开发应用程序，完成与SQLServer，MySQL等数据库的交互，设计对外API接口等。</p> </div>
 <div class="scroll1"><p>程序部，所谓之程序，乃是后端开发的意思，并非常规意义上常见的桌面应用程序，而是更加偏向计算机网络方向的学习核心。主要能够学到的内容有后端接口、数据库以及服务器的相关一系列操作，这也是每一个互联网应用中必要的部分，会比较有挑战性喔，请做好无限学习的准备！</p>   </div>
 </div>
 <div class="image"><img style="width:100%;height:100%;" src="@/assets/about/program.png" alt=""></div>

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

background: rgb(223, 220, 235);
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
    right: -6.5vw;
    width: 38.5vw;
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
background: rgb(223, 220, 235);
border-radius: 3.85vw;
}
  }
  @media (min-width: 769px) {
.big{
  height: 22vw;
   overflow: auto;

  }
.image{
    position: absolute;
 bottom: -1.8vw;
    right: -6.5vw;
    width: 38.5vw;
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
background: rgb(223, 220, 235);
border-radius: 3.85vw;
}

  }
  
</style>
