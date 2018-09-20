import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/Home.vue'
import HomeMain from '@/views/mainIndex.vue'
import Icon from '@/views/icon/index'
import Transfer from '@/views/transfer/transfer.vue'
import DataTable from '@/views/table/dataTables.vue'
import FilterTable from '@/views/table/filterTable.vue'
import DragTabe from '@/views/table/dragTabe.vue'
import Upload from '@/views/upload/upload.vue'
import Markdown from '@/views/markdown/markdownView.vue'

Vue.use(Router)

let routes = [
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
        name: '多选数据表格',
        component: DataTable,
        children: []
      },
      {
        path: '/filterTable',
        iconCls: 'fa fa-server', // 图标样式class
        name: '筛选表格',
        component: FilterTable,
        children: []
      },
      {
        path: '/dragTabe',
        iconCls: 'fa fa-server', // 图标样式class
        name: '拖拽排序',
        component: DragTabe,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-server', // 图标样式class
    name: '上传',
    component: Home,
    children: [
      {
        path: '/upload',
        iconCls: 'fa fa-server', // 图标样式class
        name: '上传',
        component: Upload,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-server', // 图标样式class
    name: '编辑器',
    component: Home,
    children: [
      {
        path: '/markdown',
        iconCls: 'fa fa-server', // 图标样式class
        name: 'markdown',
        component: Markdown,
        children: []
      }
    ]
  }

]

export default routes
