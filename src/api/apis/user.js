/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2020/4/20
 * Description: 文件描述
 */
import axios from "../axios"
import userUrls from "../urls/user"

export default {
  // 注册/添加账号
  fetchRegister (data) {
    return axios.post(userUrls.register, data)
  },
  // 删除用户
  fetchDelUser (data) {
    return axios.post(userUrls.delUser, data)
  },
  // 获取用户列表
  fetchUserList (data) {
    return axios.post(userUrls.userList, data)
  },
  // 修改用户信息
  fetchEditUser (data) {
    return axios.post(userUrls.editUser, data)
  },
  // 获取当前用户信息
  fetchGetUserInfo () {
    return axios.get(userUrls.getUserInfo)
  },
  // 获取用户信息
  fetchGetUserInfoId (data) {
    return axios.post(userUrls.getUserInfoId, data)
  },
  // 修改密码
  fetchEditPassword (data) {
    return axios.post(userUrls.editPassword, data)
  }
}

