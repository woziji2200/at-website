<template>
    <div id="app">
      <img src="@/assets/img/背景图.png" class="background1">
      <img src="@/assets/img/背景图2.jpg" class="background2">
        <div >
     <mainPagebutton style="margin-top:4.88%;margin-left:3.65%;"></mainPagebutton>
    <div id="position">
    <web id="component1" class="component"> </web>
                <ui id="component2" class="component"></ui>
         <app id="component3" class="component"></app>  
              <program id="component4" class="component"></program> 
                     <game id="component5" class="component active"></game> 
                      <div style="position: absolute;top: -2.8vw;right: -7.5vw;height: 10.5vw;cursor: pointer;" @click="switchComponent('component1')"></div>
<!-- <div class="rotate" :style="{ transform: transformValue }"> -->
  <div class="rotate"  :style="{ transform: `rotate(${transformValue}deg)` }">
     <div class="web" style="cursor:pointer;"  ><div class="first" ><span  :style="{ transform: `rotate(${transformValue1}deg)` }">{{web}}</span></div>  </div> 
    <div class="ui"  style="cursor:pointer;"><div class="second" ><span  :style="{ transform: `rotate(${transformValue2}deg)` }"  >{{ui}}</span></div> </div>
    <!-- margin-left: 3vw;"><span  style=" display:inline-block;transform: rotate(-72deg);" >UI设计</span></div> </div> -->
    <div class="app"  style="cursor:pointer;"><div class="third" ><span  :style="{ transform: `rotate(${transformValue3}deg)` }">{{app}}</span></div></div>
        <div class="program"  style="cursor:pointer;"><div class="forth" ><span  :style="{ transform: `rotate(${transformValue4}deg)` }">{{program}}</span></div></div>
    <div class="game"  style="cursor:pointer;" ><div class="fifth" ><span  :style="{ transform: `rotate(${transformValue5}deg)` }">{{game}}</span></div></div>
    <svg class="click5" xmlns="http://www.w3.org/2000/svg" width="258" height="302" viewBox="0 0 258 302">
  <path  style="cursor:pointer;" @click="switchComponent('component5')" id="_5_1" data-name="5 1" class="cls-1" d="M95.5,0c25.582,16.406,38.182,67.148,64.5,82.208,18.765,10.738,32.926-9.785,47.1-5.074,7.63,3.272,23.457,23.208,19.453,33.492-7.786,13.383-27.273,5.625-28.667,27.4l56.31,77.134c-3.937-1.434-2.172-1.786-6.143,0,0.1,5.377-.525,8.148-2.048,11.164-29.593,4.879-59.782,24.4-89.071,29.432-11.546-9.786-9.569-21.609-17.4-35.522-18.108-.543-26.906,3.181-36.857,10.149-2.3,9.041,2.826,31.868-3.072,40.6C92.269,281.828,8.514,305.976.288,301.429V295.34c-3-15.055,20.164-64.333,25.6-81.193ZM255.217,216.176l2.047,3.045Zm2.047,4.06c0.586,2.857,1.748,1.386-1.024,3.045Q256.753,221.758,257.264,220.236Z"/>
</svg>
<svg class="click3" xmlns="http://www.w3.org/2000/svg" width="307" height="275" viewBox="0 0 307 275">
  
  <path style="cursor:pointer" @click="switchComponent('component3')" id="_3_1" data-name="3 1" class="cls-1" d="M45.012-2L145.3,29.925c4.49,16.954-9.918,27.216-6.14,39.134,3.452,7.164,25.772,18.365,36.842,13.388,11.305-6.425,11.425-25.043,24.561-29.866,20.622-7.57,85.1,22.965,106.433,28.836l-2.047,3.09L43.989,274,42.965,171.015C34.21,148.24,20.339,159.871,3.053,149.388-7.6,142.925,1.336,113.043,5.1,107.164c10.579,0.483,19.944,7.1,29.678,3.09C51.148,102.468,45.431,25.081,45.012-2Z"/>
</svg>

