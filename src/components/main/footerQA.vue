<template>
    <div class="que-ans">
        <div class="q-a">
            <div class="headline">
                <div class="line-qa"></div>
                <div class="headlin-ch">问答区</div>
                <div class="headlin-en">Q & A</div>
            </div>
            <div class="main">
                <!-- <div id="waline" class="waline"></div> -->
                <div class="main-qa">
                    <div class="main-qa-circle" style="top: -75%;"></div>
                    <div class="main-qa-circle" style="bottom: -75%;"></div>
                    <span class="main-qa1-title">让我来问问你！</span>
                    <div class="main-qa1-q">
                        <div class="main-qa1-q-left">昵称</div>
                        <div class="main-qa1-q-right">
                            <input v-model="sendComment.nick" type="text" name="" id="" placeholder="很重要的，不能忘记的名字......你是？">
                        </div>
                    </div>
                    <div class="main-qa1-q">
                        <div class="main-qa1-q-left">邮箱</div>
                        <div class="main-qa1-q-right">
                            <input v-model="sendComment.mail" type="text" name="" id="" placeholder="你的邮箱可以加油吗？">
                        </div>
                    </div>
                    <div class="main-qa1-q">
                        <div class="main-qa1-q-left">问题</div>
                        <div class="main-qa1-q-right">
                            <input v-model="sendComment.question" type="text" name="" id="" placeholder="让我来考考你......不许百度！">
                        </div>
                    </div>
                    <div class="main-qa1-q-question">
                        <textarea v-model="sendComment.comment" maxlength="100" name="" id="" cols="30" rows="10"
                            placeholder="提点建议..."></textarea>
                    </div>
                    <div class="main-qa1-q-length">{{ commentLength }} / 100</div>
                    <div class="main-qa1-q-send" @click="send()" :disabled="isSend">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1690281899675"
                            class="" viewBox="0 0 1024 1024" version="1.1" p-id="2288" width="100%" height="100%">
                            <path
                                d="M510.3616 90.4704c-232.0896 0-420.864 188.8256-420.864 420.864 0 232.0896 188.8256 420.864 420.864 420.864s420.864-188.8256 420.864-420.864-188.7744-420.864-420.864-420.864z m0 800.8192c-209.5104 0-379.904-170.4448-379.904-379.904 0-209.5104 170.4448-379.904 379.904-379.904 209.5104 0 379.904 170.4448 379.904 379.904 0 209.4592-170.4448 379.904-379.904 379.904z"
                                p-id="2289" />
                            <path
                                d="M259.4816 439.8592l422.5024-103.5776c20.4288-5.0176 37.5296 15.9744 28.4672 34.9696L522.24 766.4128c-9.728 20.3776-39.3728 18.432-46.2848-3.072l-48.0256-149.4016a25.06752 25.06752 0 0 1 5.2224-24.3712l82.1248-91.0336c5.0176-5.5808-1.6896-13.9264-8.192-10.0864l-108.9536 63.488a24.9856 24.9856 0 0 1-24.6272 0.3072L253.3888 485.9392c-19.9168-11.008-15.9744-40.704 6.0928-46.08z"
                                p-id="2290" />
                        </svg>
                    </div>
                </div>
                <div class="main-qa">
                    <div class="main-qa-circle" style="bottom: -75%;"></div>
                    <span class="main-qa1-title" style="color: #007AFF;">“历史遗留问题”</span>
                    <div class="main-qa-list" style="overflow-x: hidden; overflow-y: auto;">
                        <div v-show="!comments || !comments.data || comments.data.length==0" class="main-qa-list-loading">暂时没有提问</div>
                        <div class="main-qa-list-1" v-for="i in comments.data">
                            <div class="main-qa-list-1-ask">
                                <img :src="i.avatar" alt="">
                                <div class="main-qa-list-1-ask-title">
                                    <span class="main-qa-list-1-ask-title-1">{{ i.nick }}：</span>
                                    <span class="main-qa-list-1-ask-title-2">{{ i.orig.split('|')[0] }}</span>
                                </div>
                                <div class="main-qa-list-1-ask-svg" :style="i.style" @click="showComments(i)">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        t="1690288045906" class="" viewBox="0 0 1024 1024" version="1.1" p-id="4186"
                                        width="100%" height="100%">
                                        <path
                                            d="M275.2 6.4c6.4 0 19.2 0 25.6 6.4l473.6 473.6c6.4 6.4 6.4 12.8 6.4 25.6 0 6.4-6.4 19.2-6.4 25.6l-473.6 473.6c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8L704 512 256 64C243.2 51.2 243.2 32 256 19.2c0-12.8 12.8-12.8 19.2-12.8z"
                                            fill="" p-id="4187" />
                                    </svg>
                                </div>
                            </div>
                            <div class="main-qa-list-1-answer" v-show="i.show">
                                <div v-if="i.children.length == 0" class="main-qa-list-1-answer-1">暂时没有回答哦</div>
                                <div class="main-qa-list-1-answer-2" v-for="j in i.children">
                                    <img :src="j.avatar" alt="">
                                    <div class="main-qa-list-1-answer-2-content">
                                        <span style="text-decoration: underline;"> [{{ j.label }}] {{ j.nick }}：</span>
                                        {{ j.orig }}&nbsp;&nbsp;
                                        <span style="font-size: 14px;text-decoration: underline;">[{{ new
                                            Date(j.time).getFullYear() }}.{{ new Date(j.time).getMonth()+1 }}.{{ new
        Date(j.time).getDate() }}]</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-qa-title2">再问问别的吧QwQ</div>
                </div>

            </div>
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
// import { init } from '@waline/client/full';
// import '@waline/client/dist/waline.css';
export default {
    data() {
        return {
            comments: {
                // "page": 1,
                // "totalPages": 1,
                // "pageSize": 10,
                // "count": 3,
                // "data": [
                //     {
                //         "nick": "funny233",
                //         "status": "approved",
                //         "link": "funny233.xyz",
                //         "comment": "<p>sdfsdf</p>\n",
                //         "user_id": "646ec7c738ad8b7c0f3f41ec",
                //         "objectId": "647af68438ad8b7c0f42cb4d",
                //         "browser": "Edge113.0",
                //         "os": "Windows 11",
                //         "type": "administrator",
                //         "label": "滑稽果",
                //         "avatar": "https://seccdn.libravatar.org/avatar/6060839af792e4091080b8c307abfa26",
                //         "orig": "sdfsdf",
                //         "addr": "",
                //         "like": 0,
                //         "time": 1685780100310,
                //         "children": [{
                //             "nick": "funny233",
                //             "status": "approved",
                //             "link": "funny233.xyz",
                //             "comment": "<p>sdfsdf</p>\n",
                //             "user_id": "646ec7c738ad8b7c0f3f41ec",
                //             "objectId": "647af68438ad8b7c0f42cb4d",
                //             "browser": "Edge113.0",
                //             "os": "Windows 11",
                //             "type": "administrator",
                //             "label": "滑稽果",
                //             "avatar": "https://seccdn.libravatar.org/avatar/6060839af792e4091080b8c307abfa26",
                //             "orig": "sdfsdf",
                //             "addr": "",
                //             "like": 0,
                //             "time": 1685780100310,
                //             "children": []
                //         }, {
                //             "nick": "funny233",
                //             "status": "approved",
                //             "link": "funny233.xyz",
                //             "comment": "<p>sdfsdf</p>\n",
                //             "user_id": "646ec7c738ad8b7c0f3f41ec",
                //             "objectId": "647af68438ad8b7c0f42cb4d",
                //             "browser": "Edge113.0",
                //             "os": "Windows 11",
                //             "type": "administrator",
                //             "label": "滑稽果",
                //             "avatar": "https://seccdn.libravatar.org/avatar/6060839af792e4091080b8c307abfa26",
                //             "orig": "sdfsdf啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                //             "addr": "",
                //             "like": 0,
                //             "time": 1685780100310,
                //             "children": []
                //         }]
                //     },
                //     {
                //         "nick": "funny233",
                //         "status": "approved",
                //         "link": "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                //         "comment": "<p>sdfsdf</p>\n",
                //         "user_id": "646ec7c738ad8b7c0f3f41ec",
                //         "objectId": "647af67b38ad8b7c0f42cb4b",
                //         "browser": "Edge113.0",
                //         "os": "Windows 11",
                //         "type": "administrator",
                //         "label": "滑稽果",
                //         "avatar": "https://seccdn.libravatar.org/avatar/6060839af792e4091080b8c307abfa26",
                //         "orig": "sdfsdf",
                //         "addr": "",
                //         "like": 0,
                //         "time": 1685780091678,
                //         "children": []
                //     },
                //     {
                //         "nick": "funny233",
                //         "status": "approved",
                //         "link": "funny233.xyz",
                //         "comment": "<p>6666666</p>\n",
                //         "user_id": "646ec7c738ad8b7c0f3f41ec",
                //         "objectId": "647af63cf742a330ac02be48",
                //         "browser": "Edge113.0",
                //         "os": "Windows 11",
                //         "type": "administrator",
                //         "label": "滑稽果",
                //         "avatar": "https://seccdn.libravatar.org/avatar/6060839af792e4091080b8c307abfa26",
                //         "orig": "6666666\n",
                //         "addr": "",
                //         "like": 0,
                //         "time": 1685780028639,
                //         "children": []
                //     }
                // ]
            },
            sendComment: {
                comment: "",
                question: "",
                mail: "",
                nick: "",
                url: "/index"
            },
            commentLength: 0,
            isSend: false
        }
    },
    methods: {
        async send() {
            if(!this.sendComment.comment || !this.sendComment.question || !this.sendComment.mail|| !this.sendComment.nick){
                this.$message({ message: "请填写完成所有内容", type: 'error' });
                return
            }
            if (this.isSend) return
            else {this.isSend = true;}
            let params={
                comment:this.sendComment.question+'|'+this.sendComment.comment,
                mail:this.sendComment.mail,
                nick:this.sendComment.nick,
                url:this.sendComment.url
            }
            let msg = await this.$http.post("/api/comment/", params)
            console.log(msg);
            if (msg.data.errno == 0) {
                this.$message({ message: '发送成功，审核后将显示', type: 'success' });
            }else{
                this.$message({ message: msg.data.errmsg, type: 'error' });
            }
            this.isSend=false
        },
        top() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        },
        showComments(obj) {
            obj.show = !obj.show
            obj.style = obj.show ? "transform: rotate(90deg);" : "transform: rotate(0deg);"
        },
        async getComments(){
            let a=await this.$http.get("/api/comment/", { path: "/index" })
            console.log('333',a.data.data);
            for(let i in a.data.data.data){
                a.data.data.data[i].show=false
            }
            this.comments=a.data.data
        }
    },
    watch: {
        sendComment: {
            deep: true,
            handler: function (newVal, oldVal) {
                this.commentLength = newVal.comment.length
            }
        }
    },
    async mounted() {
     this.getComments()
        // console.log(await this.$http.get("/api/comment/", { path: "/index" }))
        // init({
        //     el: '#waline',
        //     serverURL: "https://at-website-waline.vercel.app/",
        //     emoji: ["//unpkg.com/@waline/emojis@1.1.0/bilibili"],
        //     search: false,
        //     avatar: "hide",
        // });
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
    height: 198px;
    background-image: url(@/assets/img/index/icon.png);
    background-position: center;
    margin-top: 200px;
    margin-bottom: 47px;
    cursor: pointer;
}

