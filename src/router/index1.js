import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Main from '@/views/main.vue'
import Table from '@/views/Table.vue'
import Form from '@/views/Form.vue'
import Select from '@/views/Select.vue'
import AddMember from '@/views/member/addMember.vue'
import RemMember from '@/views/member/remMember.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/index',
      component: Home,
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
      component: Home,
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
    },
    {
      path: '/',
      iconCls: 'dc dc-customer', // 图标样式class
      name: '会员',
      component: Home,
      children: [
        {
          path: '/addMember',
          iconCls: 'dc dc-customer', // 图标样式class
          name: '添加',
          component: AddMember,
          children: []
        },
        {
          path: '/rem',
          iconCls: 'dc dc-customer', // 图标样式class
          name: '删除',
          children: [
            {
              path: '/remMember',
              iconCls: 'dc dc-customer', // 图标样式class
              name: '删除人员',
              component: RemMember,
              children: []
            }
          ]
        }
      ]
    }

  ]
})
