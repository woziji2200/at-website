<template>
    <div id="app">
        <div class="button-box">
            <router-link to="/index">
                <backPagebutton class="b-button"></backPagebutton>
            </router-link>
            <router-link to="/index/signUp/rate">
                <ratePagebutton class="r-button"></ratePagebutton>
            </router-link>
        </div>
        <div class="sign-background">
            <img src="@/assets/sign/baomingye.webp" class="back-img" />
            <div class="sign-up">
                <div class="join-us">JOIN US!</div>
                <div class="join-bottom"></div>

                <!-- <el-row>
                    <el-col :span="24">
                        <el-form>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="姓名" style="width: 40%;">
                                        <el-input v-model="nam"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="姓名" style="width: 40%;">
                                        <el-input v-model="nam"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                        </el-form>
                    </el-col>
                </el-row> -->





                <div class="line-first">
                    <div class="name line" style="display: flex; align-items: center">
                        <span style="margin-right: 1.6vw">姓名:</span>
                        <input id="name" type="text" v-model="nam" />
                    </div>
                    <div class="sex line" style=" display: flex; align-items: center">
                        <span style="margin-right: 1.6vw">性别:</span>
                        <input type="radio" id="man" name="sex" value="0" checked="checked" v-model="sex" class="man"
                            style="padding:0;cursor: pointer;" />
                        <label for="man" class="label1" style="margin-right: 1.5vw; color: rgb(56, 55, 55)">男</label>
                        <input type="radio" id="woman" name="sex" value="1" v-model="sex"
                            style="padding:0;cursor: pointer;" />
                        <label for="woman" class="label1" style="color: rgb(56, 55, 55)">女</label>
                    </div>
                    <div class="grade line" style=" display: flex; align-items: center">
                        <span style="margin-right: 1.6vw">年级专业:</span>
                        <input type="text" placeholder="例：23级计算机类" v-model="grade" />
                    </div>
                </div>
                <div class="line-second">
                    <div class="phone line" style="display: flex; align-items: center">
                        <span style="margin-right: 1.6vw">电话号码:</span>
                        <input type="text" v-model="phone" />
                    </div>
                    <div class="web line" style=" display: flex; align-items: center">
                        <span @click="getdepart()">意向部门:</span>
                        <el-select class="el-select" v-model="value" placeholder="请选择你要加入的部门">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>

                    </div>
                </div>
                <div class="line-third">
                    <div class="adress line" style="display: flex; align-items: center">
                        <span style="margin-right: 1.6vw">邮箱地址:</span>
                        <input type="text" v-model="address" />
                    </div>
                    <div class="number line" style=" display: flex; align-items: center">
                        <span style="margin-right: 1.6vw">验证码:</span>
                        <div class="adress-border">
                            <input type="text" placeholder="验证码将发至您的邮箱" v-model="number" class="adress-input" />
                            <span class="send" @click="postNumber()" style="
                                color: #007aff;
                                /* font-size: 5px; */
                                margin-right: 5px;
                                /* letter-spacing: 0.34vw; */
                                cursor: pointer;
                            ">
                                {{ content }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="line-forth line">
                    <div class="dream" style="display: flex; align-items: space-between">
                        <span style="margin-right: 1.6vw">你的期待:</span>
                        <textarea name="" maxlength="100" id="" cols="30" rows="10"
                            placeholder="为什么想加入爱特?你想在爱特学到什么?（最多200字）" v-model="expection"></textarea>
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
                value: '1',
                label: 'APP开发'
            }, {
                value: '2',
                label: 'Web开发'
            }, {
                value: '3',
                label: '程序开发'
            }, {
                value: '4',
                label: '游戏开发'
            }, {
                value: '5',
                label: 'UI设计'
            }],
            value: '',
            nam: '',
            sex: '0',
            grade: '',
            phone: '',
            address: '',
            number: '',
            expection: '',
            isSendEmail: false,
            isSubmit: false,
            content: '发送',
            totalTime: 60,
            canClick: true
        };
    },
    methods: {
        // getDepartment(){
        //   this.$http.get("/v1/api/department/",{

        //   }).then((res)=>{
        //     console.log("res",res);
        //   }).catch((err)=>{
        //     console.log("err",err);
        //   })
        // },
        getdepart() {
            console.log(this.value)
        },
        async postNumber() {
            if (this.isSendEmail) return
            else this.isSendEmail = true
            if (!this.canClick) return
            this.canClick = false
            if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g.test(this.address)) {
                this.$message({
                    showClose: true,
                    message: '请输入正确的邮箱格式',
                    type: 'error'
                });
                return
            }
            let postform = {
                email: this.address,
            }
            let res = await this.$http.post("/v1/api/sign_up/verification_code/", postform)
            console.log(res);
            if (res.data.code == 44036) {
                this.open9();
            } else if (res.data.code == 20000) {
                console.log("发送成功");


                this.open11();
                this.content = this.totalTime + 's'
                let clock = window.setInterval(() => {
                    this.totalTime--
                    this.content = this.totalTime + 's'
                    if (this.totalTime < 0) {
                        window.clearInterval(clock)
                        this.content = '发送'
                        this.totalTime = 60
                        this.canClick = true
                    }
                }, 1000)
                this.isSendEmail = false

            } else if (res.data.code == 43032) {
                this.$message({
                    showClose: true,
                    message: '该邮箱已存在',
                    type: 'error'
                });
            } else if (res.data.code == 44033) {
                this.$message({
                    showClose: true,
                    message: '请勿频繁发送验证码',
                    type: 'error'
                });
            } else {
                this.$message({
                    showClose: true,
                    message: res.data.msg,
                    type: 'error'
                });
            }
            this.isSendEmail = false

            this.isSendEmail = false
        },
        async submit() {
            if (this.isSubmit) return
            else this.isSubmit = true
            if (!(this.grade && this.nam && this.phone && this.address && this.number && this.value && this.expection)) {
                this.$message({
                    showClose: true,
                    message: '请填写完所有信息~',
                    type: 'error'
                });
                return
            }
            let form = {
                name: this.nam,
                major: this.grade,
                phone_number: this.phone,
                email: this.address,
                verification_code: this.number,
                department: this.value,
                expectation: this.expection,
                sex: this.sex,
            }
            await this.$http.post("/v1/api/sign_up/", form).then((res) => {
                console.log(res);
                console.log(form.department);
                if (res.data.code == 20000) {
                    this.open6()
                }
                else if (res.data.code == 43032) {
                    this.open7()
                }
                else if (res.data.code == 45031) {
                    this.open10();
                }
                else {
                    this.open8()
                }
            }).catch((err) => { console.log("err", err); })
            this.isSubmit = false
        },
        open6() {
            this.$message({
                showClose: true,
                message: '提交成功',
                type: 'success'
            });
        },
        open7() {
            this.$message({
                showClose: true,
                message: '该邮箱已注册',
                type: 'warning'
            });
        },
        open8() {
            this.$message({
                showClose: true,
                message: '所填信息不完整或者有错误哦~',
                type: 'error'
            });
        },
        open9() {
            this.$message({
                showClose: true,
                message: '请输入正确格式的邮箱哦~',
                type: 'warning'
            });
        },
        open10() {
            this.$message({
                showClose: true,
                message: '邮箱验证码错误',
                type: 'error'
            });
        },
        open11() {
            this.$message({
                showClose: true,
                message: '发送成功',
                type: 'success'
            });
        },
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
    width: 90vw;
    /* background-color: aquamarine; */
    margin: auto;
    margin-top: 1vw;
}