.footer-part {
    width: 1920px;
    height: 400px;
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

.wl-panel {
    width: 757px !important;
    height: 825px !important;
    background: #FFFFFF !important;
    border-radius: 80px 80px 80px 80px !important;
    opacity: 1;
}

.main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}

.main-qa {
    width: 40%;
    height: 80%;
    background-color: #FFFFFF;
    border-radius: 10%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

}

.main-qa-circle {
    width: 180%;
    height: 95%;
    background-color: #4CA2FF;
    border-radius: 50%;
    position: absolute;
    left: -40%;
    /* z-index: 0; */
    /* top: -75%; */
    /* bottom: -75%; */
}

.main-qa1-title {
    z-index: 10;
    position: relative;
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    /* width: 100%; */
    /* display: inline-block; */
    margin-top: 6%;
    text-align: center;
}

.main-qa1-q {
    width: 80%;
    height: 10%;
    background-color: #fff;
    /* box-shadow: 0px 0px 15px #bcbcbc; */
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    z-index: 10;
    border-radius: 30px;
    display: flex;
    overflow: hidden;
    margin-top: 4%;
}

.main-qa1-q-left {
    width: 18%;
    height: 100%;
    background-color: #4CA2FF;
    color: white;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}

.main-qa1-q-right {
    width: 82%;
    height: 100%;
    background-color: #ffffff;
    color: white;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
}

