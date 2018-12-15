/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/15
 * Description: 文件描述
 */
import Vue from 'vue'

Vue.directive('roleBtn',{
  bind:function (el,binding) {
    let roleArr = binding.value;
    let userRole =  JSON.parse(sessionStorage.getItem('info')).role
    if (roleArr && roleArr.indexOf(userRole) !== -1) {
      return false
    } else {
      el.parentNode.removeChild(el);
    }
  }
})
export default Vue



