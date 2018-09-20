import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/Home.vue'
import HomeMain from '@/views/mainIndex.vue'

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
    },
    {
      path: '/404',
      // component: NotFound,
      name: '',
      hidden: true,
      children: []
    },
    {
      path: '/index',
      iconCls: 'fa fa-dashboard', // 图标样式class
      name: '首页',
      component: Home,
      alone: true,
      children: [
        {
          path: '/index',
          iconCls: 'fa fa-dashboard', // 图标样式class
          name: '首页',
          component: HomeMain,
          children: []
        }
      ]
    }
  ]
})