<svg class="click2"  xmlns="http://www.w3.org/2000/svg" width="258" height="308" viewBox="0 0 258 308">  
  <path  style="cursor:pointer;" @click="switchComponent('component2')" id="_2_1" data-name="2 1" class="cls-1" d="M157.671-2c8.178,7.181,25.6,73.713,30.705,89.332L259,296.767l-88.024-27.793c-48.286-10.757-23.676,57.8-80.858,16.874,1.414-12.314,15.65-19.434,10.235-32.755C88.992,230.924,20.706,229.572-2,214.383L59.412,132c19.533-.339,21.385,9.024,31.729,16.874l6.141-.992c7.841-3.216,25.773-19.939,20.471-31.763L99.329,92.3C92.727,67.471,148.162,18.427,157.671-2Z"/>
</svg>
<svg class="click4" xmlns="http://www.w3.org/2000/svg" width="263" height="278" viewBox="0 0 263 278">
  <path  style="cursor:pointer;"  @click="switchComponent('component4')" id="_4_1" data-name="4 1" class="cls-1" d="M128.336-.937c7.536-.284,11.267.545,15.276,3.043,1.981,10.158,2.746,23.023,7.129,30.426,30.976,8,77.7-22.339,107.949-28.4l1.019,1.014c0.314,26.641,5.768,95.212-5.092,110.549-11.286,2.667-23.018-1.02-34.626,1.014q-3.054,5.577-6.11,11.156c1.016,6.135,1.46,21.129,6.11,28.4l30.552,8.114c16.132,11.125,10.648,86.112,10.184,115.62l-4.074-2.028-89.618-64.91C111.215,173.349,49.005,136.447-1,90.342L1.037,87.3C19.7,84.393,90.739,61.514,98.8,49.774c8.753-12.743-1.332-33.957,9.166-42.6C112.159,1.831,122.061,2.286,128.336-.937Z"/>
</svg>
     <svg  class="click1" xmlns="http://www.w3.org/2000/svg" width="325" height="229" viewBox="0 0 325 229">
     <path  style="cursor:pointer;" @click="switchComponent('component1')" id="_1_1" data-name="1 1"  d="M4,4H323c-12.422,18.652-53.724,64.354-58.182,83.139-5.841,24.606,14.685,26.658,19.059,39.542,4.439,13.07-15.577,27.118-21.066,32.444l-5.015-1.014c-10.645-5.3-11.351-17.652-26.082-19.264C199.121,153.278,190.472,200.982,164.5,223l-60.189-80.1c-6.5-21.5,21.7-18.065,26.082-28.389,5.417-12.764-14.067-29.6-19.06-34.472-15.431.447-23.242,14.036-40.125,9.125C55.084,84.476,15.055,20.255,4,4Z"/>
     </svg>
     </div>
     </div>
     </div>
    </div >
</template>
<script>
import mainPagebutton from '@/components/about/mainPagebutton.vue'
import web from '@/components/about/web.vue'
import app from '@/components/about/app.vue'
import game from '@/components/about/game.vue'
import program from '@/components/about/program.vue'
import ui from '@/components/about/ui.vue'

