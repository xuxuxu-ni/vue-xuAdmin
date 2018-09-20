import routerTable from '@/router/routerTable'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
// function hasPermission (permission, route) {
//   // if (route.meta && route.meta.roles) {
//   return roles.some(role => route.meta.roles.indexOf(role) >= 0)
//   // } else {
//   //   return true
//   // }
// }

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
let newarr = []
function filterAsyncRouter (router, permi) {
  const accessedRouters = router.filter(route => {
    if (route.children && route.children.length) {
      debugger
      filterAsyncRouter(route.children, permi);
      route.children.push(newarr)
    } else {
      let onoff = permi.some(per => route.path === per)
      debugger
      return onoff
    }
  })
  debugger
  return accessedRouters
}

const permission = {
  state: {
    routers: routerTable,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      debugger
      return new Promise(resolve => {
        const permission = data
        let accessedRouters
        // if (permission.indexOf('admin') >= 0) {
        //   accessedRouters = routerTable
        // } else {
        accessedRouters = filterAsyncRouter(routerTable, permission)
        console.log(accessedRouters)
        debugger
        // }
        // commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
