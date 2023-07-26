<template>
<div @click="goback()" class="route" >
    <div class="pageButton" >
        <div class="text" >返回主页</div> 
        <div class="whiteLine" ></div>
    </div >
</div>
</template>
<script>
export default {

    data() {
        return {

        }
    },
    methods:{
        goback(){
            this.$router.go(-1)
            // history.go(-1)
        }
    }
}
</script>

<style scoped>
@media (max-width: 349px) {
    .route{
        width:20vw;text-decoration: none;display:inline-block;height: 7vw;
    }
   .text{
    font-size: 0.9vw;color: #FFFFFF;margin:0 auto;padding-top:0.27vw;height:1.1vw;font-weight: bold;
   }
.whiteLine{
width: 8vw;
height: 0.1vw;
background: #007AFF;margin:2.3vw auto 0 auto;
  }
.pageButton{text-align: center;
height: 7vw;
background: #007AFF;
box-shadow: 0px 3px 3px 0px rgba(112,112,112,0.16);
border-radius: 0.9vw;
}
  }
  @media (min-width:350px) and (max-width: 490px) {
    .route{
  width:15vw;text-decoration: none;display:inline-block;height: 5vw;
    }
   .text{
    font-size: 0.9vw;color: #FFFFFF;margin:0 auto;padding-top:0.27vw;height:1.1vw;font-weight: bold;
   }
.whiteLine{
width: 8vw;
height: 0.1vw;
background: #007AFF;margin:2.3vw auto 0 auto;
  }
.pageButton{text-align: center;
height: 5vw;
background: #007AFF;
box-shadow: 0px 3px 3px 0px rgba(112,112,112,0.16);
border-radius: 0.9vw;
}
  }
@media (min-width: 491px) and (max-width: 600px) {
    .route{
        width:11.5vw;text-decoration: none;display:inline-block;height:4.5vw;
    }
   .text{
    font-size: 0.9vw;color: #FFFFFF;margin:0 auto;padding-top:0.27vw;height:1.1vw;font-weight: bold;
   }
.whiteLine{
width: 8vw;
height: 0.1vw;
background: #FFFFFF;margin:2.3vw auto 0 auto;
  }
.pageButton{text-align: center;
height: 4.5vw;
background: #007AFF;
box-shadow: 0px 3px 3px 0px rgba(112,112,112,0.16);
border-radius: 0.9vw;
}
  }
  @media (min-width: 601px) and (max-width: 996px) {
  /* 当设备宽度在601px和1024px之间时应用的样式 */
  .route{
width:8vw;text-decoration: none;display:inline-block;height:3vw;
    }
   .text{
    padding-top:0.27vw;height:1.1vw;
font-weight: bold;font-size: 1.2vw;
color: #FFFFFF;margin:0 auto;
  }
  .whiteLine{
width: 3.8vw;
height: 0.1vw;
background: #007AFF;margin:0.5vw auto 0 auto;
  }
.pageButton{text-align: center;
height: 3vw;
background: #007AFF;
box-shadow: 0px 3px 3px 0px rgba(112,112,112,0.16);
border-radius: 0.9vw;
}
}
  @media (min-width: 996px) {
    .route{
width:6.1vw;text-decoration: none;display:inline-block;height:2.4vw;
    }
   .text{
    padding-top:0.27vw;height:1.1vw;
font-weight: bold;font-size: 1.2vw;
color: #FFFFFF;margin:0 auto;
  }
  .whiteLine{
width: 3.8vw;
height: 0.1vw;
background: #FFFFFF;margin:0.5vw auto 0 auto;
  }
.pageButton{text-align: center;
height: 2.4vw;
background: #007AFF;
box-shadow: 0px 3px 3px 0px rgba(112,112,112,0.16);
border-radius: 0.9vw;
}
  }
  

</style>