export default {
  components: {
            mainPagebutton,
web, ui,program, game, app
},
    data() {
        return {
          transformValue:"",
          transformValue1:"",
          transformValue2:"",
          transformValue3:"",
          transformValue4:"",
          transformValue5:"",
             angle: 0,
             angle1:0,
          web:"web开发",
          ui:"UI设计",
          app:"APP开发",
          program:"程序开发",
          game:"游戏开发",
          flag:"component5",
        }
    },
    methods:
    {
       switchComponent(componentId) {
        //传入active     
        // var rotate=document.getElementsByClassName("rotate");
   
        
        var buttons = document.querySelectorAll('.web, .ui, .app, .program, .game');
        console.log(this.flag)
        if(this.flag=='component5'&&componentId=='component1'){
          this.angle -= 72
             this.angle1+=72
this.transformValue=this.angle
console.log(this.transformValue)
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component1'  
        }
         else if(this.flag=='component5'&&componentId=='component2'){
             this.angle -= 144
             this.angle1+=144
     this.transformValue=this.angle
console.log(this.transformValue)
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component2'
        }  else if(this.flag=='component5'&&componentId=='component3'){
                this.angle += 144
             this.angle1-=144
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component3'
        }  else if(this.flag=='component5'&&componentId=='component4'){
              this.angle += 72
             this.angle1-=72
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component4'
        }  
        else if(this.flag=='component1'&&componentId=='component2'){
          this.angle -= 72
             this.angle1+=72
    this.transformValue=this.angle
       this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component2'
        }
        else if(this.flag=='component1'&&componentId=='component3'){
              this.angle -= 144
             this.angle1+=144
     this.transformValue=this.angle
console.log(this.transformValue)
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component3'
        }  
        else if(this.flag=='component1'&&componentId=='component4'){
                    this.angle += 144
             this.angle1-=144
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component4'
        }  
        else if(this.flag=='component1'&&componentId=='component5'){
                  this.angle += 72
             this.angle1-=72
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component5'
        }  
            else if(this.flag=='component2'&&componentId=='component3'){
      this.angle -= 72
             this.angle1+=72
    this.transformValue=this.angle
       this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component3'
        }
        else if(this.flag=='component2'&&componentId=='component4'){
                                  this.angle -= 144
             this.angle1+=144
     this.transformValue=this.angle
console.log(this.transformValue)
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component4'
        }  
        else if(this.flag=='component2'&&componentId=='component5'){
      
            this.angle += 144
             this.angle1-=144
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component5'
        }  
        else if(this.flag=='component2'&&componentId=='component1'){
                           this.angle += 72
             this.angle1-=72
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component1'
        }  
              else if(this.flag=='component3'&&componentId=='component4'){
   this.angle -= 72
             this.angle1+=72
    this.transformValue=this.angle
       this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component4'
        }
        else if(this.flag=='component3'&&componentId=='component5'){
        
                               this.angle -= 144
             this.angle1+=144
     this.transformValue=this.angle
console.log(this.transformValue)
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component5'
        }  
        else if(this.flag=='component3'&&componentId=='component1'){
                        this.angle += 144
             this.angle1-=144
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component1'
        }  
        else if(this.flag=='component3'&&componentId=='component2'){
                            this.angle += 72
             this.angle1-=72
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component2'
        } 
         else if(this.flag=='component4'&&componentId=='component5'){
        this.angle -= 72
             this.angle1+=72
    this.transformValue=this.angle
       this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component5'
        }
        else if(this.flag=='component4'&&componentId=='component1'){
                         this.angle -= 144
             this.angle1+=144
     this.transformValue=this.angle
console.log(this.transformValue)
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component1'
        }  
        else if(this.flag=='component4'&&componentId=='component2'){
                this.angle += 144
             this.angle1-=144
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component2'
        }  
        else if(this.flag=='component4'&&componentId=='component3'){
       this.angle += 72
             this.angle1-=72
     this.transformValue=this.angle
          this.transformValue1= this.angle1
               this.transformValue2= this.angle1
                    this.transformValue3= this.angle1
                         this.transformValue4= this.angle1
                              this.transformValue5= this.angle1
          this.flag='component3'
        } 

      // Hide all components
      //如果当前显示的图片是游戏开发那么当点击web的时候转动一个72deg
      //如果点击的是ui转动两个72deg
       var components = document.getElementsByClassName('component');
       for (var i = 0; i < components.length; i++) {
        components[i].classList.remove('active');
       }
       // Change background images
   
       console.log() 
       for (var i = 0; i < buttons.length; i++) { 
       buttons[i].style.backgroundImage = 'url(' + require('@/assets/about/' + (i + 1) + '.png') + ')';
       }
   

      // Show selected component and update button background
        // var button = document.getElementsByClassName(componentId)[0];
        //    console.log(button)
        //    //这里button失效了
        // if (button) {
        //   button.style.backgroundImage ='url(' + require('@/assets/about/' + componentId + '.png') + ')' ;
        // }
    if(componentId=='component1'){
               buttons[0].style.backgroundImage = 'url(' + require('@/assets/about/component1.png') + ')';
      }
      else if (componentId=='component2'){
             buttons[1].style.backgroundImage = 'url(' + require('@/assets/about/component2.png') + ')';
      }
      else if (componentId=='component3'){
          buttons[2].style.backgroundImage = 'url(' + require('@/assets/about/component3.png') + ')';
      } else if (componentId=='component4'){
              buttons[3].style.backgroundImage = 'url(' + require('@/assets/about/component4.png') + ')';
      }
      else{
   buttons[4].style.backgroundImage = 'url(' + require('@/assets/about/component5.png') + ')';

      }
        var component = document.getElementById(componentId);

      if (component) {
        component.classList.add('active');
        component.style.opacity = '0'; // 设置初始透明度为 0

  // 使用 CSS 过渡效果实现淡入动画
  component.style.transition = 'opacity 0.5s';
  requestAnimationFrame(function() {
    component.style.opacity = '1';
     component.style.transition ='opacity 2s' // 将透明度逐渐过渡到 1
  });
      }
    },
      changeData() {
      this.transformValue=""
      this.transformValue1=""
      this.transformValue2=""
      this.transformValue3=""
      this.transformValue4=""
      this.transformValue5=""
  },
    handleResize() {
    const width = window.innerWidth;
    if (width < 460) {
      this.program = "PR";
      this.app="AP";
      this.ui="UI";
      this.game="Ga";
      this.web="We";
    } else {
      // 如果需要在其他情况下设置this.program的值，可以在这里添加对应的逻辑
    }
  },
    },
    mounted(){
     this.changeData();
      window.addEventListener('resize', this.handleResize);
  // 初始化执行一次
  this.handleResize();
    },
    beforeDestroy() {
  // 移除事件监听
  window.removeEventListener('resize', this.handleResize);
},
    }

