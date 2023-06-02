<template>
    <div class="shell" id="shell">
        <router-link class="back" to="/index">
            <backPagebutton></backPagebutton>
        </router-link>
        <!-- <div class="background-white"></div> -->
        <div class="history2">
            <div class="header">
                <h2 class="title">爱特历史成员</h2>
                <h3 class="subtitle">成员简介</h3>
            </div>
            <div class="timeline">
                <div v-for="(item, index) in years" :key="index" class="item">
                    <div class="content">
                        <div class="content-left">
                            <img :src="item.image" alt="" class="img">
                            <h2 class="content-title">{{ item.year }}</h2>
                        </div>

                        <div class="content-main">
                            <div class="content-main-left">
                                <span class="content-main-left-button" v-for="department in item.member">
                                    <button @click="changeDepartment(item.year, department.department)">
                                        {{ department.department }}
                                    </button>
                                </span>
                            </div>
                            <div class="content-main-right">
                                <div class="content-main-right-profile" v-for="member in item.show.member2">
                                    <img class="content-main-right-profile-avatar" :src="member.image" alt="" srcset="">
                                    <div class="content-main-right-profile-right">
                                        <span class="content-main-right-profile-right-name">{{ member.name }}</span>
                                        <span class="content-main-right-profile-right-signature">{{ member.signature}}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import backPagebutton from '@/components/sign/backPagebutton.vue';
