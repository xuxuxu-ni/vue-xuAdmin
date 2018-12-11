import Vue from 'vue'
import Vuex from 'vuex'
import routerData from './modules/routerData'
import role from './modules/role'
import layout from './modules/layout/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      token: ''
    }
  },
  mutations: {
    setToken (state, token) {
      state.user.token = token
    }
  },
  actions: {
    setToken ({commit}, token) {
      return new Promise((resolve, reject) => {
        commit('setToken', token)
        resolve()
      })

    }
  },
  getters: {
    addRouters: state => state.routerData.addRouters,
    token: state => state.user.token,
    info: state => state.role.info,
    routers: state => state.routerData.routers,
    logoShow: state => state.layout.logoShow,
    isCollapse: state => state.layout.isCollapse,
    uniquerouter: state => state.layout.uniquerouter,
    tabnavBox: state => state.layout.tabnavBox,
    visible: state => state.layout.visible,
    left: state => state.layout.left,
    top: state => state.layout.top,
    rightNav: state => state.layout.rightNav,
  },
  modules: {
    routerData,
    role,
    layout
  },
})

export default store
