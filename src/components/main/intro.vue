<template>
    <div class="contain">
        <div class="about">
            <div class="about-bk"></div>
            <div class="coverabout"></div>
            <div class="about-text">
                <div class="about-hr"></div>
                <div class="about-name">关于我们</div>
                <div class="about-eng">About Us</div>
                <div @click="gotoUrl('/index/about')" class="about-but" >
                    <div>了解更多</div>
                    <div class="but-underl2"></div>
                </div>
            </div>
            <div class="about-part">
                <div class="about-blur"></div>
                <div class="up-roll">
                    <div class="roll-container">
                        <div class="roll-containin" :style="{ 'marginLeft': rollMarg + 'px' }">
                            <img class="roll-img" v-for="items in infoRollImg" :src="items">
                        </div>
                    </div>
                    <div class="rolll" @click="left()"></div>
                    <div class="rollr" @click="right()"></div>
                </div>
                <div class="about-infos">
                    <div class="infos-head">{{ infosHead[index] }}</div>
                    <div class="infos-info">{{ infosInfo[index] }}</div>
                </div>
            </div>
        </div>
        <div class="work">
            <div class="work-part">
                <div class="work-roll">
                </div>
                <div class="wrok-infos">
                    {{ workInfos }}
                </div>
                <div @click="gotoUrl('/index/history')" class="work-button">
                    <div>了解更多</div>
                    <div class="but-underl"></div>
                </div>
            </div>
            <div class="work-text">
                <div class="work-hr"></div>
                <div class="work-name">历史作品</div>
                <div class="work-eng">History</div>
            </div>
        </div>
        <div class="team">
            <div class="team-bk"></div>
            <div class="coverteam"></div>
            <div class="about-text">
                <div class="about-hr"></div>
                <div class="about-name">历史成员</div>
                <div class="about-eng">Our Team</div>
            </div>
            <div class="team-part">
                <div class="left-img"></div>
                <div class="right-text">
                    <div>
                        共同的目标，良好的沟通，<br>
                        共同的价值观和行为规范，<br>
                        都是一个优秀团队不可或缺的，<br>
                        团队精神是一只无形的手，<br>
                        推动每次项目的顺利完成。
                    </div>
                    <div @click="gotoUrl('/index/member')"  class="team-but">
                        <div>了解更多</div>
                        <div class="but-underl2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            index: 0,
            rollMarg: 0,
            infosHead: ["团队文化01", "关于爱特", "团队文化02", "团队文化03"],
            infosInfo: ["爱特一直以凝聚和培养计算机人才为己任,发掘技术潜力,感受合作乐趣,让代码高效执行,让大家更进一步。",
                "爱特工作室成立于2002年,是一个在中国海洋大学信息科学与工程学部领导主持下,以计算机技术人才培养,网络开发为特色的技术性团体。",
                "用创意打磨精巧设计，用智慧实现炫酷交互;用热情呈现高效代码，以交流触碰灵感火花;以创造激发全新想象,用双手创造改变未来。",
                "汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。"
            ],
            infoRollImg: [require("@/assets/img/index/aboutbk.webp"),
            require("@/assets/img/index/aboutbk.webp"),
            require("@/assets/img/index/aboutbk.webp"),
            require("@/assets/img/index/aboutbk.webp")],
            workInfos: " 爱特工作室相信，只有不断提高要求，延迟满足感，持续的学习和成长，才有可能不断进步，因此，爱特每年都会有新的作品产生。",
            Timer: "",
        }
    },
    methods: {
        right() {
            this.index++;
            if (this.index == 4) {
                this.index = 0;
            };
            this.rollMarg = -1087 * this.index;
        },
        left() {
            this.index--;
            if (this.index == -1) {
                this.index = 3;
            };
            this.rollMarg = -1087 * this.index;
        },
        startIN() {
            this.Timer = setInterval(() => {
                this.right();
                // console.log(1);
            }, 3000)
        },
        gotoUrl(path){
            this.$router.push({path})
        }
    },
    mounted() {
        this.startIN();
    },
    onUnmounted() {
        if (this.Timer)
            clearInterval(this.Timer)
        this.Timer = none;
    },
    beforeDestroy() {
        if (this.Timer)
            clearInterval(this.Timer)
        this.Timer = none;
    },
}
</script>

<style scoped>
.contain {
    width: 1920px;
    margin: 0 auto;
    margin-top: -150px;
    overflow: hidden;
}

.about {
    width: 1920px;
    height: 1080px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    overflow: hidden;
}

.about-bk {
    width: 1920px;
    height: 1080px;
    background-image: url(@/assets/img/index/aboutbk.webp);
    background-position: -300px -20px;
    background-repeat: no-repeat;
    background-size: 120%;
    filter: blur(10px);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -11;
}

.coverabout {
    width: 1920px;
    height: 1080px;
    background: #000000;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -10;
}

.about-text {
    width: 368px;
    height: 294px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 120px;
}

.about-hr {
    width: 108px;
    height: 0px;
    opacity: 1;
    border: 6px solid #FFFFFF;
    border-radius: 6px;
    margin-left: -12px;
    background-color: #FFFFFF;
}

.about-name {
    width: 390px;
    height: 106px;
    font-size: 80px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 106px;
    letter-spacing: 16px;
    margin-top: 50px;
}

.about-eng {
    width: 346px;
    height: 52px;
    font-size: 40px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #9DCCFF;
    line-height: 52px;
    letter-spacing: 20px;
    margin-bottom: 20px;
}