export default {
    components: {
        backPagebutton,
    },
    data() {
        return {
            years: [
                {
                    year: 2022,
                    image: require("@/assets/img/12.jpg"),
                    show: [],
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "刘演森",
                                    image: require('@/assets/member/avatar/2022/liuyansen.jpg'),
                                    signature: '这个神秘人什么都没有留下。'
                                },
                               ]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "张世卿",
                                    image: require('@/assets/member/avatar/2022/zhangshiqing.jpg'),
                                    signature:'关注永雏塔菲喵，关注永雏塔菲谢谢喵'
                                },
                                {
                                    name: "冷越",
                                    image: require('@/assets/member/avatar/2022/lengyue.jpg'),
                                    signature: 'aaaa'
                                },
                                {
                                    name: "廉嘉蕊",
                                    image: require('@/assets/member/avatar/2022/lianjiarui.jpg'),
                                    signature: '事了拂衣去，深藏功与名'
                                }]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "路修哲",
                                    image: require('@/assets/member/avatar/2022/luxiuzhe.jpg'),
                                    signature: '哪有什么身不由己，己不由心，身又怎能由己。'
                                },
                                {
                                    name: "方诗颖",
                                    image: require('@/assets/member/avatar/2022/fangshiying.jpg'),
                                    signature: '吃饭！'

                                },
                               ]
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "马琪颖",
                                    image: require('@/assets/member/avatar/2022/maqiying2.png'),
                                    signature: '知足常乐~'
                                },
                                {
                                    name: "陈静",
                                    image: require('@/assets/member/avatar/2022/chenjing.jpg'),
                                    signature: '感情…哈哈哈哈哈哈！感情才是这个世界上最可笑的东西！'
                                },
                                {
                                    name: "曹瑜",
                                    image: require('@/assets/member/avatar/2022/caoyu.jpeg'),
                                    signature: '注意看，这个女孩叫小美'
                                }]
                        },
                        {
                            department: "游戏",
                            member2: [
                                {
                                    name: "潘熙阳",
                                    image: require('@/assets/member/avatar/2022/panxiyang2.jpg'),
                                    signature: '想冲天天'
                                },
                                {
                                    name: "姚茂琪",
                                    image: require('@/assets/member/avatar/2022/yaomaoqi.jpg'),
                                    signature: '呃呃'
                                },
                                {
                                    name: "岳一磊",
                                    image: require('@/assets/member/avatar/2022/yueyilei.jpg'),
                                    signature: '程序员终成大牛'
                                },
                                {   name: "王铭新",
                                    image: require('@/assets/member/avatar/2022/wangmingxin.jpg'),
                                    signature: '你说得对，但是'
                                },
                                {   name: "许其鸿",
                                    image: require('@/assets/member/avatar/2022/xuqihong.jpg'),
                                    signature: '卷不过卷不过'

                                }]
                        },
                    ]
                },
                {
                    year: 2021,
                    image: require("@/assets/img/12.jpg"),
                    show: [],
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "刘彩鑫",
                                    image: require('@/assets/member/avatar/2021/app1.jpeg'),
                                    signature: '心之所向，无问西东'
                                },
                                {
                                    name: "张泽峰",
                                    image: require('@/assets/member/avatar/2021/app2.jpeg'),
                                    signature: '没啥可说的'
                                },
                                {
                                    name: "吴东升",
                                    image: require('@/assets/member/avatar/2021/app3.jpeg'),
                                    signature: '开摆！'
                                }]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "张润宁",
                                    image: require('@/assets/member/avatar/2021/web1.jpeg'),
                                    signature: '禁止摆烂~'
                                },
                                {
                                    name: "汪洋",
                                    image: require('@/assets/member/avatar/2021/web2.jpg'),
                                    signature: '咸鱼翻身||'
                                },
                                {
                                    name: "符谷泰",
                                    image: require('@/assets/member/avatar/2021/web3.jpeg'),
                                    signature: 'bug别来了'
                                }]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "刘襄琪",
                                    image: require('@/assets/member/avatar/2021/cx1.jpeg'),
                                    signature: '阿巴阿巴阿巴'
                                },
                                {
                                    name: "康家辉",
                                    image: require('@/assets/member/avatar/2021/cx2.jpeg'),
                                    signature: '人生苦短，我用Python'
                                },
                                {
                                    name: "唐玉硕",
                                    image: require('@/assets/member/avatar/2021/cx3.jpg'),
                                    signature: 'Programming makes heads bald.'
                                },
                                {
                                    name: "甘海",
                                    image: require('@/assets/member/avatar/2021/cx4.jpg'),
                                    signature: '其作始也简，其将毕也必巨'
                                },
                                {
                                    name: "黄乃煊",
                                    image: require('@/assets/member/avatar/2021/cx5.jpeg'),
                                    signature: 'Change the world by programmmmmm!'
                                },
                                {
                                    name: "刘宇璨",
                                    image: require('@/assets/member/avatar/2021/cx6.jpg'),
                                    signature: '晚点再摆'
                                },
                                {
                                    name: "孟广樾",
                                    image: require('@/assets/member/avatar/2021/cx7.jpeg'),
                                    signature: '好好学习，天天向上！'
                                },
                                {
                                    name: "吴卓衡",
                                    image: require('@/assets/member/avatar/2021/cx8.jpg'),
                                    signature: 'Bug退散！！！'
                                }
                                ]
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "吴文楠",
                                    image: require('@/assets/member/avatar/2021/ui1.jpeg'),
                                    signature: '今天也是困困的一天'
                                },
                               
                                ]
                        },
                        {
                            department: "游戏",
                            member2: [
                                {
                                    name: "刘宇宙",
                                    image: require('@/assets/member/avatar/2021/game1.jpg'),
                                    signature: '你说得对，但是《鬼泣5》是由卡普空自主研发的一款全新动作类冒险游戏。游戏发生在一个被称作「红墓市」的幻想世界，在这里，被斯巴达选中的人将被授予「魔人」，导引恶魔之力。你将扮演一位名为「恶魔猎人」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，阻止魔树侵袭的同时，逐步发掘「V」的真相。'
                                },
                                {
                                    name: "戴立桓",
                                    image: require('@/assets/member/avatar/2021/game2.jpeg'),
                                    signature: '游戏爱好者，不过是手残'
                                },
                                {
                                    name: "安戈新",
                                    image: require('@/assets/member/avatar/2021/game3.jpg'),
                                    signature: '能躺着就不坐着'
                                },
                                {
                                    name: "陈嘉鹏",
                                    image: require('@/assets/member/avatar/2021/game4.jpeg'),
                                    signature: '此广告位长期招租'
                                },
                                {
                                    name: "彭程",
                                    image: require('@/assets/member/avatar/2020/game2.jpeg'),
                                    signature: '智商在线，没有解决不掉的问题'
                                },
                                {
                                    name: "杨飏",
                                    image: require('@/assets/member/avatar/2021/game6.jpg'),
                                    signature: '客观是高枕无忧之人的挡箭牌'
                                },
                                {
                                    name: "邹雨潼",
                                    image: require('@/assets/member/avatar/2021/game7.png'),
                                    signature: '好好学习'
                                },
                                ]
                        },
                    ]
                },
                {
                    year: 2020,
                    image: require("@/assets/img/12.jpg"),
                    show: [],
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "黄博斌",
                                    image: require('@/assets/member/avatar/2020/app1.jpg'),
                                    signature: '心有猛虎，细嗅蔷薇'
                                },
                                {
                                    name: "王梓懿",
                                    image: require('@/assets/member/avatar/2020/app2.jpg'),
                                    signature: '过去可知不可空，未来可控不可知————Claude Shannon'
                                },
                                {
                                    name: "张凯",
                                    image: require('@/assets/member/avatar/2020/app3.jpg'),
                                    signature: '万物皆可卷积'
                                }]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "陈江栋",
                                    image: require('@/assets/member/avatar/2020/web1.jpg'),
                                    signature: '禁止低头'
                                },
                                {
                                    name: "陈李焘",
                                    image: require('@/assets/member/avatar/2020/web2.jpeg'),
                                    signature: 'debug冲冲冲'
                                },
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "刘召",
                                    image: require('@/assets/member/avatar/2020/cx1.jpg'),
                                    signature: '诸棣僧降件焦诸陀摩棣僧钵薤嚰焦劫陀焦伏所蜜嚰咒寂闇喃钵曪愍寂摩曪喃功焦膊诸膊僧锗憩锗呵嚰劫僧燕愍尊闇焦般件即焦慧叶祗膊须焦降薤燕呐嚰者斯潮心罘嚰空焦碍心所伏波如阿如'
                                },
                                {
                                    name: "姚梦迪",
                                    image: require('@/assets/member/avatar/2020/cx2.jpg'),
                                    signature: '别垂头丧气，显矮'
                                },
                                {
                                    name: "杨泽晨",
                                    image: require('@/assets/member/avatar/2020/cx3.jpg'),
                                    signature: '要做人民的先生，先做人民的学生。————毛泽东'
                                },
                                ]      
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "吴慧敏",
                                    image: require('@/assets/member/avatar/2020/ui1.jpg'),
                                    signature: '我们有一部实际存在的普世之法，其目的正是为了避免完全的功利主义。'
                                },
                               ]
                        },
                        {
                            department: "游戏",
                            member2: [
                                {
                                    name: "李昱辉",
                                    image: require('@/assets/member/avatar/2020/game1.jpg'),
                                    signature: '收获很大，必可活用于下一次……'
                                },
                                {
                                    name: "颜慧敏",
                                    image: require('@/assets/member/avatar/2020/game2.jpeg'),
                                    signature: '……'
                                },
                                {
                                    name: "尹嘉豪",
                                    image: require('@/assets/member/avatar/2020/game3.jpg'),
                                    signature: '功不唐捐'
                                },
                               ]
                        },
                    ]
                }
            ],
        };
    },
    mounted() {
        this.activateFirstItem();
        window.addEventListener("scroll", this.handleScroll);
        for (let i in this.years) {
            this.years[i].show = this.years[i].member[0]
        }
    },
    methods: {
        changeDepartment(year_, department_) {
            for (let i in this.years) {
                if (this.years[i].year == year_) {
                    this.years[i].show = this.years[i].member.filter((item) => {
                        if (item.department === department_) {
                            return true;
                        }
                    })[0];
                }
            }

        },
        activateFirstItem() {
            this.$nextTick(() => {
                const firstItem = this.$el.querySelector(".item");
                firstItem.classList.add("item--active");
                this.setBackgroundImage(firstItem.querySelector(".img").getAttribute("src"));
            });
        },
        setBackgroundImage(imageUrl) {
            this.$el.style.backgroundImage = `url(${imageUrl})`;
        },
        handleScroll() {
            const scrollPosition = window.scrollY;
            const items = this.$el.querySelectorAll(".item");
            items.forEach((item, index) => {
                const itemTop = item.offsetTop;
                const itemBottom = itemTop + item.offsetHeight;
                if (index === items.length - 2 && scrollPosition > itemBottom - item.offsetHeight / 2) {
                    this.activateItem(item);
                } else if (scrollPosition <= itemBottom - 10 && scrollPosition >= itemTop) {
                    this.setBackgroundImage(item.querySelector(".img").getAttribute("src"));
                    this.activateItem(item);
                }
            });
        },
        activateItem(item) {
            const activeItem = this.$el.querySelector(".item--active");
            if (activeItem) {
                activeItem.classList.remove("item--active");
            }
            item.classList.add("item--active");
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },

};
</script>
  
