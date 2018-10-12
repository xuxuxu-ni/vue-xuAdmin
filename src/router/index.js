import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/index',
      hidden: true,
      children: []
    },
    {
      path: '/login',
      component: Login,
      name: '',
      hidden: true,
      children: []
    }

  ]
})
