/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2020/4/15
 * Description: 文件描述
 */
import axios from "../axios"
import loginUrls from "../urls/login"

export default {
  // 账号密码登陆
  fetchLogin (data) {
    return axios.post(loginUrls.login, data)
  }
}
