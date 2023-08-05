<template>
    <div class="show">
        <div class="mainTitle">UI设计</div>
        <div class="title">UI DESIGN</div>
        <div class="big">
            <div class="scroll">
                <p>UI设计部门主要使用Photoshop、Illustrator等软件,对网页、APP等界面进行设计，并负责各类视频制作、剪辑、特效制作的工作。</p>
            </div>
            <div class="scroll1">
                <p>UI设计是什么？这或许是每一个萌新都好奇的问题。（不会就百——）通俗来讲，UI就是决定APP界面、网页等长啥样的部门，重在【设计】（包括人机交互、操作逻辑、界面美观的整体设计）。那就不得不说设计师们与Adobe全家桶等不得不说
                    的故事了。（想听吗？想听就来！报！名！）来UI部门，你可以畅游在Adobe的海洋，你可以体会格式塔心理的美学，你可以c以感受设计之道......（反正来就vans加入我们吧！）</p>
            </div>
        </div>
        <div class="image"><img style="width:100%;height:100%;" src="@/assets/about/ui.webp" alt=""></div>
    </div>
</template>

<script>
export default {

    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 768px) {

    .big {
        height: 55vh;
        overflow: auto;
    }

    .image {
        position: absolute;
        bottom: -0.3vw;
        right: -4.5vw;
        width: 36vw;
    }

    .scroll1,.scroll {
        width: 80%;
        margin-top: 0.9vw;
        font-weight: bold;
        /* margin-left: 5.1vw; */
        font-size: 14px;
        /* line-height: 1.6vw; */
    }


    .mainTitle {
        margin-left: 5.1vw;
        font-size: 20px;
        font-family: Adobe Heiti Std;
        padding-top: 20px;
        font-weight: bold;
        color: #333333;
        height: 3.3951vw;

    }

    .title {
        font-size: 12px;
        margin-left: 5.1vw;
        /* margin-top: 2.15vw; */
        padding-top: 10px;
        margin-top: 19px;
        font-weight: bold;
        color: #333333;
    }

    .show {
        margin-top: 1.45vw;
        overflow: hidden;

        background: rgb(254, 234, 225);
        border-radius: 3.85vw;
    }

    .show {
        width: 61vw;
        height: 70vh;
        margin: 1.45vw auto 0 auto;
    }

    .mainTitle,
    .title,
    .big,
    .scroll,
    .scroll1 {
        margin: 0 auto;
        text-align: center;
    }

    .image {
        display: none;
    }

    p {
        line-height: 20px;
        /* 在页面宽度小于等于768px时调整文字之间的距离 */
    }

}

/*  */
@media (min-width: 769px) {

    .big {
        height: 22vw;
        overflow: auto;

    }

    .image {
        position: absolute;
        bottom: -0.3vw;
        right: -4.5vw;
        width: 36vw;
    }

    .scroll1 {
        width: 31.7vw;
        margin-top: 0.9vw;
        font-weight: bold;
        margin-left: 5.1vw;
        font-size: 1vw;
        line-height: 1.6vw;
    }

    .scroll {
        width: 31.7vw;
        margin-top: 1.3vw;
        margin-left: 5.1vw;
        line-height: 1.6vw;
        font-size: 1vw;
        font-weight: bold;
    }

    .mainTitle {
        margin-left: 5.1vw;
        font-size: 3.5vw;
        font-family: Adobe Heiti Std;
        padding-top: 3.8vw;
        font-weight: bold;
        color: #333333;
        height: 3.3951vw;

    }

    .title {
        font-size: 2vw;
        margin-left: 5.1vw;
        margin-top: 2.15vw;
        font-weight: bold;
        color: #333333;
    }

    .show {
        width: 61vw;
        margin-top: 1.45vw;
        height: 38vw;
        background: rgb(254, 234, 225);
        border-radius: 3.85vw;
    }
}</style>
