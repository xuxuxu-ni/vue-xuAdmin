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

// router为vue-router路由对象
router.beforeEach((to, from, next) => {
  // ajax获取权限列表函数
  // 这里省略了一些判断条件，比如判断是否已经拥有了权限数据等
  getPermission().then(res => {
    let isPermission = false
    permissionList.forEach((v) => {
      // 判断跳转的页面是否在权限列表中
      if (v.path == to.fullPath) {
        isPermission = true
      }
    })
    // 没有权限时跳转到401页面
    if (!isPermission) {
      next({path: '/error/401', replace: true})
    } else {
      next()
    }
  })
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