.b-button {
    transition: all 0.3s;
}

.b-button:hover {
    transform: scale(1.1);
}

.r-button {
    transition: all 0.3s;
}

.r-button:hover {
    transform: scale(1.1);
}

.sign-background {
    position: relative;
}

.back-img {
    /* position: absolute; */
    width: 100%;
    height: 42.81vw;
    height: 584.5px;
}

.sign-up {
    position: absolute;
    top: 3%;
    left: 14%;
    /* display: flex;
    justify-content: center; */
    /* background-color: rgb(56, 55, 55); */
    width: 70vw;
    /* height: 500px; */
    /* margin: auto; */
    z-index: 100;
}

.join-us {
    color: #007aff;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
}

.join-bottom {
    width: 14vw;
    height: 0.4vh;
    background-color: #007aff;
    margin: auto;
    margin-top: 0.67vw;
}

span {
    display: inline-block;
    font-size: 1.8vw;
    font-weight: bold;
}

@media only screen and (max-width: 767px) {
    span {
        font-size: 16px;
    }

    .back-img {
        height: 100% !important;
        margin-top: 10px !important;
    }

    .sign-up {
        top: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 90vw;
    }
}

div[class^="line"] {
    display: flex;
    margin-bottom: 2.9vw;
}

.sex {
    margin-left: 5vw;
}

.grade {
    margin-left: 4.2vw;
}

.grade input {
    width: 14vw;
}

.web {
    margin-left: 5vw;
}

.web span {
    margin-right: 1.6vw;
}

.phone input {
    width: 21vw;
}

.number {
    margin-left: 6.9vw;
}

.adress input {
    width: 21vw;
}

.adress-border span {
    transition: all 0.3s;
}

