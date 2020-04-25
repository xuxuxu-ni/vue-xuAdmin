/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/15
 * Description: 文件描述
 */
export default {
  install (Vue, options) {
    Vue.directive("roleBtn", {
      inserted: function (el, binding) {
        let roleArr = binding.value
        let userRole = JSON.parse(localStorage.getItem("info")).role
        if (roleArr && roleArr.indexOf(userRole) !== -1) {
          return false
        } else {
          el.parentNode.removeChild(el)
        }
      }
    })
  }
}

