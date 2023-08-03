<template>
    <div class="blink" :style="{ 'height': maxHT + 'px', 'width': windowWidth + 'px' }">
        <div class="navs" :style="{ 'transform': ' scale(' + fitin + ')', 'width': windowWidth + 'px' }">
            <nav-page> </nav-page>
        </div>
        <div class="all" :style="{ 'transform': ' scale(' + fitin + ')', 'width': windowWidth + 'px' }">
            <div class="part-main">
                <div class="bk"></div>
                <div class="info-index">
                    <div class="info-bk"></div>
                    <div class="headline">爱特工作室</div>
                    <div class="engn">IT STUDIO</div>
                    <div class="info-text">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学部领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。
                        <br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自成立以来，爱特以发现人才，培养人才，输送人才为最终目的，现已拥有UI设计、Web开发、程序设计、
                        Android开发、游戏设计五大类方向，具有一定规模的技术团队。优秀的团队文化与良好的技术氛围使爱特能够脱颖而出，经过多年的发展，现已成为海大网络技术的中坚力量!
                    </div>
                </div>
                <div class="buts">
                    <div v-for="(item, key) in butss" :class="item.class" @click="but(key)">{{ item.text }}</div>
                </div>
            </div>
            <part-two></part-two>
            <intro></intro>
            <footer-q-a ref="qaa"></footer-q-a>
        </div>
    </div>
</template>
<script >
import navPage from '@/components/main/nav.vue'
import partTwo from '@/components/main/parttwo.vue'
import intro from '@/components/main/intro.vue'
import footerQA from '@/components/main/footerQA.vue'
import { ref } from 'vue';
import '@waline/client/dist/waline.css';

export default {
    components: {
        navPage,
        partTwo,
        intro,
        footerQA,
    },
    data() {
        return {
            links: [{
                'name': '首页',
                'path': '/index'
            }, {
                'name': '加入爱特',
                'path': '/index/signUp'
            }, {
                'name': '爱特历史',
                'path': '/index/history'
            }, {
                'name': '爱特成员',
                'path': '/index/member'
            }, {
                'name': '关于爱特',
                'path': '/index/about'
            }],
            butss: [{ class: 'one', text: "问答区" },
            { class: 'two', text: "加入我们" },
            { class: 'one', text: "进度查询" }],
            fitin: 1,
            windowWidth: 0,
            windowHeight: 0,
            maxHT: 8350,
        }
    },
    methods: {
        but(n) {
            switch (n) {
                case 0:
                    var element = this.$refs.qaa.$el;
                    var rect = element.getBoundingClientRect();
                    var distance = rect.top + window.pageYOffset;
                    window.scrollTo({
                        top: distance,
                        left: 0,
                        behavior: "smooth"
                    });
                    break;
                case 1:
                    this.$router.push({ path: "index/signUp" });
                    break;
                case 2:
                    this.$router.push({ path: "index/signUp/rate" });
                    break;
            }
        },
        async getComments() {
            let comments = await this.$http.get()
        }
    },
    mounted() {
        document.title = '爱特工作室'
        var that = this;
        this.windowWidth = document.body.clientWidth
        this.windowHeight = document.body.clientHeight
        this.fitin = this.windowWidth / 1920;
        // console.log(this.fitin)
        // console.log(this.maxHT)
        this.maxHT = this.fitin * 8350;
        window.onresize = () => {
            return (() => {
                //窗口缩放自动获取页面宽高
                window.fullWidth = document.documentElement.clientWidth;
                window.fullHeight = document.documentElement.clientHeight;
                that.windowWidth = window.fullWidth; //宽
                that.windowHeight = window.fullHeight; //高
                that.fitin = that.windowWidth / 1920;
                that.maxHT = that.fitin * 8350;
                // console.log(that.fitin)
            })()
        }
    },


}
</script>

<style scoped>
.blink {
    overflow-y: hidden;
    position: relative;
    top: 0;
}

.all {
    transform-origin: 0 0;
    margin: 0 auto;
    margin-top: -90px;
}

.navs {
    transform-origin: 0 0;
    position: fixed;
    top: 0px;
    z-index: 20;
}

.part-main {
    /* width: 100vw;
    height:128vh; */
    width: 1920px;
    height: 1280px;
    margin: 0 auto;
    padding-top: 107px;
}

.bk {
    width: 1920px;
    height: 1280px;
    position: absolute;
    top: 0;
    z-index: -10;
    background-image: url(@/assets/img/index/bk1.png);
    background-size: 1920px 1280px;
    background-position: center;
    background-repeat: no-repeat;
}

.info-index {
    position: relative;
    width: 837px;
    height: 533px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 40px 40px 40px 40px;
    opacity: 1;
    margin: 0 auto;
    margin-top: 107px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-bk {
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/img/index/bk1.png);
    background-size: 100%;
    background-position: -28.1% -16%;
    background-repeat: no-repeat;
    filter: blur(15px);
}

.headline {
    width: 600px;
    height: 158px;
    font-size: 120px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    line-height: 158px;
    margin-top: 35px;
    text-align: center;
}

.engn {
    width: 447px;
    height: 88px;
    background: #007AFF;
    border-radius: 40px 40px 40px 40px;
    opacity: 1;
    font-size: 60px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    line-height: 88px;
    margin-top: 37px;
}

.info-text {
    width: 680px;
    height: 97px;
    font-size: 18px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    margin-top: 23px;
}

.buts {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    margin-top: 124px;
    height: 108px;
    width: 1130px;
    cursor: pointer;
}

.one {
    width: 310px;
    height: 108px;
    background: #FFFFFF;
    border-radius: 40px 40px 40px 40px;
    font-size: 51px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    text-align: center;
    line-height: 108px;
}

.two {
    width: 310px;
    height: 108px;
    background: #007AFF;
    border-radius: 40px 40px 40px 40px;
    font-size: 51px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    line-height: 108px;
}

.one:hover {
    width: 310px;
    height: 108px;
    background: #007AFF;
    border-radius: 40px 40px 40px 40px;
    font-size: 51px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    line-height: 108px;
}

.two:hover {
    width: 310px;
    height: 108px;
    background: #FFFFFF;
    border-radius: 40px 40px 40px 40px;
    font-size: 51px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    text-align: center;
    line-height: 108px;
}
</style>
