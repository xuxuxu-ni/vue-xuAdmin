import en from '../i18n/lang/en'
import Vue from 'vue'
import Router from 'vue-router'
import CommerViews from '@/views/commerViews'
import Login from '@/views/login/index'
import Layout from '@/views/layout/layout'
import HomeMain from '@/views/index/mainIndex'

// 不是必须加载的组件使用懒加载
const Icon = () => import('@/views/icon/index')
const Erji = () => import('@/views/duoji/erji')
const Erji2 = () => import('@/views/duoji/erji2')
const Sanji = () => import('@/views/duoji/sanji')
const Sanji2 = () => import('@/views/duoji/sanji2')
const Siji = () => import('@/views/duoji/siji')
const Wuji = () => import('@/views/duoji/wuji')
const Transfer = () => import('@/views/transfer/transfer')
const DataTable = () => import('@/views/table/dataTables')
const FilterTable = () => import('@/views/table/filterTable')
const DragTable = () => import('@/views/table/dragTabe')
const Upload = () => import('@/views/upload/upload')
const Markdown = () => import('@/views/markdown/markdownView')
const NotFound = () => import('@/page404')
const AddArticle = () => import('@/views/article/addArticle')
const NavClassify = () => import('@/views/syssetting/navClassify')
const pagePermissions = () => import('@/views/permissions/pagePermissions')
const btnPermissions = () => import('@/views/permissions/btnPermissions')

Vue.use(Router)
let routeNmae = en.routeNmae
let defaultRouter = [
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
    path: '/index',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: routeNmae.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: '/index',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: '主页',
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true,
    children: []
  },
]

let addRouter = [
  {
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: routeNmae.article,
    component: Layout,
    children: [
      {
        path: '/addArticle',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: routeNmae.publishArticle,
        component: AddArticle,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-paw', // 图标样式class
    name: routeNmae.icon,
    component: Layout,
    children: [
      {
        path: '/icon',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: routeNmae.builtInIcon,
        component: Icon,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-exchange', // 图标样式class
    name: routeNmae.shuttleBox,
    component: Layout,
    children: [
      {
        path: '/transfer',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeNmae.demoShuttle,
        component: Transfer,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-universal-access', // 图标样式class
    name: routeNmae.permissions,
    component: Layout,
    children: [
      {
        path: '/pagePermissions',
        iconCls: 'fa fa-expeditedssl', // 图标样式class
        name: routeNmae.pageControl,
        component: pagePermissions,
        children: []
      },
      {
        path: '/btnPermissions',
        iconCls: 'fa fa-toggle-on', // 图标样式class
        name: routeNmae.btnControl,
        component: btnPermissions,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-newspaper-o', // 图标样式class
    name: routeNmae.table,
    component: Layout,
    children: [
      {
        path: '/dataTable',
        iconCls: 'fa fa-sliders', // 图标样式class
        name: routeNmae.multiDataTable,
        component: DataTable,
        children: []
      },
      {
        path: '/filterTable',
        iconCls: 'fa fa-sort-amount-asc', // 图标样式class
        name: routeNmae.filterTable,
        component: FilterTable,
        children: []
      },
      {
        path: '/dragTabe',
        iconCls: 'fa fa-hand-stop-o', // 图标样式class
        name: routeNmae.dragSort,
        component: DragTable,
        children: []
      }
    ]
  },

  {
    path: '/',
    iconCls: 'fa fa-server',
    name: routeNmae.multiDirectory,
    component: Layout,
    children: [
      {
        path: '/erji1',
        iconCls: 'fa fa-server',
        name: routeNmae['menu2-1'],
        component: Erji,
        children: []
      },
      {
        path: '/erji2',
        iconCls: 'fa fa-server',
        name: routeNmae['menu2-2'],
        component: Erji2,
        children: []
      },
      {
        path: '/erji3',
        iconCls: 'fa fa-server',
        name: routeNmae['menu2-3'],
        component: CommerViews, // 无限极菜单的容器
        children: [
          {
            path: '/sanji1',
            iconCls: 'fa fa-server',
            name: routeNmae['menu3-1'],
            component: Sanji,
            children: []
          },
          {
            path: '/sanji2',
            iconCls: 'fa fa-server',
            name: routeNmae['menu3-2'],
            component: Sanji2,
            children: []
          },
          {
            path: '/sanji3',
            iconCls: 'fa fa-server',
            name: routeNmae['menu3-3'],
            component: CommerViews,
            children: [
              {
                path: '/siji',
                iconCls: 'fa fa-server',
                name: routeNmae['menu4-1'],
                component: Siji,
                children: []
              },
              {
                path: '/siji1',
                iconCls: 'fa fa-server',
                name: routeNmae['menu4-2'],
                component: CommerViews,
                children: [
                  {
                    path: '/wuji',
                    iconCls: 'fa fa-server',
                    name: routeNmae['menu5-1'],
                    component: Wuji,
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-cloud-upload', // 图标样式class
    name: routeNmae.upload,
    component: Layout,
    meta: {role: ['superAdmin']},
    children: [
      {
        path: '/upload',
        iconCls: 'el-icon-upload2', // 图标样式class
        name: routeNmae.fileUpload,
        component: Upload,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'el-icon-edit', // 图标样式class
    name: routeNmae.editor,
    component: Layout,
    meta: {role: ['superAdmin', 'admin']},
    children: [
      {
        path: '/markdown',
        iconCls: 'fa fa-file-code-o', // 图标样式class
        name: routeNmae.markdown,
        component: Markdown,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'el-icon-setting', // 图标样式class
    name: routeNmae.systemSettings,
    component: Layout,
    meta: {role: ['superAdmin']},
    children: [
      {
        path: '/navClassifies',
        iconCls: 'el-icon-menu', // 图标样式class
        name: routeNmae.navMenu,
        component: NavClassify,
        children: []
      }
    ]
  },
  { path: '*',
    redirect: '/404',
    hidden: true,
    children: []
  },

]
export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}
