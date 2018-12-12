## 1. vue-xuAdmin 后台模板简介

项目预览地址：https://nirongxu.github.io/vue-xuAdmin/dist/

vue-xuAdmin是基于vue2.0全家桶 + element-ui 开发的一个后台模板，实现了无限级菜单，为了做到彻底的前后端分离，页面级别的权限验证和动态路由表的存储校验，也都由前端完成，这样前端新建页面或者删除页面都不需要告诉后台去增加删除路由表
![enter description here](https://i.loli.net/2018/12/12/5c102baf4f986.jpg)
![enter description here](https://i.loli.net/2018/12/12/5c10a2f90e38a.jpg)

![enter description here](https://i.loli.net/2018/12/12/5c102aefebb51.jpg)
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
	- 权限管理
	- 无限级菜单
- 封装vue-i18n@8.x国际化组件
- 系统全屏化
- 菜单收缩
- icon 图标
+ tab标签导航
	- 右击快捷功能
- 表格拖拽排序
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

# 安装依赖 (如果安装失败就多安装几次，实在不行就换淘宝镜像)
npm install

# 启动项目 (已经配置好启动服务自动打开浏览器，如果没自动打开按照控制台输出的地址自己打开)
npm run dev

# 启动单元测试
npm run unit

# 启动端到端测试
 npm run e2e


# 启动编译打包生产环境
 npm run build
```

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

               |---------assets                 资源目录，这里的资源会被webpack构建

               |---------components        		组件目录

			   |---------i18n					多语言国际化

						 |-----------lang             		多语言文件夹
						 			|-----------cn.js               	简体中文
									|-----------en.js               	英文

                         |-----------i18n.js               注册挂载 i18n ，兼容 element-ui

               |---------router

                         |-----------index.js               前端路由

			   |---------views					页面文件

			   |---------vuex					全局状态管理目录

               |--------App.vue                	根组件

               |--------main.js                 入口js文件

   |------------static             纯静态资源，不会被webpack构建

   |------------index.html         入口页面

   |------------test        		单元测试

   |------------.babelrc            ES6语法编译配置

   |-----------.editorconfig      	定义代码格式

   |-----------.gitignore         	git 上传需要忽略的文件

   |-----------package.json       项目基本信息

---------------------
```
