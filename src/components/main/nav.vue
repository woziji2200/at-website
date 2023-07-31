<template>
    <div class="nav-part" :class="flag == true ? 'height':' '">
        <div class="left-part">
            <li v-for="(items, key) in  leftPart " :class="items.flag == true ? 'show' : 'disshow'" @click="change(key)">{{
                items.text }}</li>
            <div class="under-line" :style="{ 'left': posi + 'px' }"></div>
            <a style="text-decoration: none;" target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=KxNfhfe7biaEpzqtTXjVQow96HFEO4MM&jump_from=webapi&authKey=ikIe6Oar5HaiRQQoY7Fa4OxzQhn9a17rvFfV6XldbhaTz5Le1dWUILFteuKPdfDU"><li class="join-qq">加入QQ群</li></a>
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
                    // document.getElementsByClassName('text2')[0].scrollIntoView({behavior: 'smooth'});
                    window.scrollTo({
                        top: 1200 * this.fitin,
                        left: 0,
                        behavior: "smooth"
                    });
                    break;
                case 1:
                    window.scrollTo({
                        top: 2900 * this.fitin,
                        left: 0,
                        behavior: "smooth"
                    });
                    // document.getElementsByClassName('about')[0].scrollIntoView({behavior: 'smooth'});

                    break;
                case 2:
                    window.scrollTo({
                        top: 4200 * this.fitin,
                        left: 0,
                        behavior: "smooth"
                    });
                    // document.getElementsByClassName('work')[0].scrollIntoView({behavior: 'smooth'});

                    break;
                case 3:
                    window.scrollTo({
                        top: 5400 * this.fitin,
                        left: 0,
                        behavior: "smooth"
                    });
                    // document.getElementsByClassName('team')[0].scrollIntoView({behavior: 'smooth'});

                    break;
            }

        },
        top() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        },
        scrolling() {
            // 滚动条距文档顶部的距离
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            console.log(scrollTop)
            if (scrollTop >= 690) {
                console.log("header 到了最顶部")
                this.flag=true;
            }
            else{
                this.flag=false;
            }
        },
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
            flag:false,
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
                // console.log(that.fitin)
            })()
        }
        window.addEventListener("scroll", this.scrolling);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.scrolling);
    },
}
</script>

<style scoped>
html{
    scroll-behavior: smooth !important;
}
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
    transition: all 0.4s;
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
    background-color: #007AFF;
}
.height{
    background-color: #FFFFFF;
}
</style>