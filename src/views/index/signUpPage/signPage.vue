<template>
  <div id="app">
    <div class="button-box">
      <router-link to="/index"><backPagebutton></backPagebutton></router-link>
      <router-link to="/index/signUp/rate"
        ><ratePagebutton></ratePagebutton
      ></router-link>
    </div>
    <div class="sign-background">
      <img src="@/assets/sign/报名页背景.png" class="back-img" />
      <div class="sign-up">
        <div class="join-us">JOIN US!</div>
        <div class="join-bottom"></div>
        <div class="line-first">
          <div class="name" style="display: flex; align-items: center">
            <span style="margin-right: 30px">姓名:</span>
            <input type="text" v-model="nam" />
          </div>
          <div
            class="sex"
            style="margin-left: 70px; display: flex; align-items: center"
          >
            <span style="margin-right: 30px">性别:</span>
            <input type="radio" id="man" name="sex" value="0" checked="checked" v-model="sex" style="padding:0;cursor: pointer;"/>
            <label style="margin-right: 20px; color: rgb(56, 55, 55)">男</label>
            <input type="radio" id="woman" name="sex" value="1" v-model="sex" style="padding:0;cursor: pointer;"/>
            <label style="color: rgb(56, 55, 55)">女</label>
          </div>
          <div
            class="grade"
            style="margin-left: 50px; display: flex; align-items: center"
          >
            <span style="margin-right: 30px">年级专业:</span>
            <input
              type="text"
              placeholder="例：23级计算机类"
              v-model="grade"
              style="width: 188px"
            />
          </div>
        </div>
        <div class="line-second">
          <div class="phone" style="display: flex; align-items: center">
            <span style="margin-right: 30px">电话号码:</span>
            <input type="text" v-model="phone" style="width: 285px" />
          </div>
          <div
            class="web"
            style="margin-left: 70px; display: flex; align-items: center"
          >
            <span style="margin-right: 30px">意见部门:</span>
            <el-select v-model="value" placeholder="请选择你要加入的部门" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="line-third">
          <div class="adress" style="display: flex; align-items: center">
            <span style="margin-right: 30px">邮箱地址:</span>
            <input type="text" v-model="address" style="width: 285px" />
          </div>
          <div
            class="number"
            style="margin-left: 95px; display: flex; align-items: center"
          >
            <span style="margin-right: 30px">验证码:</span>
            <div class="adress-border">
              <input
                type="text"
                placeholder="验证码将发至您的邮箱"
                v-model="number"
                class="adress-input"
              />
              <span
              @click="postNumber()"
                style="
                  color: #007aff;
                  font-size: 1em;
                  margin-right: 10px;
                  letter-spacing: 5px;
                  cursor: pointer;
                "
                >获取验证码</span
              >
            </div>
          </div>
        </div>
        <div class="line-forth">
          <div class="dream" style="display: flex; align-items: flex-start">
            <span style="margin-right: 30px">你的期待:</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="为什么想加入爱特?你想在爱特学到什么?（最多200字）"
              v-model="expection"
            ></textarea>
          </div>
        </div>
        <div class="submit" @click="submit()">提交</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import ratePagebutton from "@/components/sign/ratePagebutton.vue";
import backPagebutton from "@/components/sign/backPagebutton.vue";
export default {
  components: {
    ratePagebutton,
    backPagebutton,
  },
  data() {
    return {
        options: [{
          value: '选项1',
          label: 'Web开发'
        }, {
          value: '选项2',
          label: 'APP开发'
        }, {
          value: '选项3',
          label: 'UI设计'
        }, {
          value: '选项4',
          label: '游戏开发'
        }, {
          value: '选项5',
          label: '程序开发'
        }],
        value: '',
        nam:'',
        sex:'0',
        grade:'',
        phone:'',
        address:'',
        number:'',
        expection:''
    };

  },
  methods:{
    postNumber(){
      let postform={
        email:this.address
      }
      this.$http.post("/sign_up/verification_code/",postform).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        console.log("err",err); 
      })
    },
      submit(){
          let form={
              name:this.nam,
              major:this.grade,
              phone_number:this.phone,
              email:this.address,
              verification_code:this.number,
              department:1,
              expectation:this.expection,
              sex:this.sex,
          }
          this.$http.post("/sign_up/",form).then((res)=>{
              console.log(res);
          }).catch((err)=>{console.log("err",err);})
      }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.button-box {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  /* background-color: aquamarine; */
  margin: auto;
  margin-top: 15px;
}
.sign-background {
  position: relative;
}
.back-img {
  /* position: absolute; */
  width: 100%;
  height: 583px;
}
.sign-up {
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
.join-us {
  color: #007aff;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
}
.join-bottom {
  width: 104px;
  height: 3px;
  background-color: #007aff;
  margin: auto;
  margin-top: 10px;
}
span {
  display: inline-block;
  font-size: 1.5em;
  font-weight: bold;
}
div[class^="line"] {
  display: flex;
  margin-bottom: 40px;
}
.line-first {
  margin-top: 35px;
}
input {
  /* float: right; */
  height: 38px;
  padding-left: 15px;
  /* border: #5da6f3 1.8px solid; */
 border: 1px solid #DCDFE6;
  border-radius: 4px;
}
input[type="radio"] {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: white;
}
input[type="radio"]:checked {
  background-color:  #4192e9;
  border: white 5px solid;
}
label {
  font-size: 1.3em;
  font-weight: bold;
}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color:  #606266;
  opacity: 0.45;
  /* padding-left: 7px; */
}
input:focus {
  outline: none;
  border: #7bb7f7 1px solid;
}
textarea:focus {
  outline: none;
  border: #7bb7f7 1px solid;
}
.adress-border {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 38px;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  background-color: white;
}
.adress-input {
  border: none;
}
.adress-input:focus {
  outline: none;
  border: 0;
}
/* .adress-input:focus .adress-border{
  border-color: #0660c0;
} */
textarea {
  width: 793px;
  height: 100px;
  padding-left: 15px;
  padding-top: 9px;
 border: 1px solid #DCDFE6;
  border-radius: 4px;
}
textarea::-webkit-input-placeholder {
  /* placeholder颜色  */
  color:  #606266;
  opacity: 0.45;
  /* font-size: 1.05em; */
  /* padding-left: 9px; */
  /* padding-top: 9px; */
  /* letter-spacing: 2px; */
}
.submit {
  cursor: pointer;
  padding-left: 8px;
  margin: auto;
  width: 100px;
  height: 40px;
  background-color: #007aff;
  border-radius: 10px;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 1.2em;
  font-weight: bold;
  letter-spacing: 8px;
}
a {
  text-decoration: none;
}
</style>
