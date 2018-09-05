import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import HomeMain from '@/views/mainIndex.vue'
import Icon from '@/views/icon/index'
import Form from '@/views/Form.vue'
import AddMember from '@/views/member/addMember.vue'
import RemMember from '@/views/member/remMember.vue'
import Transfer from '@/views/transfer/transfer.vue'
import dataTable from '@/views/table/dataTables.vue'

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
    },
    {
      path: '/',
      iconCls: 'fa fa-paw', // 图标样式class
      name: '图标',
      component: Home,
      children: [
        {
          path: '/icon',
          iconCls: 'fa fa-meh-o', // 图标样式class
          name: '图标',
          component: Icon,
          children: []
        }
      ]
    },
    {
      path: '/',
      iconCls: 'fa fa-server', // 图标样式class
      name: '穿梭框',
      component: Home,
      children: [
        {
          path: '/transfer',
          iconCls: 'fa fa-server', // 图标样式class
          name: '穿梭框',
          component: Transfer,
          children: []
        }
      ]
    },
    {
      path: '/',
      iconCls: 'fa fa-server', // 图标样式class
      name: '表格',
      component: Home,
      children: [
        {
          path: '/dataTable',
          iconCls: 'fa fa-server', // 图标样式class
          name: '表格',
          component: dataTable,
          children: []
        }
      ]
    },
    {
      path: '/',
      iconCls: 'fa fa-server', // 图标样式class
      name: '表单',
      component: Home,
      children: [
        {
          path: '/form',
          iconCls: 'fa fa-server', // 图标样式class
          name: '表单',
          component: Form,
          children: []
        }
      ]
    },
    {
      path: '/',
      iconCls: 'fa fa-server', // 图标样式class
      name: '会员',
      component: Home,
      children: [
        {
          path: '/addMember',
          iconCls: 'fa fa-server', // 图标样式class
          name: '添加',
          component: AddMember,
          children: []
        },
        {
          path: '/remMember',
          iconCls: 'fa fa-server', // 图标样式class
          name: '删除',
          component: RemMember,
          children: [
            {
              path: '/remMember',
              iconCls: 'fa fa-server', // 图标样式class
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