</script>

<style scoped>
@media (min-width:100px) and (max-width: 500px) {
  .background1{
    display: none;
  }
  
  .background2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .first{
        margin-top: 0.6vw;
    margin-left: 5vw;
}
.second{
    margin-top: 6vw;
    margin-left: 4vw;
}
.third{
    margin-top: 2.8vw;
    margin-left: 2.5vw;
}
.forth{
margin-top: 2.8vw;
    margin-left: 4vw;
}
.fifth{
margin-top: 4.4vw;
    margin-left: 3vw;
}
  ::-webkit-scrollbar{
  width: 8px;
  height: 8px;
  background-color: transparent;
}
/*滚动条的轨道*/
::-webkit-scrollbar-track{
  background-color: transparent;
}
/*滚动条的滑块按钮*/
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: rgb(7,61,92);
  box-shadow: inset 0 0 5px rgb(7,61,92);
}
/*滚动条的上下两端的按钮*/
::-webkit-scrollbar-button{
  height: 0;
  background-color: rgb(7,61,92);
}
 

::-webkit-scrollbar-corner{
  background-color: transparent;
}
.rotate span{
  display: inline-block; transition: all 2s; white-space: nowrap;
}
.rotate{ 
/*   
  animation: rotate 10s linear infinite;animation: action 10s linear infinite;
        -webkit-animation: rotate 10s linear infinite; */   transition: all 2s; height: 15vw;position: absolute;
        /* animation: rotate 30s infinite; */
        /* transform: rotate(72deg); */
    width: 0vw;
    top: 0.5vw;
    right: 0.1vw;
        }
