<template>
    <div class="que-ans">
        <div class="q-a">
            <div class="headline">
                <div class="line-qa"></div>
                <div class="headlin-ch">问答区</div>
                <div class="headlin-en">Q & A</div>
            </div>
            <div class="main"></div>
        </div>
        <div class="footer">
            <div class="icon" @click="top()"></div>
            <div class="footer-part">
                <div class="footer-headline">IT STUDIO</div>
                <div class="footer-text"> 中国海洋大学 | 信息科学与工程学院B505 | @ITStudio All Rights Reserved | 备案号:鲁ICP备18019527号-2
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {

        }
    },
    methods: {
        top() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }
    },
}
</script>

<style scoped>
.que-ans {
    width: 1920px;
    height: 2081px;
    background-image: url(@/assets/img/index/partbk.png);
    background-size: cover;
    box-shadow: inset 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    opacity: 1;
    margin: 0 auto;
}

.q-a {
    width: 1920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.headline {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.line-qa {
    width: 108px;
    height: 0px;
    opacity: 1;
    border: 6px solid #007AFF;
    border-radius: 6px;
    margin-top: 70px;
    background-color: #007AFF;
}

.headlin-ch {
    width: 272px;
    height: 80px;
    font-size: 80px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #007AFF;
    line-height: 80px;
    letter-spacing: 10px;
    text-align: center;
    margin-top: 50px;
}

.headlin-en {
    width: 199px;
    height: 50px;
    font-size: 40px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #9DCCFF;
    line-height: 70px;
    letter-spacing: 15px;
    text-align: center;
}

.main {
    width: 1840px;
    height: 992px;
    background: #9DCCFF;
    box-shadow: inset 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 80px 80px 80px 80px;
    opacity: 1;
    border: 1px solid #707070;
    margin-top: 66px;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.icon {
    width: 183px;
    height:198px;
    background-image: url(@/assets/img/index/icon.png);
    background-position: center;
    margin-top: 200px;
    margin-bottom: 47px;
    cursor: pointer;
}

.footer-part {
    width: 1920px;
    height:400px;
    background-image: url(@/assets/img/index/footer.png);
    background-position: center -20px;
    background-size: 140%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.footer-headline {
    width: 386px;
    height: 79px;
    font-size: 60px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 60px;
    letter-spacing: 5px;
    margin-top: 150px;
}

.footer-text {
    width: 1205px;
    height: 31px;
    font-size: 24px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 30px;
}
</style>
