<h1 align="center">Welcome to vue-xuadmin 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D%206.0.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D%203.0.0-blue.svg" />
  <a href="https://github.com/Nirongxu/vue-xuAdmin/blob/master/README.md">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/Nirongxu/vue-xuAdmin/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> vue + element-ui 无限级菜单 权限管理 后台模板

### 🏠 [Homepage](https://nirongxu.github.io/vue-xuAdmin/dist/)
## Author

👤 **NiRongxu**

* Github: [@NiRongxu](https://github.com/NiRongxu)
* QQ: 595485548
* QQ群: 157216616 (之前加我的人太多了，好多问题都是重复的，所以建个群大家互相沟通交流方便点，但是建的有点晚，错过了好多人所以群里人有点少)
* email: 595485548@qq.com


## Prerequisites

- node >= 6.0.0
- npm >= 3.0.0


## 更新日志
### v1.2.5
1. 增加DllPlugin优化构建速度,编译速度更快 yarn startdll
2. 增加build版本控制
3. 增加 刷新浏览器会保持继续显示当前组件,不会使系统跳转到首页
### v1.2.1
1. 升级webpack 4.0, 做了一些性能优化,编译时间从13秒优化到2-3秒,速度最高提升90%(第一次启动时间是正常时间,启动后Ctrl+c 关闭项目重新启动速度会变快)
2. 封装了axios 请求
3. 增加了一些全局公共方法/utils/global,和一些工具函数/utils/index,封装了表单验证/utils/rules
4. 项目结构做了一些调整
5. 重做了404页面
6. 修复了几个小bug
7. 增加build打包结果分析 yarn analyz



## 小提示
> 这个框架权限是由前端控制的,如果不需要这个模式,可以看我另外一个全栈CMS项目,后台使用的是node框架egg.js+mysql,那个的权限是由后台返回有权限的路由,前端拿到路由后和前端路由表做筛选,得出最终的路由表生成菜单,好处是角色和角色所拥有的权限路由是动态的后台可随时编辑配置的,两种模式按需使用
![image.png](https://i.loli.net/2020/05/13/67n2YkZwxLBFDMy.png)

项目地址: https://github.com/Nirongxu/nodePlatform
## 1. vue-xuAdmin 后台模板简介
> 这个权限管理就是为了方便,跟系统安全真的不沾边，只是根据后台返回的角色信息来生成他可以看见的菜单和按钮，显示菜单的方法是根据权限删除掉路由表里没有权限的路由，然后再动态添加，原本包含没有访问权限的原路由表只要打开页面运行代码就已经不存在了，并且404页面除了过滤掉项目没有的路由外，同时每次的路由跳转都会鉴权。如果你知道了没有权限的路由试着强行跳转会因为没有权限直接会跳转404。
**就算通过查看代码或者其他方法获取全部路由，并且绕过404，花了这么大精力，，那你也看不到新世界的大门，因为所有数据都是通过后台请求返回来的，你没权限后台不会给你数据的，也不会让你去操作，，除非后台不验证权限，只要有人请求我就给你所有数据，，，，**

项目预览地址：
- github: https://nirongxu.github.io/vue-xuAdmin/dist/
- 国内gitee: http://nirongxu.gitee.io/vue-xuadmin/#/login

vue-xuAdmin是基于vue2.0全家桶 + element-ui 开发的一个后台模板，实现了无限级菜单，页面、按钮级别的权限管理，为了减少前后端的沟通成本，页面、按钮级别的权限验证和动态路由表的存储校验，也都由前端完成，这样前端新建页面或者删除页面都不需要告诉后台去增加删除路由表

![enter description here](https://i.loli.net/2019/12/24/Ocs7n45uaMDhKef.png)
![enter description here](https://i.loli.net/2019/12/24/8dZaITtQOY7uNbF.png)
![enter description here](https://i.loli.net/2018/12/12/5c10a2f90e38a.jpg)
![enter description here](https://i.loli.net/2018/12/16/5c153f4998458.jpg)
![enter description here](https://i.loli.net/2018/12/16/5c153fe516daf.jpg)
![enter description here](https://i.loli.net/2018/12/12/5c102c115c130.jpg)
## 2. 准备工作
-开发环境
- node.js v8.0+
- webpack v3
- git

-技术栈
- ES6+
- vue v2.5+
- vue-router
- vuex
- axios
- scss
- element-ui v2.4+

## 3. 实现功能
```
- 登录、退出
+ 基于token
	- 状态拦截、404页面
	- 动态加载路由
	- 页面、按钮指令权限管理
	- 无限级菜单
- 封装vue-i18n@8.x国际化组件
- 系统全屏化
- 菜单收缩
- icon 图标
+ tab标签导航
	- 右击快捷功能
- 表格拖拽排序
- 封装了 axios
- 封装了全局方法,和一些工具函数
- 编辑器
	- markdown（编辑器目前只封装了这一个组件，重写了markdown编辑和预览的皮肤，实时获取：markdown，html，json 三种格式文本）
- Echarts 组件封装

封装了一些element-ui没有但是常用的组件，正常需要的功能element-ui里面都有，可以直接复制

```
## 4.开发使用
### 4.1开发
```
# 克隆项目
git clone https://github.com/Nirongxu/vue-xuAdmin.git

# 推荐使用 yarn, 安装依赖基本上一次过,npm 经常会卡在node-sass,如果npm安装node-sass 失败,单独多安装几次应该就可以了: npm i node-sass -D

# 设置淘宝镜像
yarn config set registry https://registry.npm.taobao.org/
or
npm config set registry https://registry.npm.taobao.org

# 安装依赖 (如果安装失败就多安装几次，实在不行就换淘宝镜像)
yarn  or  yarn install
or
npm install

# 启动项目 (已经配置好启动服务自动打开浏览器，如果没自动打开按照控制台输出的地址自己打开)
# 如果eslint语法检查报错，直接关掉eslint语法检查
yarn dev
or
npm run dev

# 启动单元测试
yarn  unit
or
npm run unit

# 启动端到端测试
yarn e2e
or
 npm run e2e

# 启动编译打包 生产环境
yarn build
or
 npm run build

# 启动编译打包 并生成打包结果 生产环境
yarn analyz
or
npm run analyz

# 抽取分离公共依赖
yarn startdll
or
npm run startdll
```

### 4.2使用
在开发和使用之前请务必阅读 `vue-xuAdmin`的使用介绍，详细介绍了框架的开发和使用教程
- [Vue2.0 + ElementUI 手写权限管理系统后台模板（一）——简述](https://juejin.im/post/5c15332be51d4513ea6ed291)
- [Vue2.0 + ElementUI 手写权限管理系统后台模板（二）——权限管理](https://juejin.im/post/5c1552a65188250850604bb0)
- [Vue2.0 + ElementUI 手写权限管理系统后台模板（三）——页面搭建](https://juejin.im/post/5c156ae16fb9a049e660250c)
- [Vue2.0 + ElementUI 手写权限管理系统后台模板（四）——组件结尾](https://juejin.im/post/5c1605e76fb9a049b41c5cb0)

## 5. 项目结构说明
```
|------------build          构建脚本目录

    |---------build.js             生产环境构建脚本

    |---------check-version.js 检查node、npm等版本

    |---------dev-client.js     开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新

    |---------dev-server.js     运行本地开发服务器

    |---------utils.js               构建相关工具方法

    |---------vebpack.base.conf.js     webpack基本配置

    |---------vebpack.dev.conf.js       webpack开发环境配置

    |---------vebpack.prod.conf.js     webpack生产环境配置   

|------------config           项目配置

    |---------dev.env.js           开发环境变量

    |---------index.js              项目配置文件

    |---------prod.env.js         生产环境变量

|------------dist             使用生产环境配置构建项目，构建好的目录放到该目录

|------------node_modules         node的依赖包

|------------src
    |---------api                 封装了 axios

    |---------assets                 资源目录，这里的资源会被webpack构建

    |---------components        		组件目录

    |---------directive        		    自定义指令

    |---------i18n					        多语言国际化

    |---------router

    |-----------index.js               前端路由

    |---------utils					全局方法和工具函数

    |---------views					页面文件

    |---------vuex					全局状态管理目录

    |--------App.vue                	根组件

    |--------main.js                 入口js文件

    |--------markData.js                 markdown 初始数据

|------------static             纯静态资源，不会被webpack构建

|------------index.html         入口页面

|------------test        		单元测试

|------------.babelrc            ES6语法编译配置

|-----------.editorconfig      	定义代码格式

|-----------.gitignore         	git 上传需要忽略的文件

|-----------package.json       项目基本信息

---------------------
```
## 结语
如果这个框架对你有帮助的话，请给个星点个star

## 捐赠
> 捐杯咖啡或者一瓶肥宅快乐水
<table>
    <tr>
        <td ><img style="display: inline-block;width: 300px;height: 300px" src="https://i.loli.net/2020/04/30/PJ1UlOGjrZNgAK6.jpg" ><p style="text-align: center">支付宝</p></td>
        <td ><img style="display: inline-block;width: 300px;height: 300px" src="https://i.loli.net/2020/04/30/quwJb2GvSt3kpfF.jpg" ><p style="text-align: center">微信</p></td>
    </tr>
</table>


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Nirongxu/vue-xuAdmin/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [NiRongxu](https://github.com/NiRongxu).<br />
This project is [MIT](https://github.com/Nirongxu/vue-xuAdmin/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
