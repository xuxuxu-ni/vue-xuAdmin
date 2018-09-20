import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import errorLog from './modules/errorLog'
import permission from './permission'
// import tagsView from './modules/tagsView'
// import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      token: ''
    }
  },
  modules: {
    permission
  },
  getters,
  mutations: {
    GetInfo () {
      // 请求用户信息的方法
    }
  }
})

export default store