.main-qa1-q-right input {
    width: 90%;
    height: 100%;
    font-size: 22px;
    color: #007AFF;
    border: none;
    outline: none;
}

/* #9DCCFF */
.main-qa1-q-right input::-webkit-input-placeholder {
    color: #9DCCFF;
}

.main-qa1-q-question {
    width: 80%;
    height: 33%;
    position: relative;
    z-index: 10;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    margin-top: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-qa1-q-question textarea {
    width: 80%;
    height: 70%;
    font-size: 22px;
    font-family: 'Microsoft YaHei-Bold';
    color: #007AFF;
    resize: none;
    border: none;
    outline: none;
}

.main-qa1-q-question textarea::-webkit-input-placeholder {
    color: #9DCCFF;
}

.main-qa1-q-send {
    width: 90px;
    height: 90px;
    position: absolute;
    z-index: 13;
    right: 10%;
    bottom: 10%;
    fill: #4CA2FF;
    transition: all 0.3s;
}
.main-qa1-q-send[disabled]{
    fill: #707070 !important;
}
.main-qa1-q-send:hover {
    fill: #007AFF;
}

.main-qa1-q-length {
    color: #707070;
    font-size: 20px;
    position: absolute;
    z-index: 13;
    bottom: 11.5%;
    right: 25%;
}

.main-qa-list {
    width: 80%;
    height: 66%;
    /* background-color: #c9c9c9; */
    position: relative;
    z-index: 10;
    margin-top: 5%;
}

.main-qa-list-1-ask {
    display: flex;
    width: 100%;
}

.main-qa-list-1-ask img {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    border-radius: 50%;
    width: 60px;
    height: 60px;
}

.main-qa-list-1-ask-title {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    width: calc(80% - 60px);
    background-color: white;
    border-radius: 30px;
    height: 60px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 24px;
    color: #4CA2FF;
    font-weight: 600;
}

.main-qa-list-1-ask-title-1 {
    text-decoration: underline;
}

.main-qa-list-1-ask-title-2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.main-qa-list-1-ask-svg svg {
    fill: #4CA2FF;
    width: 30px;
    height: 30px;
}

.main-qa-list-1-ask-svg {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    margin-left: 10px;
    transition: all 0.3s;
}

.main-qa-list-1 {
    margin-bottom: 2%;
}

.main-qa-list-1-answer {
    box-shadow: inset 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    margin-left: 70px;
    margin-top: 10px;
    width: calc(100% - 130px);
    background-color: #fff;
    padding: 30px;
    border-radius: 30px;
}

.main-qa-list-1-answer-1 {
    color: #4CA2FF;
    font-size: 18px;
    font-weight: 600;
}

.main-qa-list-1-answer-2 img {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.main-qa-list-1-answer-2 {
    display: flex;
    margin-bottom: 10px;
    /* margin-left: 10px; */
}

.main-qa-list-1-answer-2-content {
    color: #4CA2FF;
    font-size: 22px;
    font-weight: 600;
    padding: 6px;
    margin-left: 5px;
}
.main-qa-title2{
    color: #fff;
    font-size: 36px;
    position: relative;
    z-index: 12;
    font-weight: 600;
    margin-top: 40px;
}
.main-qa-list-loading{
    position: relative;
    z-index: 13;
    font-size: 28px;
    color: #4CA2FF;
    margin: 0 auto;
    text-align: center;
    font-weight: 600;
}
</style>