<style scoped>

.background-white {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
}

.control {
    display: flex;
    flex-wrap: wrap;
    top: -10vh;
    left: 10vw;
    width: 20vw;
    position: absolute;
}

.up {
    width: 20vw;
    height: 20vw;
}

.down {
    width: 20vw;
    height: 20vw;
}

.unflod {
    position: absolute;
    width: 10vw;
    height: 5vh;
    left: 44.5vw;
    top: 77vh;
}

.flod {
    position: sticky;
    bottom: 5vh;
    width: 10vw;
    height: 5vh;
    left: 44.5vw;
}

.years {
    display: flex;
    position: relative;
}

.number {
    width: 7vw;
    height: 3vw;
    font-size: 3vw;
    font-family: Adobe Heiti Std;
    font-weight: normal;
    color: #0450AC;
    line-height: 3vw;
    margin-left: 26vw;
}

.line {
    background-color: black;
    width: 4vw;
    height: 1vh;
    border: 1px solid #333333;
    margin-top: 4vh;
}

.years>div {
    position: absolute;
    width: 37vw;
    height: 10vh;
    background-color: pink;
    top: 27vh;
    display: flex;
}

.year2022 {
    transform: rotate(-60deg);
}

.year2021 {
    transform: rotate(-30deg);
}

.year2020 {
    transform: rotate(0deg);
}

