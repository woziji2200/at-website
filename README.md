# 一个文档

## 页面配置
共有7个页面，分在两类下。这两类是

admin：`itMemberPage` 管理历史作品和历史成员，`registrantPage` 管理报名用户，`loginPage` 登录到后台页

index：`indexPage` 主页（要展示&发送弹幕，显示&发送评论），`signUpPage` 报名页（报名和查询报名状态），`aboutPage` 关于社团（展示基本概况、部门特色和学习内容），`historyPage` 社团历史（展示社团项目和历史成员）

其中 `loginPage` 后台登录页小组长做，其它的六个页面一个人做一个。

`App.vue` 中只写一个 `<router-view>` 用来显示 `index/index.vue` 和 `admin/admin.vue`。`index.vue` 和 `admin.vue` 要做导航栏和 `<router-view>` ，这个 `<router-view>` 里面显示例如 `indexPage.vue` 等等的二级页面

## 目录规范
```
at-website                         
├─ public                          
│  ├─ favicon.ico                  
│  └─ index.html                   
├─ src                             
│  ├─ assets                       静态资源图片什么的全放在这里
│  │  └─ logo.webp                  
│  ├─ components                   
│  │  └─ HelloWorld.vue            自定义的组件在这里
│  ├─ router                       
│  │  └─ index.js                  
│  ├─ store                        
│  │  └─ index.js                  
│  ├─ views                        
│  │  ├─ admin                     
│  │  │  ├─ itMemberPage           
│  │  │  │  └─ itMemberPage.vue    管理历史成员和历史作品
│  │  │  ├─ loginPage              
│  │  │  │  └─ loginPage.vue       后台登录页
│  │  │  ├─ registrantPage         
│  │  │  │  └─ registrantPage.vue  管理报名用户
│  │  │  └─ admin.vue              显示后台的导航条
│  │  └─ index                     
│  │     ├─ aboutPage              
│  │     │  └─ aboutPage.vue       关于社团
│  │     ├─ historyPage            
│  │     │  └─ historyPage.vue     社团历史成员和项目
│  │     ├─ indexPage              
│  │     │  └─ indexPage.vue       主页（有弹幕和评论
│  │     ├─ signUpPage             
│  │     │  └─ signUpPage.vue      报名和查询页
│  │     └─ index.vue              显示前台的导航条
│  ├─ App.vue                      router-view
│  └─ main.js                      
├─ babel.config.js                 
├─ jsconfig.json                   
├─ package-lock.json               
├─ package.json                    
├─ README.md                       
└─ vue.config.js                   
```

## 页面大体框架

//todo

## UI细节
1. admin后台页的ui不要太复杂，逻辑合理能实现基本功能即可。

2. index主页的UI要简洁美观，可以使用各种动画库。这次安装了element-ui（ https://element.eleme.cn/ ）建议大家多看看这个库里的组件，有的组件用起来非常方便。但是也不要全用这里面的组件！！

3. 页面上的按钮不要用图片作为背景啊啊啊，这样很难做按钮的动画。按钮背景色可以做纯色或者渐变。

4. 前台和后台都需要做PC端和手机端两套UI，这两套UI上的组件要基本一致，但是大小和样式可以进行修改来适应手机UI。不要PC端和手机端相差的太多。

5. 同之前学长发的文档：加入QQ群、报名、查询报名进度放在显眼的地方

6. 大家都可以对UI提出建议，和UI部的同学一起讨论细节设计（包括什么效果实现起来简单又好看

## 代码规范
1. class的命名要能体现这个类是在谁上面的，不要做很抽象的命名

2. 建议大家都装几个vue的语法提示的插件，写完以后按 `Shift+Alt+F` 自动格式化代码（或者右键）

3. console.log在调试完页面以后及时注释掉，上次的小程序最后控制台一堆输出，看着很乱。

4. 这次请求后端用axios，会给大家封装一个axios可以用

## 最后
就先想到这里，有不合理的地方欢迎大家在群里提出。这一周先把项目给初始化好，大家群策群力，共同把这个项目做好!