.click1{ cursor: pointer;
 position: absolute;
/* color: transparent; */
    top: -2.8vw;
   width: 10vw;
    height: 7vw;
    right: -4.5vw;
      fill: transparent;
          stroke: transparent;
          stroke-width: 1px;
          fill-rule: evenodd;    z-index: 999;

}
.click2{
    position: absolute;
    fill: transparent;
    stroke: transparent;
    stroke-width: 1px; 
    fill-rule: evenodd;
      top: -0.68vw;
    width: 8.9vw;
    z-index: 999;
    height: 12.5vw;
    right: -11.9vw;
}
.click3{
     top: 7.6vw;
    width: 12vw;   fill: transparent;
        stroke: transparent;
        stroke-width: 1px;
        fill-rule: evenodd;
    height: 12.8vw;
    right: -12vw; position: absolute;    z-index: 999;

}
.click4{  top: 7.2vw;
    width: 12.2vw; fill: transparent;
 stroke: transparent;
        stroke-width: 1px;
        fill-rule: evenodd;
     height: 12.8vw;
    right: -0.3vw; position: absolute;
    z-index: 999;

}
.click5{
   top: -2.55vw;
    width: 12vw;
       height: 14.1vw;    position: absolute;
    right: -0.1vw;
 fill: transparent;
     stroke: transparent;
        stroke-width: 1px;
    z-index: 999;
}