.adress-border span:active {
    transform: scale(0.8);
}
.send{
    font-size: 5px !important;
    margin-right: 10px;
}
@media only screen and (max-width: 767px) {
    div[class^="line"] {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        /* margin-left: 40px; */
    }
    .send{
        font-size: 12px !important;
        white-space: nowrap;
        margin-right: 8px;
    }
    .adress-border span {
        font-size: 0.8vw;
        /* width: 30%; */
    }

    .name {
        margin-bottom: 10px;
    }

    .name span {
        margin-left: 22px;
    }

    .name input {
        height: 38px;
    }

    .sex {
        margin-left: 0;
        margin-bottom: 10px;
    }

    .sex span {
        margin-left: 22px;
    }

    .sex input[type="radio"] {
        width: 20px;
        /* height: 38px; */
        height: 20px;
        margin-left: 97px;
    }

    .sex input[type="radio"]:checked {
        border: white 4px solid;
    }

    .sex label {
        font-size: 18px
    }

    .grade {
        margin-left: 0;
        /* margin-bottom: 10px; */
    }

    .grade input {
        margin-left: 20px;
        /* width: 303px; */
        width: 70%;

        height: 38px;
    }

    .phone {
        margin-bottom: 10px;
    }

    .phone input {
        margin-left: 20px;
        /* width: 303px; */
        width: 70%;
        height: 38px;
    }

    .web {
        margin-left: 0;
        /* margin-bottom: 10px; */
    }

    .web span {
        margin-right: 32px;
    }

    .adress {
        margin-bottom: 10px;
    }

    .adress input {
        margin-left: 20px;
        /* width: 303px; */
        width: 70%;
        height: 38px;
    }

    .number {
        margin-left: 0;
    }

    .number span {
        margin-left: 11px;
    }

    .number input {
        width: 188px;
        height: 38px;
    }

    .number .adress-border {
        margin-left: 32px;
        /* width: 310px; */
        width: calc(70% + 7px);

        height: 38px;
    }

    .dream {
        margin-bottom: 10px;
    }

    .dream span {
        width: 150px;
    }

    .dream textarea {
        margin-left: -27px;
        /* width: 294px; */
        width: calc(70% - 10px);

        height: 80px;
    }

    input::-webkit-input-placeholder {
        padding-left: 0px !important;
        /* font-size: 1.5em; */
    }
    .line-first span,.line-second span,.line-third span{
        width: 20% !important;
        white-space: nowrap !important;
        text-align: left;
        margin-left: 8px;
    }
    .line{
        display: flex !important;
        justify-content: space-between !important;
        width: 100%;
        position: relative !important;
    }
    .line-first input[type=text],.line-second input[type=text],.line-third input[type=text]{
        width: 80% !important;
        padding-left: 10px;
    }
    .adress-border{
        width: 80% !important;
    }
    .web .el-select{
        width: calc(80% + 10px) !important;
    }

    .dream span{
        margin-left: 8px !important;
    }
    .dream textarea{
        width: calc(80% + 10px) !important;
        padding: 7px !important;
    }
    input[type="radio"]{
        width: 20px !important;
        height: 20px !important;
        margin-left: -10px !important;
    }
    .label1{
        margin-left: -60px !important;
    }
    /* .line-second span{
        width: 20% !important;
        white-space: nowrap !important;
    }
    .line-third span{
        width: 20% !important;
        white-space: nowrap !important;
    } */
    #name{
        width: 67% !important;
    }
}

.line-first {
    margin-top: 2vw;
}

input {
    /* float: right; */
    width: 12vw;
    height: 5.9vh;
    padding-left: 1vw;
    /* border: #5da6f3 1.8px solid; */
    border: 1px solid #DCDFE6;
    border-radius: 4px;
}

input[type="radio"] {
    -webkit-appearance: none;
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 0.67vw;
    border-radius: 50%;
    background-color: white;
}

input[type="radio"]:checked {
    background-color: #4192e9;
    border: white 0.38vw solid;
}

label {
    font-size: 1.8vw;
    font-weight: bold;
}

input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #606266;
    opacity: 0.45;
    font-size: 14px;
    /* padding-left: 7px; */
}

input:focus {
    outline: none;
    border: #7bb7f7 1px solid;
}

input:hover {
    border: #c8c8ca 1px solid;
}

textarea:focus {
    outline: none;
    border: #7bb7f7 1px solid;
}

.adress-border {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 22vw;
    height: 5.9vh;
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

.adress-input:hover {
    border: none;
}

/* .adress-input:hover div {
  border:#c8c8ca 1px solid ;
} */
/* .adress-input:focus .adress-border{
  border-color: #0660c0;
} */
textarea {
    width: 57.5vw;
    height: 100px;
    padding-left: 15px;
    padding-top: 9px;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
}

textarea:hover {
    border: #c8c8ca 1px solid
}

textarea::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #606266;
    opacity: 0.45;
    font-size: 14px;
    font-family: '微软雅黑';
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
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 8px;
    transition: all 0.2s;
}

.submit:hover {
    transform: scale(1.1);
    box-shadow: 0 1px 20px 0 rgb(194, 192, 192);
}

a {
    text-decoration: none;
}

.back-img {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw;
    height: 100%;
    z-index: -1;
    object-fit: cover;
}
</style>
