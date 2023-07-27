<template>
  <div class="show">
   <div class="mainTitle">Web开发</div>
   <div class="title">WEBBACED</div>
  <div class="big">
   <div class="scroll"><p>Web开发部门利用html, CSS, JavaScript为主要语言来对网站表现层与结构层等前台部分做出完关构造，在实现设计师要带给用户上的视觉冲击以外还能保证与后台交互实现网站对用户功能，从而让网站突破实用性和吸引力。</p> </div>
   <div class="scroll1"><p>Web开发可以暂时理解成写网页，例如你现在浏览的网页，你所能看到的部分（网页上的文字图片、各种动画效果）都是我们的成员在Web开发部门学习后的作品。写网页，我们这里需要用到三部分知识：Html、CSS、JavaScript。大家可以看到没有涉及到C语言、Python等，因此对零基础的同学较为友好。在进入社团前，我们期望你们预习基础的Html知识，掌握基本的标签。在进入社团后，我们每周都会组织授课，按照上述的顺序讲课，在课下我们会布置相关的联习。</p> </div>
  </div>
  
  <div class="image"><img style="width:100%;height:100%;" src="@/assets/about/web.png" alt=""></div>

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
.show{overflow: hidden;
width: 61vw;margin-top: 1.45vw;
height:38vw;
background: rgb(225, 239, 254);
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

background: rgb(225, 239, 254);
  width: 61vw;margin-top: 1.45vw;
height:38vw;
border-radius: 3.85vw;
}
 p {
      line-height: 1.2rem;  /* 在页面宽度小于等于768px时调整文字之间的距离 */
    }
}
@media (min-width: 769px) {
   
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

background: rgb(225, 239, 254);
  width: 61vw;margin-top: 1.45vw;
height:38vw;
border-radius: 3.85vw;
}

  }
  

</style>
