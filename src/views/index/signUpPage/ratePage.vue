<template>
    <div class="father">
        <!-- <img src="@/assets/sign/组 73.webp" alt=""> -->
        <div class="ratePage">
            <div class="button-box">
                <router-link to="/index">
                    <backPagebutton class="b-button"></backPagebutton>
                </router-link>
            </div>
            <div class="found">
                <div class="number">请输入电话号码或邮箱</div>
                <div class="found2">
                    <input type="text" v-model="phone">
                    <!-- <div class="submit" @click="submit()">查询</div> -->
                    <div class="submit" @click="submit()"><img src="@/assets/sign/右键头.webp" alt=""></div>

                </div>
            </div>
            <div class="rate-box">
                <div class="first-line">
                    <div class="box-one" :style="box1">
                        <span :style="span1">初审</span>
                        <div><img src="@/assets/sign/图像 6.webp" v-if="ifImg1"></div>
                        <div><img src="@/assets/sign/图像 7.webp" v-if="ifImg1 == false"></div>
                        <p :style="p1">01</p>
                    </div>
                    <div class="box-two" :style="box2">
                        <span :style="span2">面试</span>
                        <div><img src="@/assets/sign/图像 5.webp" v-if="ifImg2"></div>
                        <div><img src="@/assets/sign/图像 8.webp" v-if="ifImg2 == false"></div>
                        <p :style="p2">02</p>
                    </div>
                </div>
                <div class="second-line">
                    <div class="box-three" :style="box3">
                        <span :style="span3">笔试</span>
                        <div><img src="@/assets/sign/图像 2.webp" v-if="ifImg3"></div>
                        <div><img src="@/assets/sign/图像 3.webp" v-if="ifImg3 == false"></div>
                        <p :style="p3">03</p>
                    </div>
                    <div class="box-four" :style="box4">
                        <span :style="span4">录取结果</span>
                        <!-- <span style="margin-top:0">结果</span> -->
                        <div><img src="@/assets/sign/图像 4.webp" v-if="ifImg4"></div>
                        <div><img src="@/assets/sign/图像 9.webp" v-if="ifImg4 == false"></div>
                        <p :style="p4">04</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import backPagebutton from "@/components/sign/backPagebutton.vue";
