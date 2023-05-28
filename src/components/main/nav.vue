<template>
    <div class="nav-part">
        <div class="left-part">
            <li v-for="(items, key) in  leftPart " :class="items.flag == true ? 'show' : 'disshow'" @click="change(key)">{{
                items.text }}</li>
            <div class="under-line" :style="{ 'left': posi + 'px' }"></div>
            <li class="join-qq">加入QQ群</li>
        </div>
        <div class="right-part" @click="top()">IT STUDIO</div>
    </div>
</template>
<script>
export default {
    methods: {
        change(n) {
            for (var i = 0; i < 4; i++) {
                this.leftPart[i].flag = false;
            }
            this.leftPart[n * 1].flag = true;
            this.posi = 95 + n * 162;
            switch (n) {
                case 0:
                    window.scrollTo({
                        top: 1200*this.fitin,
                        left: 0,
                        behavior: "smooth"
                    });
                    break;
                case 1:
                    window.scrollTo({
                        top: 3000*this.fitin,
                        left: 0,
                        behavior: "smooth"
                    });
                    break;
                case 2:
                    window.scrollTo({
                        top: 4200*this.fitin,
                        left: 0,
                        behavior: "smooth"
                    });
                    break;
                case 3:
                    window.scrollTo({
                        top: 5400*this.fitin,
                        left: 0,
                        behavior: "smooth"
                    });
                    break;
            }

        },
        top() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    },
    data() {
        return {
            leftPart: [{ flag: true, text: "部门介绍" },
            { flag: false, text: "关于我们" },
            { flag: false, text: "历史作品" },
            { flag: false, text: "历史成员" }],
            posi: 95,
            fitin: 1,
            windowWidth: 0,
            windowHeight: 0,

        }
    },
    mounted() {
        var that = this;
        this.windowWidth = document.body.clientWidth
        this.windowHeight = document.body.clientHeight
        this.fitin = this.windowWidth / 1920;
        console.log(this.fitin)
        window.onresize = () => {
            return (() => {
                //窗口缩放自动获取页面宽高
                window.fullWidth = document.documentElement.clientWidth;
                window.fullHeight = document.documentElement.clientHeight;
                that.windowWidth = window.fullWidth; //宽
                that.windowHeight = window.fullHeight; //高
                that.fitin = that.windowWidth / 1920;
                console.log(that.fitin)
            })()
        }
    },
}
</script>

<style>
.nav-part {
    width: 1920px;
    margin: 0 auto;
    height: 90px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    position: sticky;
    top: 1px;
    z-index: 20;
}

.left-part {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 75px;
    list-style: none;
    width: 820px;
}

.show {
    width: 130px;
    height: 52px;
    background: #FFFFFF;
    box-shadow: 0px 3px 3px 1px rgba(112, 112, 112, 0.16);
    border-radius: 18px 18px 18px 18px;
    opacity: 1;
    text-align: center;
    line-height: 52px;
    font-size: 24px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    margin-right: 45px;
    cursor: pointer;

}

.disshow {
    width: 130px;
    height: 52px;
    background: transparent;
    opacity: 1;
    text-align: center;
    line-height: 52px;
    font-size: 24px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    margin-right: 45px;
    cursor: pointer;

}

.join-qq {
    width: 144px;
    height: 48px;
    background: #007AFF;
    border-radius: 18px 18px 18px 18px;
    opacity: 1;
    text-align: center;
    line-height: 48px;
    font-size: 24px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    margin-right: 45px;
    cursor: pointer;
}

.right-part {
    width: 271px;
    height: 69px;
    font-size: 52px;
    margin-right: 120px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 69px;
    -webkit-text-stroke: 1px #007AFF;
    background-color: transparent;
    cursor: pointer;
}

.under-line {
    position: absolute;
    width: 72px;
    height: 0px;
    border: 2px solid #007AFF;
    border-radius: 2px;
    top: 60px;
}
</style>