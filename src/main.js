// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'

import App from './App.vue'
import router from './router'
import store from './vuex'
Vue.config.productionTip = false
Vue.use(ElementUI)

// // router为vue-router路由对象
// router.beforeEach((to, from, next) => {
//   // ajax获取权限列表函数
//   // 这里省略了一些判断条件，比如判断是否已经拥有了权限数据等
//   getPermission().then(res => {
//     let isPermission = false
//     permissionList.forEach((v) => {
//       // 判断跳转的页面是否在权限列表中
//       if (v.path == to.fullPath) {
//         isPermission = true
//       }
//     })
//     // 没有权限时跳转到401页面
//     if (!isPermission) {
//       next({path: '/error/401', replace: true})
//     } else {
//       next()
//     }
//   })
// })

router.beforeEach((to, from, next) => {
  // if (store.getters.token) { // 判断是否有token
  if (to.path === '/login') {
    next({ path: '/' })
  } else {
    // if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
    // store.dispatch('GetInfo').then(res => { // 拉取info
    // const roles = res.data.role
    const permission = ['/markdown', '/erji', '/erji2', '/siji', '/wuji']
    store.dispatch('GenerateRoutes', permission) // 生成可访问的路由表
    debugger
    console.log(store.getters.addRouters)
    router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
    next() // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
    console.log(router)
    debugger
    // }).catch(err => {
    //   console.log(err)
    // })
    // } else {
    //   next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
    // }
  }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //     next('/login') // 否则全部重定向到登录页
  //   }
  // }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
