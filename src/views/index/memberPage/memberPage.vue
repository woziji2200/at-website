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
                                <span :style="item.height" @mouseenter="openMenu(item)" @mouseleave="closeMenu(item)"
                                    class="content-main-left-border">
                                    <span class="content-main-left-button" v-for="department in item.member">
                                        <button @click="changeDepartment(item.year, department.department)">
                                            {{ department.department }}
                                        </button>
                                    </span>
                                </span>
                            </div>
                            <div class="content-main-right">
                                <div class="content-main-right-profile" v-for="member in item.show.member2">
                                    <img class="content-main-right-profile-avatar" :src="member.image" alt="" srcset="">
                                    <div class="content-main-right-profile-right">
                                        <span class="content-main-right-profile-right-name">{{ member.name }}</span>
                                        <span class="content-main-right-profile-right-signature">{{ member.signature
                                        }}</span>
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
                    height: "height: 40px;",
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "姓名app",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "姓名web",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "姓名程序",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "姓名UI",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                        {
                            department: "游戏",
                            member2: [
                                {
                                    name: "姓名游戏",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                    ]
                },
                {
                    year: 2021,
                    image: require("@/assets/img/12.jpg"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "姓名app",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "姓名web",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "姓名程序",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                    ]
                },
                {
                    year: 2020,
                    image: require("@/assets/img/12.jpg"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "姓名app",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "姓名web",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "姓名程序",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                },
                                {
                                    name: "姓名",
                                    image: require('@/assets/member/photo.jpg'),
                                    signature: '哈哈哈哈哈哈哈哈哈'
                                }]
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
        openMenu(item) {
            item.height = 'height: ' + (item.member.length * 40) + 'px';
        },
        closeMenu(item) {
            item.height = 'height: 40px';
        },
        changeDepartment(year_, department_) {
            for (let i in this.years) {
                if (this.years[i].year == year_) {
                    for (let j in this.years[i].member){
                        if(this.years[i].member[j].department==department_){
                            this.years[i].show = this.years[i].member[j]
                            let member0 = JSON.stringify(this.years[i].member[0])
                            this.years[i].member[0]=this.years[i].member[j]
                            this.years[i].member[j]=JSON.parse(member0)
                        }
                    }

                    // this.years[i].show = this.years[i].member.filter((item) => {
                    //     if (item.department === department_) {
                    //         return true;
                    //     }
                    // })[0];

                    return
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
        /* border: solid 1px white; */
        margin-top: 10px;
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

.content-right-signature {}

.content-main {
    display: flex;
}

.content-main-left-button {
    /* margin-top: 10px; */
    display: flex;
    flex-direction: column;
}

.content-main-left {
    display: flex;
    flex-direction: column;
}

.content-main-left-button button {
    background-color: rgba(255, 255, 255, 0);
    /* border: solid 1px white; */
    border: none;
    /* border-radius: 50%; */
    width: 60px;
    height: 40px;
    color: white;
    /* margin-top: 3px; */
    transition: all 0.3s;
    font-size: 20px;
    font-weight: 600;
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
    font-size: 16px;
}

.back {
    top: 20px;
    left: 20px;
    z-index: 99;
    position: absolute;
    width: 100px;
    height: 20px;
    text-decoration: none;
}

.content-main-left-border {
    border: solid 1px white;
    padding-top: 13px;
    padding-bottom: 13px;
    border-radius: 40px;
    overflow: hidden;
    transition: all 0.3s;
}
</style>
  
