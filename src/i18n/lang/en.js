/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/8
 * Description: 文件描述
 */

import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
  routeNmae: {
    home: 'home',
    article: 'article',
    publishArticle: 'publishArticle',
    icon: 'icon',
    builtInIcon: 'builtInIcon',
    shuttleBox: 'shuttleBox',
    demoShuttle: 'demoShuttle',
    permissions: 'permissions',
    pageControl: 'pageControl',
    btnControl: 'btnControl',
    table: 'table',
    multiDataTable: 'multiDataTable',
    filterTable: 'filterTable',
    dragSort: 'dragSort',
    upload: 'upload',
    fileUpload: 'fileUpload',
    editor: 'editor',
    markdown: 'markdown',
    multiDirectory: 'multiDirectory',
    'menu2-1': 'menu2-1',
    'menu2-2': 'menu2-2',
    'menu2-3': 'menu2-3',
    'menu3-1': 'menu3-1',
    'menu3-2': 'menu3-2',
    'menu3-3': 'menu3-3',
    'menu4-1': 'menu4-1',
    'menu4-2': 'menu4-2',
    'menu5-1': 'menu5-1',
    systemSettings: 'systemSettings',
    navMenu : 'navMenu',
  },
  rightMenu: {
    close: 'close',
    closeOther: 'closeOther',
    closeAll: 'closeAll'
  },
  role: {
    superAdmin: 'superAdmin',
    admin: 'admin',
    ordinary: 'ordinary'
  },
  userDropdownMenu: {
    basicInfor: 'basicInfor',
    changePassword: 'changePassword',
    logout: 'logout'
  },

  ...enLocale   //  合并element-ui内置翻译
}

export default en
