import store from "../index"
import router from "../../router/index"
export default {
  state: {
    info: "" // 每次刷新都要通过token请求个人信息来筛选动态路由
  },
  mutations: {
    getInfo (state, info) {
      state.info = info
      localStorage.setItem("info", JSON.stringify(store.getters.info))
    },
    setRole (state, options) { // 切换角色，测试权限管理
      state.info = {
        role: options.role,
        permissions: options.permissions
      }
      localStorage.setItem("info", JSON.stringify(store.getters.info))
      store.dispatch("newRoutes", options.role)
      router.addRoutes(store.getters.addRouters)
    }
  },
  actions: {
    getInfo ({commit}, token) {
      commit("getInfo", token)
    },
    setRole ({commit}, options) {
      // 权限测试
      commit("setRole", options)
    }
  }
}