.about-part {
    width: 1221px;
    height: 783px;
    margin-right: 120px;
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.about-blur {
    background-color: rgba(114, 110, 110, 0.56);
    filter: blur(5px);
    width: 1221px;
    height: 783px;
    border-radius: 80px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
}

.up-roll {
    width: 1087px;
    height: 439px;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 80px 80px 0px 0px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.about-infos {
    width: 1087px;
    height: 210px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 0px 0px 80px 80px;
}

.infos-head {
    width: 158px;
    height: 40px;
    font-size: 30px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 40px;
    margin-top: 20px;
    margin-left: 40px;
}

.infos-info {
    width: 980px;
    height: 116px;
    font-size: 24px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 24px;
    margin-left: 40px;
    margin-top: 16px;
}

.roll-container {
    position: absolute;
    top: 0px;
    width: 1087px;
    height: 439px;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 80px 80px 0px 0px;
    opacity: 1;
    overflow: hidden;
}

.roll-containin {
    width: 4348px;
    height: 439px;
    transition: 0.3s;
}

.roll-img {
    width: 1087px;
    height: 439px;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 80px 80px 0px 0px;
    opacity: 1;
}

.rolll {
    width: 53px;
    height: 53px;
    background-color: white;
    background-image: url(@/assets/img/index/arrow.webp);
    background-position: center;
    background-size: 30%;
    background-repeat: no-repeat;
    box-shadow: inset 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    margin: 0 39px;
    position: relative;
    z-index: 2;
    transform: rotate(180deg);
    cursor: pointer;
}

.rollr {
    width: 53px;
    height: 53px;
    background-color: white;
    background-image: url(@/assets/img/index/arrow.webp);
    background-position: center;
    background-size: 30%;
    background-repeat: no-repeat;
    box-shadow: inset 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    margin: 0 39px;
    position: relative;
    z-index: 2;
    cursor: pointer;
}

.work {
    width: 2014px;
    height: 1344px;
    border-radius: 0px 0px 0px 0px;
    background-image: url(@/assets/img/index/histoty.webp);
    background-position: -580px center;
    background-size: 135% 125%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.work-part {
    width: 1221px;
    height: 783px;
    background: #55A6FF;
    opacity: 1;
    border-radius: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 120px;
}

.work-roll {
    width: 1064px;
    height: 543px;
    background: #FFFFFF;
    background-image: url(@/assets/img/index/work.webp);
    background-position: center;
    border-radius: 80px 80px 80px;
    margin-top: 42px;
}

.wrok-infos {
    width: 1000px;
    height: 68px;
    font-size: 24px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 28px;
    text-align: center;
    margin-top: 25px;
}

.work-button {
    width: 175px;
    height: 55px;
    background: #FFFFFF;
    box-shadow: 0px 3px 3px 1px rgba(112, 112, 112, 0.16);
    border-radius: 18px 18px 18px 18px;
    opacity: 1;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    line-height: 40px;
    padding-top: 5px;
    cursor: pointer;
    text-decoration: none;
}

.but-underl {
    width: 57px;
    height: 0px;
    opacity: 1;
    border: 2px solid #007AFF;
    border-radius: 1px;
    background-color: #007AFF;
}

.work-text {
    width: 368px;
    height: 209px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 120px;
}

.work-hr {
    width: 108px;
    height: 0px;
    opacity: 1;
    border: 6px solid #55A6FF;
    border-radius: 6px;
    margin-left: -15px;
    background-color: #55A6FF;
}

.work-name {
    width: 390px;
    height: 106px;
    font-size: 80px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #55A6FF;
    line-height: 106px;
    letter-spacing: 16px;
    margin-top: 50px;
}

.work-eng {
    width: 300px;
    height: 52px;
    font-size: 40px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #9DCCFF;
    line-height: 52px;
    letter-spacing: 25px;
}

.team {
    width: 1920px;
    height: 1080px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    overflow: hidden;
}

.team-bk {
    width: 1920px;
    height: 1080px;
    background-image: url(@/assets/img/index/bk1.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    filter: blur(11px);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -11;
}

.coverteam {
    width: 1920px;
    height: 1080px;
    background: #000000;
    opacity: 0.65;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -10;
}

.team-part {
    width: 1221px;
    height: 783px;
    margin-right: 120px;
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left: 5px;
    position: relative;
    background: #FFFFFF;
    position: relative;
}

.left-img {
    width: 785px;
    height: 523px;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    position: absolute;
    top: 120px;
    left: 56px;
    background-image: url(@/assets/img/index/team.webp);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 5;
}

.right-text {
    position: absolute;
    top: 186px;
    right: 20px;
    width: 506px;
    height: 452px;
    font-size: 30px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #4CA2FF;
    line-height: 80px;
    text-align: center;
    z-index: 10;
}

.team-but {
    width: 175px;
    height: 60px;
    background: #007AFF;
    box-shadow: 0px 3px 3px 1px rgba(112, 112, 112, 0.16);
    border-radius: 18px 18px 18px 18px;
    opacity: 1;
    margin: 0 auto;
    font-size: 24px;
    line-height: 40px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    text-decoration: none;
}

.about-but {
    width: 175px;
    height: 60px;
    background: #007AFF;
    box-shadow: 0px 3px 3px 1px rgba(112, 112, 112, 0.16);
    border-radius: 18px 18px 18px 18px;
    opacity: 1;
    margin: 0 auto;
    font-size: 24px;
    line-height: 40px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    text-decoration: none;
}

.but-underl2 {
    width: 57px;
    height: 0px;
    opacity: 1;
    border: 2px solid #FFFFFF;
    border-radius: 2px;
    background-color: #FFFFFF;
}
</style>
