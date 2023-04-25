# 一个文档

## 页面配置
共有7个页面，分在两类下。这两类是

admin：`itMemberPage` 管理历史作品和历史成员，`registrantPage` 管理报名用户，`loginPage` 登录到后台页

index：`indexPage` 主页（要展示&发送弹幕，显示&发送评论），`signUpPage` 报名页（报名和查询报名状态），`aboutPage` 关于社团（展示部门特色和学习内容），`historyPage` 社团历史（展示社团项目和历史成员）

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
│  │  └─ logo.png                  
│  ├─ components                   
│  │  └─ HelloWorld.vue            自定义的组件在这里
│  ├─ router                       
│  │  └─ index.js                  
│  ├─ store                        
│  │  └─ index.js                  
│  ├─ views                        
│  │  ├─ admin                     
│  │  │  ├─ itMemberPage           
│  │  │  │  └─ itMemberPage.vue    
│  │  │  ├─ loginPage              
│  │  │  │  └─ loginPage.vue       
│  │  │  ├─ registrantPage         
│  │  │  │  └─ registrantPage.vue  
│  │  │  └─ admin.vue              
│  │  └─ index                     
│  │     ├─ aboutPage              
│  │     │  └─ aboutPage.vue       
│  │     ├─ historyPage            
│  │     │  └─ historyPage.vue     
│  │     ├─ indexPage              
│  │     │  └─ indexPage.vue       
│  │     ├─ signUpPage             
│  │     │  └─ signUpPage.vue      
│  │     └─ index.vue              
│  ├─ App.vue                      
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
admin后台页的ui不要太复杂，逻辑合理能实现基本功能即可。

index主页的UI要简洁美观，可以使用各种动画库。这次安装了element-ui（ https://element.eleme.cn/ ）建议大家多看看这个库里的组件，有的组件用起来非常方便。但是也不要全用这里面的组件！！

页面上的按钮不要用图片作为背景啊啊啊，这样很难做按钮的动画。按钮背景色做纯色或者渐变也行。



## 命名