@keyframes rotate {
        0% {
            transform: rotate(0);
        }

        20% {
            transform: rotate(72deg);
        }

        40% {
            transform: rotate(144deg);
        }

        60% {
            transform: rotate(216deg);
        }

        80% {
            transform: rotate(288deg);
        }
          100% {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes rotate {
        0% {
            transform: rotate(0);
        }

        25% {
            transform: rotate(90deg);
        }

        50% {
            transform: rotate(180deg);
        }

        75% {
            transform: rotate(270deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
@keyframes action {

from {

transform: rotate(0deg) translate(100px) rotate(0deg);

}

to {

transform: rotate(360deg) translate(100px) rotate(-360deg);

}

}
.web{  cursor: pointer;
  background: url('@/assets/about/1.png') 0px 0px no-repeat;
   background-size: 100%;
   top: -2.78vw;
    width: 14.9vw;  
    height: 11vw;
    right: -7.35vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
    position: absolute;
}
.ui{
  
   background: url('@/assets/about/2.png') -1px -1px no-repeat;
  background-size: 100%;
       top: -2.68vw;
    width: 11.9vw;
    height: 14.5vw;         right: -11.9vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
    position: absolute;
}
.app{
background: url('@/assets/about/3.png') -1px -1px no-repeat;
     background-size: 100%;
    top: 7.6vw;
    width: 14vw;
    height: 12.8vw;
    right: -12vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
    position: absolute;
}
.program{background: url('@/assets/about/4.png') -1px -1px no-repeat;
 background-size: 100%;
    top: 7.2vw;
    width: 12.2vw;
     height: 12.8vw;
    right: -0.3vw; position: absolute;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
   
}
.game{background: url('@/assets/about/component5.png') 0px 0px no-repeat;
    background-size: 100%;
    top: -2.7vw;
    width: 11.93vw;
       height: 14.1vw;    position: absolute;
    right: -0vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;

}

#position{
 width: 61vw;height:38vw;margin-left: 13.1vw;position: relative;
}
#app{
margin: 0 auto ;

}
 .component {
      display: none;
    }
    .active {
      display: block;
    }
  }
  @media (min-width:501px)  {
      .background2{
    display: none;
  }
    .background1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .first{
     margin-top: 2.6vw;
     margin-left: 5.4vw;
}
.second{
margin-top: 8vw;
      margin-left: 4vw;
}
.third{
margin-top: 4.8vw;
    margin-left: 1.5vw;
}
.forth{
margin-top: 4.1vw;
    margin-left: 3.4vw;
}
.fifth{
margin-top: 5.8vw;
    margin-left: 3vw;
}
  ::-webkit-scrollbar{
  width: 8px;
  height: 8px;
  background-color: transparent;
}
/*滚动条的轨道*/
::-webkit-scrollbar-track{
  background-color: transparent;
}
/*滚动条的滑块按钮*/
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: rgb(7,61,92);
  box-shadow: inset 0 0 5px rgb(7,61,92);
}
/*滚动条的上下两端的按钮*/
::-webkit-scrollbar-button{
  height: 0;
  background-color: rgb(7,61,92);
}
 

::-webkit-scrollbar-corner{
  background-color: transparent;
}
.rotate span{
  display: inline-block; transition: all 2s; white-space: nowrap;
}
.rotate{ 
/*   
  animation: rotate 10s linear infinite;animation: action 10s linear infinite;
        -webkit-animation: rotate 10s linear infinite; */   transition: all 2s; height: 15vw;position: absolute;
        /* animation: rotate 30s infinite; */
        /* transform: rotate(72deg); */
    width: 0vw;
    top: 0.5vw;
    right: 0.1vw;
        }
.click1{ cursor: pointer;
 position: absolute;
/* color: transparent; */
    top: -2.8vw;
   width: 10vw;
    height: 7vw;
    right: -4.5vw;
      fill: transparent;
          stroke: transparent;
          stroke-width: 1px;
          fill-rule: evenodd;    z-index: 999;

}
.click2{
    position: absolute;
    fill: transparent;
    stroke: transparent;
    stroke-width: 1px; 
    fill-rule: evenodd;
      top: -0.68vw;
    width: 8.9vw;
    z-index: 999;
    height: 12.5vw;
    right: -11.9vw;
}
.click3{
     top: 7.6vw;
    width: 12vw;   fill: transparent;
        stroke: transparent;
        stroke-width: 1px;
        fill-rule: evenodd;
    height: 12.8vw;
    right: -12vw; position: absolute;    z-index: 999;

}
.click4{  top: 7.2vw;
    width: 12.2vw; fill: transparent;
 stroke: transparent;
        stroke-width: 1px;
        fill-rule: evenodd;
     height: 12.8vw;
    right: -0.3vw; position: absolute;
    z-index: 999;

}
.click5{
   top: -2.55vw;
    width: 12vw;
       height: 14.1vw;    position: absolute;
    right: -0.1vw;
 fill: transparent;
     stroke: transparent;
        stroke-width: 1px;
    z-index: 999;
}



@keyframes rotate {
        0% {
            transform: rotate(0);
        }

        20% {
            transform: rotate(72deg);
        }

        40% {
            transform: rotate(144deg);
        }

        60% {
            transform: rotate(216deg);
        }

        80% {
            transform: rotate(288deg);
        }
          100% {
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes rotate {
        0% {
            transform: rotate(0);
        }

        25% {
            transform: rotate(90deg);
        }

        50% {
            transform: rotate(180deg);
        }

        75% {
            transform: rotate(270deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
@keyframes action {

from {

transform: rotate(0deg) translate(100px) rotate(0deg);

}

to {

transform: rotate(360deg) translate(100px) rotate(-360deg);

}

}
.web{  cursor: pointer;
  background: url('@/assets/about/1.png') 0px 0px no-repeat;
   background-size: 100%;
   top: -2.78vw;
    width: 14.9vw;  
    height: 11vw;
    right: -7.35vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
    position: absolute;
}
.ui{
  
   background: url('@/assets/about/2.png') -1px -1px no-repeat;
  background-size: 100%;
       top: -2.68vw;
    width: 11.9vw;
    height: 14.5vw;         right: -11.9vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
    position: absolute;
}
.app{
background: url('@/assets/about/3.png') -1px -1px no-repeat;
     background-size: 100%;
    top: 7.6vw;
    width: 14vw;
    height: 12.8vw;
    right: -12vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
    position: absolute;
}
.program{background: url('@/assets/about/4.png') -1px -1px no-repeat;
 background-size: 100%;
    top: 7.2vw;
    width: 12.2vw;
     height: 12.8vw;
    right: -0.3vw; position: absolute;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
   
}
.game{background: url('@/assets/about/component5.png') 0px 0px no-repeat;
    background-size: 100%;
    top: -2.7vw;
    width: 11.93vw;
       height: 14.1vw;    position: absolute;
    right: -0vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;

}

#position{
 width: 61vw;height:38vw;margin-left: 13.1vw;position: relative;
}
#app{
margin: 0 auto ;

}
 .component {
      display: none;
    }
    .active {
      display: block;
    }
  }

</style>
