import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import HomeMain from '@/views/main.vue'
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
      hidden: true,
      children: []
    },
    {
      path: '/login',
      // component: Login,
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
      path: '/',
      iconCls: 'dc dc-customer', // 图标样式class
      name: '首页',
      component: Home,
      alone: true,
      children: [
        {
          path: '/index',
          iconCls: 'dc dc-customer', // 图标样式class
          name: '首页',
          component: HomeMain,
          children: []
        }
      ]
    },
    {
      path: '/',
      iconCls: 'dc dc-customer', // 图标样式class
      name: '表格',
      component: Home,
      children: [
        {
          path: '/table',
          iconCls: 'dc dc-customer', // 图标样式class
          name: '表格1',
          component: Table,
          children: []
        }
      ]
    },
    {
      path: '/',
      iconCls: 'dc dc-customer', // 图标样式class
      name: '选择',
      component: Home,
      children: [
        {
          path: '/select',
          iconCls: 'dc dc-customer', // 图标样式class
          name: '选择1',
          component: Select,
          children: []
        }
      ]
    },
    {
      path: '/',
      iconCls: 'dc dc-customer', // 图标样式class
      name: '表单',
      component: Home,
      children: [
        {
          path: '/form',
          iconCls: 'dc dc-customer', // 图标样式class
          name: '表单',
          component: Form,
          children: []
        }
      ]
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
          path: '/remMember',
          iconCls: 'dc dc-customer', // 图标样式class
          name: '删除',
          component: RemMember,
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
