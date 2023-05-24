<template>
    <div id="app">
        <div class="button-box">
         <router-link to="/index"><backPagebutton ></backPagebutton></router-link>
         <router-link to="/index/signUp/rate"><ratePagebutton></ratePagebutton></router-link>
         </div>
         <div class="sign-background">
             <img
                 src="@/assets/sign/报名页背景.png"
                 class="back-img"
             />
             <div class="sign-up">
                 <div class="join-us">JOIN US!</div>
                 <div class="join-bottom"></div>
                 <div class="line-first">
                     <div class="name" style="display:flex;align-items:center">
                         <span style="margin-right:30px">姓名:</span>
                         <input type="text"/>
                     </div>
                     <div class="sex" style="margin-left:70px;display:flex;align-items:center">
                         <span style="margin-right:30px;">性别:</span>
                         <input type="radio" id="man" name="sex" checked="checked" />
                         <label style="margin-right:20px;color:rgb(56, 55, 55)">男</label>
                         <input type="radio" id="woman" name="sex"  />
                         <label style="color:rgb(56, 55, 55)">女</label>
                     </div>
                     <div class="grade" style="margin-left:70px;display:flex;align-items:center">
                         <span style="margin-right:30px;">年级专业:</span>
                         <input type="text" placeholder="例：23级计算机类" style="width:200px">
                     </div>
                 </div>
                 <div class="line-second" >
                     <div class="phone" style="display:flex;align-items:center">
                         <span style="margin-right:30px">电话号码:</span>
                         <input type="text" style="width:300px">
                     </div>
                     <div class="web" style="margin-left:70px;display:flex;align-items:center">
                         <span style="margin-right:30px">意见部门:</span>
                         <select name="" id="option" value="请选择要加入的部门">
                             <option value="">Web开发</option>
                             <option value="">APP开发</option>
                             <option value="">UI设计</option>
                             <option value="">游戏开发</option>
                             <option value="">程序开发</option>
                         </select>
                     </div>
                 </div>
                 <div class="line-third" >
                     <div class="adress" style="display:flex;align-items:center">
                         <span style="margin-right:30px">邮箱地址:</span>
                         <input type="text" style="width:300px">
                     </div>
                     <div class="number" style="margin-left:95px;display:flex;align-items:center">
                         <span style="margin-right:30px">验证码:</span>
                         <div class="adress-border">
                         <input type="text" placeholder="验证码将发至您的邮箱" class="adress-input">
                         <span style="color:#007AFF;font-size:1em;margin-right:10px;letter-spacing:5px;">获取验证码</span>
                         </div>
                     </div>
                 </div>
                 <div class="line-forth">
                     <div class="dream" style="display:flex;align-items:flex-start">
                         <span style="margin-right:30px;">你的期待:</span>
                         <textarea name="" id="" cols="30" rows="10" placeholder="为什么想加入爱特?你想在爱特学到什么?（最多200字）"></textarea>
                     </div>
                 </div>
                 <div class="submit">提交</div>
             </div>
         </div>
         <router-view></router-view>
    </div >
</template>
<script>
import ratePagebutton from '@/components/sign/ratePagebutton.vue'
import backPagebutton from '@/components/sign/backPagebutton.vue'
export default {
    components:{
        ratePagebutton,backPagebutton
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}

.button-box{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    /* background-color: aquamarine; */
    margin: auto;
}
.sign-background{
    position: relative;
}
.back-img{
    /* position: absolute; */
    width: 100%;
    
}
.sign-up{
    position: absolute;
    top: 3%;
    left: 13%;
    /* display: flex;
    justify-content: center; */
    /* background-color: rgb(56, 55, 55); */
    width: 1000px;
    height: 500px;
    /* margin: auto; */
    z-index: 100;
}
.join-us{
    color: #007AFF;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
}
.join-bottom{
    width: 104px;
    height: 3px;
    background-color: #007AFF;
    margin: auto;
    margin-top: 10px;
}
span{
    display: inline-block;
    font-size: 1.5em;
    font-weight: bold;
}
div[class^="line"]{
    display: flex;
    margin-bottom: 40px;
}
.line-first{
    margin-top: 40px;
}
input{
    /* float: right; */
    height: 30px;
    border: #5da6f3 1.8px solid;
    border-radius: 4px;
}
input[type="radio"]{
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: white;
}
input[type="radio"]:checked{
    background-color: #007AFF;
    border: white 5px solid;
}
label{
    font-size: 1.3em;
    font-weight: bold;
}
input::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #999999 ;
       padding-left: 7px;
}
.adress-border{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 30px;
    border: #5da6f3 1.8px solid;
    border-radius: 4px;
    background-color: white;
}
.adress-input{
    border: none;
}
textarea{
    width: 808px;
    height: 100px;
    border: #5da6f3 1.8px solid;
    border-radius: 4px;
}
textarea::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #999999 ;
       font-size: 1.05em;
       padding-left: 9px;
       padding-top: 9px;
       letter-spacing: 2px;
}
.submit{
    padding-left: 8px;
    margin: auto;
    width: 100px;
    height: 40px;
    background-color: #007AFF;
    border-radius: 10px;
    color: white;
    text-align: center;
    line-height: 40px;
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 8px;
}
a{
    text-decoration: none;
}
</style>
