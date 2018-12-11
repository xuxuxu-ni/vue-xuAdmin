// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'

import App from './App.vue'
import router from './router'
import store from './vuex'
import i18n from './i18n/i18n'

Vue.config.productionTip = false
Vue.use(ElementUI)

//  获取角色信息，根据用户权限动态加载路由
router.beforeEach((to, from, next) => {
  console.log(store.getters.token)

  if (store.getters.token) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (!store.getters.info.role) {
        // const role = ['/markdown', '/erji', '/erji2', '/siji', '/wuji']
        !async function getAddRouters () {
          await store.dispatch('getInfo', store.getters.token)
          await store.dispatch('newRoutes', store.getters.info.role)
          console.log(store.getters.addRouters)
          await router.addRoutes(store.getters.addRouters)
          next()
        }()
      } else {
        next()
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    }
    next({path: '/login'})

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  components: {App},
  template: '<App/>'
})
