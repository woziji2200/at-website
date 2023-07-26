<template>
    <div class="shell" id="shell">
        <div class="back" @click="gotoUrl()">
            <backPagebutton></backPagebutton>
        </div>
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
                                    <span class="content-main-left-button" v-for="(department,index) in item.member">
                                        <button class="content-main-left-button-1" v-if="index==0">
                                            {{ item.show.department }}
                                            <i class="content-main-left-button-i el-icon-arrow-down"></i>
                                            <i class="content-main-left-button-i2 el-icon-right"></i>
                                        </button>
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
                                        <span class="content-main-right-profile-right-signature">{{ member.signature}}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div style="height: 300px;width: 1px;">

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
                    image: require("@/assets/img/2022.png"),
                    show: [],
                    height: "height: 40px;",
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
                                    image: require('@/assets/member/avatar/2022/maqiying3.jpg'),
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
                                {   name: "时晓天",
                                    image: require('@/assets/member/avatar/2022/shixiaotian.jpg'),
                                    signature: '这个人很懒，什么都没有留下'
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
                    image: require("@/assets/img/2021.png"),
                    show: [],
                    height: "height: 40px;",
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
                    image: require("@/assets/img/2020.png"),
                    show: [],
                    height: "height: 40px;",
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
                                    signature: '过去可知不可空，未来可控不可知——Claude Shannon'
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
                },
                {
                    year: 2019,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "赵艳然",
                                    image: require('@/assets/member/avatar/2019/app11.jpg'),
                                    signature: '努力成长'
                                },
                                {
                                    name: "岳宇轩",
                                    image: require('@/assets/member/avatar/2019/app22.jpg'),
                                    signature: '我们的工作是搬运知识和技能。'
                                },
                                {
                                    name: "钱思航",
                                    image: require('@/assets/member/avatar/2019/app33.jpg'),
                                    signature: '广告位招租'
                                }]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "高可欣",
                                    image: require('@/assets/member/avatar/2019/web11.jpg'),
                                    signature: '-interesting'
                                },                              
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "帅翔宇",
                                    image: require('@/assets/member/avatar/2019/cx11.jpg'),
                                    signature: '生而不有，为而不恃，长而不宰'
                                },
                                {
                                    name: "戴俞成",
                                    image: require('@/assets/member/avatar/2019/cx2.jpg'),
                                    signature: 'undefined'
                                },
                                {
                                    name: "程传奇",
                                    image: require('@/assets/member/avatar/2019/cx33.jpg'),
                                    signature: '“不必每天早睡早起，但要注意锻炼身体”'
                                },
                                {
                                    name: "花如壮",
                                    image: require('@/assets/member/avatar/2019/cx4.jpg'),
                                    signature: '要么孤独，要么庸俗'
                                },
                                ]      
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "陈熠欣",
                                    image: require('@/assets/member/avatar/2019/ui1.jpg'),
                                    signature: '感恩的心 感谢有你'
                                },
                                {
                                    name: "林子靖",
                                    image: require('@/assets/member/avatar/2019/ui2.jpg'),
                                    signature: '“虽千万人吾往矣。”'
                                },
                                {
                                    name: "刘思佳",
                                    image: require('@/assets/member/avatar/2019/ui3.jpeg'),
                                    signature: '……'
                                },
                                {
                                    name: "许胤韬",
                                    image: require('@/assets/member/avatar/2019/ui44.jpg'),
                                    signature: '雄鹿粉丝互删一下'
                                },
                                {
                                    name: "付翔宇",
                                    image: require('@/assets/member/avatar/2019/ui5.jpg'),
                                    signature: '宁静致远'
                                },
                                {
                                    name: "葛畅",
                                    image: require('@/assets/member/avatar/2019/ui6.jpg'),
                                    signature: '好好学习不要摸鱼'
                                },
                                {
                                    name: "浦绍英",
                                    image: require('@/assets/member/avatar/2019/ui77.jpg'),
                                    signature: '弃捐勿复道，努力加餐饭。'
                                },
                               ]
                        },
                        {
                            department: "游戏",
                            member2: [
                                {
                                    name: "陈子骞",
                                    image: require('@/assets/member/avatar/2019/game1.jpg'),
                                    signature: '整点新玩具'
                                },
                                {
                                    name: "张浩宇",
                                    image: require('@/assets/member/avatar/2019/game22.jpg'),
                                    signature: '兴趣是第一动力。'
                                },
                               
                               ]
                        },
                    ]
                },
                {
                    year: 2018,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "田同晓",
                                    image: require('@/assets/member/avatar/2018/app1.jpg'),
                                    signature: 'deadline是第一生产力'
                                },
                                {
                                    name: "马良吉",
                                    image: require('@/assets/member/avatar/2018/app2.jpg'),
                                    signature: '你比你想象的更强大'
                                },
                                {
                                    name: "曾广豪",
                                    image: require('@/assets/member/avatar/2018/app3.jpg'),
                                    signature: '干就完事了'
                                },
                                {
                                    name: "任浩辰",
                                    image: require('@/assets/member/avatar/2018/app4.jpg'),
                                    signature: 'Talk is cheap,show me the code.'
                                },]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "赵有为",
                                    image: require('@/assets/member/avatar/2018/web1.jpg'),
                                    signature: 'Gu?Gu...Gu!'
                                },
                                {
                                    name: "沈世纪",
                                    image: require('@/assets/member/avatar/2018/web2.jpg'),
                                    signature: '。。。咕咕咕？'
                                },
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "蔡宇翔",
                                    image: require('@/assets/member/avatar/2018/cx1.jpg'),
                                    signature: '学计算机不coding，死路一条'
                                },
                                {
                                    name: "刘阳",
                                    image: require('@/assets/member/avatar/2018/cx2.jpg'),
                                    signature: '编(de)程(bug)'
                                },
                                {
                                    name: "慈浩艺",
                                    image: require('@/assets/member/avatar/2018/cx3.jpg'),
                                    signature: 'bug的数量可能与你的勤奋程度成正相关。'
                                },
                                ]      
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "诸彦甫",
                                    image: require('@/assets/member/avatar/2018/ui1.jpeg'),
                                    signature: '……'
                                },
                               ]
                        },
                        {
                            department: "游戏",
                            member2: [
                                {
                                    name: "陈祺龙",
                                    image: require('@/assets/member/avatar/2018/game1.jpg'),
                                    signature: '缘，妙不可言。'
                                },
                                {
                                    name: "张云涛",
                                    image: require('@/assets/member/avatar/2018/game2.jpg'),
                                    signature: 'Coding is not about typing, is about thinking.'
                                },
                               
                               ]
                        },
                    ]
                },
                {
                    year: 2017,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "李林宇",
                                    image: require('@/assets/member/avatar/2017/app1.jpg'),
                                    signature: '现在是过去的未来，亦是未来的过去。'
                                },
                                {
                                    name: "戈晓洋",
                                    image: require('@/assets/member/avatar/2017/app2.jpg'),
                                    signature: '带我，发出萌新的声音'
                                },
                                ]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "陈玉沅",
                                    image: require('@/assets/member/avatar/2017/web1.jpg'),
                                    signature: '面向百度编程'
                                },
                               
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "谭坚铭",
                                    image: require('@/assets/member/avatar/2017/cx1.png'),
                                    signature: '既且，且往观乎？'
                                },
                                {
                                    name: "陈开拓",
                                    image: require('@/assets/member/avatar/2017/cx2.png'),
                                    signature: '睡觉是第一生产力'
                                },
                                {
                                    name: "谢哲勇",
                                    image: require('@/assets/member/avatar/2017/cx3.png'),
                                    signature: '行到水穷处，坐看云起时'
                                },
                                {
                                    name: "陈尊龙",
                                    image: require('@/assets/member/avatar/2017/cx4.jpg'),
                                    signature: '健忘是头秃的前兆——谁说的来着'
                                },
                                ]      
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "浦泽元",
                                    image: require('@/assets/member/avatar/2017/ui1.png'),
                                    signature: 'less is more 少即是多'
                                },
                               ]
                        },
                        {
                            department: "游戏",
                            member2: [
                                {
                                    name: "李隆岩",
                                    image: require('@/assets/member/avatar/2018/game1.jpg'),
                                    signature: '我们每天度过的称之为日常的生活，其实是一个个奇迹的连续也说不定。'
                                },
                              
                               ]
                        },
                    ]
                },
                {
                    year: 2016,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                        {
                            department: "APP",
                            member2: [
                                {
                                    name: "王湘懿",
                                    image: require('@/assets/member/avatar/2016/app1.jpg'),
                                    signature: '腐妹子一只，蛇精病一枚'
                                },
                                {
                                    name: "邓懿康",
                                    image: require('@/assets/member/avatar/2016/app2.jpg'),
                                    signature: '梦想是做个技术宅'
                                },
                                ]
                        },
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "官欣仪",
                                    image: require('@/assets/member/avatar/2016/web1.jpg'),
                                    signature: '扣脚宅√LLer√经常女装√'
                                },
                                {
                                    name: "李凌宇",
                                    image: require('@/assets/member/avatar/2016/web2.jpg'),
                                    signature: '诶，这里有点缺氧'
                                },
                                {
                                    name: "李楚娇",
                                    image: require('@/assets/member/avatar/2016/web3.jpg'),
                                    signature: '热爱生活，热爱技术'
                                },
                                {
                                    name: "钱怡辰",
                                    image: require('@/assets/member/avatar/2016/web4.jpg'),
                                    signature: '日常敲代码吃东西'
                                },
                                {
                                    name: "刘凡莉",
                                    image: require('@/assets/member/avatar/2016/web5.jpg'),
                                    signature: '人生总会熬出来的'
                                },
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "宿天宇",
                                    image: require('@/assets/member/avatar/2016/cx1.jpg'),
                                    signature: 'No pain, no gain'
                                },
                                {
                                    name: "梁颖芳",
                                    image: require('@/assets/member/avatar/2016/cx2.jpg'),
                                    signature: '给缺氧的那位递个氧气瓶'
                                },
                                {
                                    name: "方政",
                                    image: require('@/assets/member/avatar/2016/cx3.jpg'),
                                    signature: '只有流过血的手指才能弹出世间的绝唱.'
                                },
                                {
                                    name: "叶伊凡",
                                    image: require('@/assets/member/avatar/2016/cx4.jpg'),
                                    signature: '请称赞我，高贵冷艳'
                                },
                                ]      
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "于聪颖",
                                    image: require('@/assets/member/avatar/2016/ui1.jpg'),
                                    signature: '性别女，爱好各种adobe家的软件，但不擅长'
                                },
                                {
                                    name: "翟书言",
                                    image: require('@/assets/member/avatar/2016/ui2.jpg'),
                                    signature: '哇这个人为什么这么酷'
                                },
                                {
                                    name: "李宜璟",
                                    image: require('@/assets/member/avatar/2016/ui3.jpg'),
                                    signature: '这个人很懒，神马都没留下…'
                                },
                                {
                                    name: "廖舒祺",
                                    image: require('@/assets/member/avatar/2016/ui4.jpg'),
                                    signature: '额，活泼好动，爱看电影，做运动，旅游，喜欢设计…'
                                },
                               ]
                        },
                       
                    ]
                },
                {
                    year: 2015,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                       
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "李策",
                                    image: require('@/assets/member/avatar/2015/web1.jpg'),
                                    signature: '我不是一个伟大的程序员，我只是一个具有良好习惯的优秀程序员-KentBeck'
                                },
                                {
                                    name: "陶赟",
                                    image: require('@/assets/member/avatar/2015/web2.jpg'),
                                    signature: '大部分情况下，构建程序的过程本质上是对规范调试的过程。——FredBrooks'
                                },
                                {
                                    name: "雷镇宇",
                                    image: require('@/assets/member/avatar/2015/web3.jpg'),
                                    signature: '不听不听，王八念经'
                                },
                               
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "张钦贤",
                                    image: require('@/assets/member/avatar/2015/cx1.jpg'),
                                    signature: '我就是我，是颜色不一样的烟火'
                                },
                               
                                ]      
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "周尊康",
                                    image: require('@/assets/member/avatar/2015/ui1.jpg'),
                                    signature: '直到最后一个用户死去，软件才算完成。——佚名'
                                },
                               
                               ]
                        },
                        {
                            department: "系统维护",
                            member2: [
                                {
                                    name: "陈默涵",
                                    image: require('@/assets/member/avatar/2015/xt1.jpg'),
                                    signature: '计算机科学领域的所有问题都可以通过其他方式间接解决。—David Wheeler'
                                },
                               
                               ]
                        },
                       
                    ]
                },
                {
                    year: 2014,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                       
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "张竣凯",
                                    image: require('@/assets/member/avatar/2014/web1.jpg'),
                                    signature: '质量、速度、廉价，选择其中两个'
                                },
                              
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "申一鸣",
                                    image: require('@/assets/member/avatar/2014/cx1.jpg'),
                                    signature: '好代码本身就是最好的文档—Steve McConnell'
                                },
                                {
                                    name: "李春林",
                                    image: require('@/assets/member/avatar/2014/cx2.jpg'),
                                    signature: '过早的优化是罪恶之源。——Donald Knuth'
                                },
                                {
                                    name: "王恺鹏",
                                    image: require('@/assets/member/avatar/2014/cx3.jpg'),
                                    signature: '—切奇怪的现象都是有原因的——佚名'
                                },
                                {
                                    name: "郑作武",
                                    image: require('@/assets/member/avatar/2014/cx4.jpg'),
                                    signature: '“设计是一个发现问题、而不是发现解决方案的过程”——LeslieChicoine'
                                },
                                {
                                    name: "王晓瑞",
                                    image: require('@/assets/member/avatar/2014/cx5.jpg'),
                                    signature: '诚信自由平等爱国文明诚信民主诚信民主诚信自由敬业爱国富强友善平等友善公正'
                                },
                                ]      
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "成亚男",
                                    image: require('@/assets/member/avatar/2014/ui1.jpg'),
                                    signature: '设计中最难的部分.......是阻止功能。——佚名'
                                },
                               
                               ]
                        },
                        {
                            department: "系统维护",
                            member2: [
                                {
                                    name: "蒙煜明",
                                    image: require('@/assets/member/avatar/2014/xt1.jpg'),
                                    signature: '如果你是房间里最聪明的人，那么你走错房间了。——佚名'
                                },
                               
                               ]
                        },
                       
                    ]
                },
                {
                    year: 2013,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                       
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "何珺",
                                    image: require('@/assets/member/avatar/2013/web1.jpg'),
                                    signature: '测试是来表明bug的存在而不是不存在”———EdsgerDijkstra'
                                },
                                {
                                    name: "刘祯昆",
                                    image: require('@/assets/member/avatar/2013/web2.jpg'),
                                    signature: '你要么要软件质量，要么要指针算法;两者不可兼得。—Bertrand Meyer'
                                },
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "徐永亮",
                                    image: require('@/assets/member/avatar/2013/cx1.jpg'),
                                    signature: '优秀的代码是它自己最好的文档——Steve McConnell'
                                },
                                {
                                    name: "杨旭",
                                    image: require('@/assets/member/avatar/2013/cx2.jpg'),
                                    signature: '优秀的判断力来自经验，但经验来自于错误的判断。——Fred Brooks'
                                },
                                {
                                    name: "张静",
                                    image: require('@/assets/member/avatar/2013/cx3.jpg'),
                                    signature: '简单不先于复杂，而是在复杂之后”——Alan Perlis'
                                },
                               
                                ]      
                        },
                        
                        {
                            department: "系统维护",
                            member2: [
                                {
                                    name: "刘天峰",
                                    image: require('@/assets/member/avatar/2013/xt1.jpg'),
                                    signature: '软件在能够复用前必须先能用。——Ralph Johnson'
                                },
                                {
                                    name: "陶孟旭",
                                    image: require('@/assets/member/avatar/2013/xt2.jpg'),
                                    signature: '最便宜，最快和最可靠的组件是不存在的。——佚名'
                                },
                               ]
                        },
                       
                    ]
                },
                {
                    year: 2012,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                       
                        {
                            department: "Web",
                            member2: [
                                {
                                    name: "林皇",
                                    image: require('@/assets/member/avatar/2012/web1.jpg'),
                                    signature: '一个人在教会电脑之前，别说他真正理解这个东西了。'
                                },
                               
                               ]
                        },
                        {
                            department: "程序",
                            member2: [
                                {
                                    name: "凌霄",
                                    image: require('@/assets/member/avatar/2012/cx1.jpg'),
                                    signature: '当你试图解决—个你不理解的问题时，复杂化就产成了。———Andy Boothe'
                                },
                                {
                                    name: "李一诺",
                                    image: require('@/assets/member/avatar/2012/cx2.jpg'),
                                    signature: '控制复杂性是计算机编程的本质。—— Brian Kernighan'
                                },
                                {
                                    name: "李昱坤",
                                    image: require('@/assets/member/avatar/2012/cx3.jpg'),
                                    signature: '用几个小时来制定计划，可以节省几周的编程时间。——佚名'
                                },
                                {
                                    name: "刘嘉爱",
                                    image: require('@/assets/member/avatar/2012/cx4.jpg'),
                                    signature: '当你选择了一种语言，意味着你还选择了一组技术、一个社区。JoshuaBloch'
                                },
                               
                                ]      
                        },
                        
                        {
                            department: "系统维护",
                            member2: [
                                {
                                    name: "李思源",
                                    image: require('@/assets/member/avatar/2012/xt1.jpg'),
                                    signature: '没有什么代码的执行速度比空代码更快。————Merb 核心原则'
                                },
                               
                               ]
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "罗聿聪",
                                    image: require('@/assets/member/avatar/2012/ui1.jpg'),
                                    signature: '它在我的机器上可以很好运行!——大部分程序员'
                                },
                                {
                                    name: "肖宇恬",
                                    image: require('@/assets/member/avatar/2012/ui2.jpg'),
                                    signature: '复制粘贴是一个设计错误。一-David Parnas'
                                },
                               
                               ]
                        },
                       
                    ]
                },
                {
                    year: 2011,
                    image: require("@/assets/img/2019.png"),
                    show: [],
                    height: "height: 40px;",
                    member: [
                       
                       
                        {
                            department: "系统维护",
                            member2: [
                                {
                                    name: "曹刚",
                                    image: require('@/assets/member/avatar/2011/xt1.jpg'),
                                    signature: '这不是一个 bug，这只是一个未列出来的特性。——匿名'
                                },
                               
                               ]
                        },
                        {
                            department: "UI",
                            member2: [
                                {
                                    name: "张兆业",
                                    image: require('@/assets/member/avatar/2011/ui1.jpg'),
                                    signature: '我不是一个伟大的程序员，我只是一个具有良好习惯的优秀程序员-Kent Beck'
                                },
                               
                               ]
                        },
                       
                    ]
                },
            ]
        }
    },

    mounted() {
        this.activateFirstItem();
        window.addEventListener("scroll", this.handleScroll);
        for (let i in this.years) {
            this.years[i].show = this.years[i].member[0]
        }
    },
    methods: {
        gotoUrl(){
            this.$router.go(-1)
        },
        openMenu(item) {
            item.height = 'height: ' + ((item.member.length+1) * 40) + 'px';
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
                            // let member0 = JSON.stringify(this.years[i].member[0])
                            // this.years[i].member[0]=this.years[i].member[j]
                            // this.years[i].member[j]=JSON.parse(member0)
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

/* .content-right-signature {
   
} */

.content-main {
    display: flex;
}

.content-main-left-button {
    /* margin-top: 10px; */
    display: flex;
    flex-direction: column;
}
.content-main-left-button-1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content-main-left-button-i2{
    position: absolute;
    margin-top: 24px;
    opacity: 0;
    transition: all 0.3s;
}
.content-main-left-button-i{
    margin-top: 3px;
    animation: button-i 1.5s infinite;
    transition: all 0.3s;
}
@keyframes button-i {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(6px);
    }
    100%{
        transform: translateY(0px);
    }
}
.content-main-left-button-1:hover .content-main-left-button-i{
    opacity: 0;
}
.content-main-left-button-1:hover{
    background-color: transparent !important;

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
    font-size: 14px;
    font-weight: 600;
    white-space: pre-line;
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
    /* padding-left: 6px;
    padding-right: 6px; */

}
.content-main-left-border:hover .content-main-left-button-i{
    opacity: 0;
}
.content-main-left-border:hover .content-main-left-button-i2{
    opacity: 1;
}
</style>
  
