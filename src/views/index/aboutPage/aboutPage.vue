<template>
    <div id="app">
        <div >
     <mainPagebutton style="margin-top:4.88%;margin-left:3.65%;"></mainPagebutton>
    <div id="position">
    <web id="component1" class="component active"> </web>
                <ui id="component2" class="component"></ui>
         <app id="component3" class="component"></app>  
       
              <program id="component4" class="component"></program> 
                     <game id="component5" class="component"></game> 
    <div class="web"   ><div style="margin-top: 2.6vw;
    margin-left: 5.4vw;"><span >Web开发</span></div> <svg class="dianji" xmlns="http://www.w3.org/2000/svg" width="1500" height="1500" viewBox="0 0 150 150">
<path  @click="switchComponent('component2')"  d="M2,2 L2,8 L8,5 L2,2" style="fill: transparent;" />  
</svg> </div> 
    <div class="ui"  @click="switchComponent('component2')"><div style="    margin-top: 7.6vw;
    margin-left: 3vw;"><span >UI设计</span></div> </div>
    <div class="app"   @click="switchComponent('component3')"><div style="     margin-top: 3.8vw;
    margin-left: 3vw;"><span >APP开发</span></div></div>
        <div class="program" @click="switchComponent('component4')"><div style="        margin-top: 4.1vw;
    margin-left: 3.4vw;"><span >程序开发</span></div></div>
    <div class="game"  @click="switchComponent('component5')"><div style="    margin-top: 6.6vw;
    margin-left: 3vw;"><span >游戏开发</span></div></div>
   
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
        }
    },
    methods:
    {
    switchComponent(componentId) {
      // Hide all components
      var components = document.getElementsByClassName('component');
      for (var i = 0; i < components.length; i++) {
        components[i].classList.remove('active');
      }

      // Change background images
  var buttons = document.querySelectorAll('.web, .ui, .app, .program, .game');
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
      }
    }
    },
    }

</script>

<style scoped>
.dianji{
 position: absolute;
/* color: transparent; */
   top: -2.8vw;   right: -7.5vw;
cursor: initial; color: transparent;
background-color: transparent; 
}
.web{  cursor: pointer;
  background: url('@/assets/about/component1.png') -1px -1px no-repeat;
   background-size: 100%;
       top: -2.8vw;
    width: 15vw;
    height: 11vw;
    right: -7.5vw;
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
    right: -0.3vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
    position: absolute;
}
.game{background: url('@/assets/about/5.png') -1px -1px no-repeat;
    background-size: 100%;
    top: -2.55vw;
    width: 12vw;
       height: 14.1vw;
    right: -0.1vw;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    font-size: 1.55vw;
    position: absolute;
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
</style>