.year2019 {
    transform: rotate(30deg);
}

.year2018 {
    transform: rotate(60deg);
}

.history {
    position: relative;
}

.history1 {
    position: absolute;
    left: -10vw;
    top: 18vh;
}

.rightPart {
    position: absolute;
    left: 49vw;
}

.historyImg {
    width: 41vw;
    height: 26vh;
    top: 4vh;
}

.workShow {
    top: 33vh;
}

* {
    padding: 0;
    margin: 0;
}

.shell {
    width: 100%;
    position: relative;
    padding: 80px 0;
    transition: 0.3s ease 0s;
    background-attachment: fixed;
    background-size: cover;
}

.shell:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(99, 99, 99, 0.8);
    content: "";
}

.header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
}

.title {
    color: #fff;
    font-size: 46px;
    font-weight: normal;
    margin: 0;
}

.timeline {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 800px;
    position: relative;
}

.content-title {
    font-weight: normal;
    font-size: 66px;
    margin: -10px 0 0 0;
    transition: 0.4s;
    padding: 0 10px;
    box-sizing: border-box;
    color: #fff;
}

.content-desc {
    margin: 0;
    font-size: 15px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    line-height: 25px;
}

.timeline:before {
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    content: "";
    background: rgba(255, 255, 255, 0.07);
}

.item {
    padding: 40px 0;
    opacity: 0.3;
    filter: blur(2px);
    transition: 0.5s;
    box-sizing: border-box;
    width: calc(50% - 40px);
    display: flex;
    position: relative;
    transform: translateY(-80px);
}

.item:before {
    content: attr(data-text);
    letter-spacing: 3px;
    width: 100%;
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    top: 70%;
    margin-top: -5px;
    padding-left: 15px;
    opacity: 0;
    right: calc(-100% - 56px);
    font: 900 20px '';
    letter-spacing: 5px;
}

.item:nth-child(even) {
    align-self: flex-end;
}

.item:nth-child(even):before {
    right: auto;
    text-align: right;
    left: calc(-100% - 56px);
    padding-left: 0;
    border-left: none;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    padding-right: 15px;
}

.item--active {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
}

.item--active:before {
    top: 50%;
    transition: 0.3s all 0.2s;
    opacity: 1;
}

.item--active .content-title {
    margin: -50px 0 20px 0;
}

.img {
    max-width: 100%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
}

.footer {
    padding: 95px 0;
    text-align: center;
}

.footer a {
    color: #999;
    display: inline-block;
}

@media only screen and (max-width: 767px) {
    .item {
        align-self: baseline !important;
        width: 100%;
        padding: 0 30px 150px 80px;
    }

    .item:before {
        left: 10px !important;
        padding: 0 !important;
        top: 50px;
        text-align: center !important;
        width: 60px;
        border: none !important;
    }

    .item:last-child {
        padding-bottom: 40px;
    }

    .content-main {
        flex-direction: column;
    }

    .content-main-left {
        flex-direction: row !important;
    }
}

@media only screen and (max-width: 767px) {
    .timeline:before {
        left: 40px;
    }
}

.content {}

.content-main-right-profile-avatar {
    width: 25%;
    height: 25%;
    border-radius: 50%;
}

.content-main-right-profile {
    display: flex;
    flex-direction: row;
    margin: 20px;
}

.content-main-right-profile-right {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

/* .content-right-signature {
   
} */

.content-main {
    display: flex;
}

.content-main-left-button {
    display: flex;
    flex-direction: column;
}

.content-main-left {
    display: flex;
    flex-direction: column;
}

.content-main-left-button button {
    background-color: rgba(255, 255, 255, 0.2);
    border: solid 1px white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    color: white;
    margin-top: 10px;
    transition: all 0.3s;
}

.content-main-left-button button:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.content-main-right-profile-right-name {
    /* margin-left: 10px; */
    color: white;
    font-size: 20px;
}

.content-main-right-profile-right-signature {
    /* margin-left: ; */
    margin-top: 5px;
    color: rgb(219, 219, 219);
    font-size: 14px;
}
.back{
    top: 20px;
    left: 20px;
    z-index: 99;
    position: absolute;
    width: 100px;
    height: 20px;
    text-decoration: none;
}
</style>
  
