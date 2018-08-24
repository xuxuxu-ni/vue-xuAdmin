import Vue from 'vue'
import Router from 'vue-router'
import HomeMain from '@/views/main.vue'
import Table from '@/views/Table.vue'
import Form from '@/views/Form.vue'
import Select from '@/views/Select.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/index',
      hidden: true
    },
    {
      path: '/login',
      // component: Login,
      name: '',
      hidden: true
    },
    {
      path: '/404',
      // component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '/index',
      name: '首页',
      iconCls: 'dc dc-customer', // 图标样式class
      component: HomeMain,
      children: []
    },
    {
      path: '/table',
      iconCls: 'dc dc-customer', // 图标样式class
      name: '表格',
      component: Table,
      children: []
    },
    {
      path: '/select',
      iconCls: 'dc dc-customer', // 图标样式class
      name: '选择',
      component: Select,
      children: []
    },
    {
      path: '/form',
      iconCls: 'dc dc-customer', // 图标样式class
      name: '表单',
      component: Form,
      children: []
    }

  ]
})
