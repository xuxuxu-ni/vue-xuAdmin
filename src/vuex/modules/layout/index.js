/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/10
 * Description: 文件描述
 */
export default {
  state: {
    isCollapse: false,
    logoShow: false,
    uniquerouter: true,
    rightNav: {},
    tabnavBox: [
      {
        title: 'home',
        path: '/index'
      }
    ]
  },
  mutations: {
    addTab (state, arg) {
      state.isActive = arg.path
      for (let i = 0; i < state.tabnavBox.length; i++) {
        if (state.tabnavBox[i].path === arg.path) {
          return false
        }
      }
      state.tabnavBox.push({
        title: arg.title,
        path: arg.path
      })
    },
    openMenu (state, arg) {
      state.rightNav = arg
    },
    removeTab (state, arg) {
      let index = state.tabnavBox.findIndex(function (value, key) {
        return value.path === arg.tabItem.path
      })
      state.tabnavBox.splice(index, 1)
      if (arg.tabItem.path === arg.fullPath) {
        let tabActive = state.tabnavBox[index] || state.tabnavBox[index - 1]
        arg.router.push(tabActive.path)
      }
    },
    removeOtherTab (state, arg) {
      state.tabnavBox = [{
        title: 'home',
        path: '/index'
      }]
      if (arg.all) {
        arg.router.push('/index')
        return false
      }
      state.tabnavBox.push(arg.tabItem)
      arg.router.push(arg.tabItem.path)
    },
    collapse (state, arg) {
      state.isCollapse = !state.isCollapse
      if (state.logoShow) {
        setTimeout(function () {
          state.logoShow = false
        }, 300)
      } else {
        state.logoShow = true
      }
    },
  },
  actions: {
    addTab ({commit}, arg) {
      commit('addTab', arg)
    },
    openMenu ({commit}, arg) {
      commit('openMenu', arg)
    },
    removeTab ({commit}, arg) {
      commit('removeTab', arg)
    },
    removeOtherTab ({commit}, arg) {
      commit('removeOtherTab', arg)
    },
    collapse ({commit}, arg) {
      commit('collapse', arg)
    },
  }
}