export default {
    name: "ratePage",
    components: {
        backPagebutton,
    },
    data() {
        return {
            phone: '',
            box1: '',
            box2: "",
            box3: '',
            box4: '',
            ifImg1: true,
            ifImg2: true,
            ifImg3: true,
            ifImg4: true,
            span1: '',
            span2: '',
            span3: '',
            span4: '',
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            isSubmit:false
        };
    },
    methods: {
        changeImg1() {
            // this.box1="border-color:#91c2f7;"
            this.span1 = "color:#4CA2FF;"
            this.ifImg1 = false;
            this.p1 = " background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
        },
        changeImg2() {
            // this.box2="border-color:#91c2f7;"
            this.span2 = "color:#4CA2FF;"
            this.ifImg2 = false;
            this.p2 = " background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
        },
        changeImg3() {
            // this.box3="border-color:#91c2f7;"
            this.span3 = "color:#4CA2FF;"
            this.ifImg3 = false;
            this.p3 = " background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
        },
        changeImg4() {
            // this.box4="border-color:#91c2f7;"
            this.span4 = "color:#4CA2FF;"
            this.ifImg4 = false;
            this.p4 = " background-image: -webkit-linear-gradient(bottom,#3194ff, #429bfa, #4CA2FF); "
        },
        back1() {
            this.span1 = " color: #AAAAAA ;"
            this.ifImg1 = true;
            this.p1 = " background-image: -webkit-linear-gradient(bottom, rgb(99, 98, 98), #7a7a7a, rgb(155, 155, 153)); "
        },
        back2() {
            this.span2 = " color: #AAAAAA ;"
            this.ifImg2 = true;
            this.p2 = " background-image: -webkit-linear-gradient(bottom, rgb(99, 98, 98), #7a7a7a, rgb(155, 155, 153)); "
        },
        back3() {
            this.span3 = " color: #AAAAAA ;"
            this.ifImg3 = true;
            this.p3 = " background-image: -webkit-linear-gradient(bottom, rgb(99, 98, 98), #7a7a7a, rgb(155, 155, 153)); "
        },
        back4() {
            this.span4 = " color: #AAAAAA ;"
            this.ifImg4 = true;
            this.p4 = " background-image: -webkit-linear-gradient(bottom, rgb(99, 98, 98), #7a7a7a, rgb(155, 155, 153)); "
        },
        open8() {
            this.$message({
                showClose: true,
                message: '所填信息有错误哦~',
                type: 'error'
            });
        },
        async submit() {
            if(this.isSubmit)return
            else this.isSubmit = true
            let emailExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g
            let phoneExp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/g
            if (!(emailExp.test(this.phone) || phoneExp.test(this.phone))) {
                this.$message({
                    showClose: true,
                    message: '所填信息有错误哦~',
                    type: 'error'
                });
                this.isSubmit = false
                return
            }

            let rateform = {
                string: this.phone,
            };
            await this.$http.get("/v1/api/sign_up/", rateform,
            ).then((res) => {
                console.log("res", res);
                if (res.data.code == 40000) {
                    this.open8();
                    this.back1();
                    this.back2();
                    this.back3();
                    this.back4();
                }

                if (res.data.data.status == 3 || res.data.data.status == 7) {
                    this.changeImg1();
                    this.back2();
                    this.back3();
                    this.back4();
                    this.$message({
                        showClose: true,
                        message: '查询成功',
                        type: 'success'
                    });
                }
                else if (res.data.data.status == 4 || res.data.data.status == 8 || res.data.data.status == 9 || res.data.data.status == 10) {
                    this.changeImg1();
                    this.changeImg2();
                    this.back3();
                    this.back4();
                    this.$message({
                        showClose: true,
                        message: '查询成功',
                        type: 'success'
                    });
                }
                else if (res.data.data.status == 5) {
                    this.changeImg1();
                    this.changeImg2();
                    this.changeImg3();
                    this.changeImg4();
                    this.$message({
                        showClose: true,
                        message: '查询成功',
                        type: 'success'
                    });
                }
                else {
                    this.back1();
                    this.back2();
                    this.back3();
                    this.back4();
                    this.$message({
                        showClose: true,
                        message: '查询成功',
                        type: 'success'
                    });
                }
            }).catch((err) => {
                console.log("err", err);
            });
            this.isSubmit = false
        },
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}

.ratePage {
    background-image: url('@/assets/sign/组 73.webp');
    background-size: 100% 100%;
}

.button-box {
    /* display: flex;
    justify-content: space-between; */
    width: 90vw;
    /* background-color: #91c2f7; */
    margin: auto;
    margin-top: 1vw;
}

.b-button {
    transition: all 0.3s;
}

.b-button:hover {
    transform: scale(1.1);
}

.found {
    display: flex;
    width: 60vw;
    margin-left: 50vw;
    transform: translateX(-50%);
    text-align: center;
}

.found2 {
    display: flex;

}

.number {
    font-size: 2vw;
    font-weight: bold;
    height: 5vw;
    line-height: 5vw;
    margin-right: 3vw;
    color: #4CA2FF;
    /* color: #7a7a7a; */
}

.found input {
    margin-top: 1vw;
    margin-bottom: 1vw;
    padding-left: 1.5vw;
    width: 20vw;
    height: 3vw;
    border-radius: 3vw;
    background-color: #9DCCFF;
    color: white;
    font-weight: bold;
    font-size: 1.5vw;
    opacity: 0.8;
    border: none;
}

.found input:focus {
    outline: none;
}

/* .submit {
  cursor: pointer;
  padding-left: 8px;
  margin: auto;
  width: 5vw;
  height: 2vw;
  background-color: #007aff;
  border-radius:0.6vw;
  color: white;
  text-align: center;
  line-height: 2vw;
  font-size: 1.2vw;
  font-weight: bold;
  letter-spacing: 0.5vw;
  transition: all 0.3s;
} */
.submit {
    margin-top: 1vw;
    margin-left: 3vw;
    position: relative;
    width: 3vw;
    height: 3vw;
    background-color: #9DCCFF;
    border-radius: 50%;
    transition: all 0.3s;
}

.submit img {
    width: 1.5vw;
    height: 1.3vw;
    position: absolute;
    left: 0.8vw;
    top: 0.8vw;
}

.submit:hover {
    transform: scale(1.1);
}

.rate-box {
    display: flex;
    justify-content: space-around;
    width: 90vw;
    /* height:90vh; */
    /* background-color: aquamarine; */
    margin: auto;
    margin-top: 1.2vw;
}

.first-line {
    display: flex;
    justify-content: space-around;
    width: 45vw;
}

.second-line {
    display: flex;
    justify-content: space-around;
    width: 45vw;
}

div[class^="box"] {
    width: 15vw;
    height: 30vw;
    /* border: #dbd8d8 1px solid; */
    border-radius: 3.5vw;
    background-color: white;
    box-shadow: 2px 2px 8px 0 rgb(194, 192, 192);
}

.box-two {
    margin-top: 60px;
}

.box-four {
    margin-top: 60px;
}

p {
    margin-left: 7vw;
    margin-top: 0.01vw;
    font-size: 5vw;
    font-weight: bold;
    /* color: #807e7e; */
    background-image: -webkit-linear-gradient(bottom, rgb(99, 98, 98), #7a7a7a, rgb(155, 155, 153));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

span {
    display: block;
    margin-left: 1.5vw;
    margin-top: 2vw;
    font-size: 2.7vw;
    font-weight: bold;
    color: #AAAAAA;
}

div[class^="box"] img {
    width: 15vw;
    margin-top: 0.4vw;
}

/* .box-four div img{
  margin-top: -8px;
} */
/* @media only screen and (max-width: 767px) {
    .rate-box{
      margin-top: 20px;
      width:70vw;
      display: flex;
      flex-direction: column;
    }
    .first-line{
      justify-content: space-between;
      margin: auto;
    }
    .second-line{
      justify-content: space-between;
      margin: auto;
    }
    .box-two{
      margin-top: 0;
    }
    .box-four{
      margin-top: 0;
    }
    .box-four div img{
      margin-top: -2px;
    }
    div[class^="box"]{
      width: 120px;
      height: 300px;
    }
} */
@media screen and (max-width: 767px) {
    .rate-box {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }

    .first-line {
        width: 80vw;
    }

    .second-line {
        width: 80vw;
    }

    .found {
        width: 80vw;
        flex-direction: column;
    }

    .number {
        font-size: 18px;
    }

    .found2 {
        justify-content: center;
    }

    .found2 input {
        width: 60%;
        height: 25px;
    }

    .submit {
        height: 25px;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .submit img {
        width: 14px;
        height: 14px;
        margin-left: 1px;
    }
}
</style>