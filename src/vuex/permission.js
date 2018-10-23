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

function filterAsyncRouter (router, permi) {
  console.log(router, permi)
  for (let i = 0; i < permi.length; i++) {
    eachSelect(router, permi[i])
  }

  function eachSelect (routers, per) {
    for (let j = 0; j < routers.length; j++) {
      if (routers[j].children && router[j].children.length) {
        eachSelect(routers[j].children, per)
      } else if (routers[j].path === per) {
        routers.splice(j, 1)
      }
    }
  }
  console.log(router)
  return router
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
      return new Promise(resolve => {
        const permission = data
        let accessedRouters
        // if (permission.indexOf('admin') >= 0) {
        //   accessedRouters = routerTable
        // } else {
        accessedRouters = filterAsyncRouter(routerTable, permission)
        console.log(accessedRouters)
        // }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
