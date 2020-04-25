/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2020/4/15
 * Description: 验证规则
 */

export default {
  // 必选
  requiredSelect: (mes = "此项必选", trigger = ["blur", "change"]) => {
    return {
      required: true,
      message: mes,
      trigger: trigger
    }
  },
  // 固定长度
  $length: (len = 1, message = `长度必须为${len}`, trigger = ["blur", "change"]) => {
    return {
      len: len,
      message: message,
      trigger: trigger
    }
  },
  // 长度验证
  len: (min = 1, max = 255, message = `长度为${min}-${max}`, trigger = ["blur", "change"]) => {
    return {
      min: min,
      max: max,
      message: message,
      trigger: trigger
    }
  },
  // 最小长度
  min: (min = 1, message = `最小长度为${min}`, trigger = ["blur", "change"]) => {
    return {
      min: min,
      message: message,
      trigger: trigger
    }
  },
  // 最大长度
  max: (max = 255, message = `最大长度为${max}`, trigger = ["blur", "change"]) => {
    return {
      max: max,
      message: message,
      trigger: trigger
    }
  },
  // 最小数
  minNum: (min = 1, type = "number", message = `不能小于${min}`, trigger = ["blur", "change"]) => {
    return {
      type: type,
      min: min,
      message: message,
      trigger: trigger
    }
  },
  // 最大数
  maxNum: (max = 255, type = "number", message = `不能大于${max}`, trigger = ["blur", "change"]) => {
    return {
      type: type,
      max: max,
      message: message,
      trigger: trigger
    }
  },
  // 数值范围
  rangeNum: (min = 1, max = 255, message = `只能输入${min}-${max}之间的数`, trigger = ["blur", "change"]) => {
    const validator = (rule, value, callback) => {
      if (value === "" || (Number(value) >= min && Number(value) <= max)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 类型
  type: (type = "string", message = `输入的类型必须为${type}`, trigger = ["blur", "change"]) => {
    return {
      type: type,
      message: message,
      trigger: trigger
    }
  },

  password: (callback) => {
    return {
      validator: callback,
      trigger: "change"
    }
  },
  // 邮箱
  email: (message = "请输入正确的邮箱地址", trigger = ["blur", "change"]) => {
    // eslint-disable-next-line no-useless-escape
    const reg = /^[a-zA-Z0-9][a-zA-Z0-9 . _-]+(@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 大写字母
  upperCase: (message = "请输入大写字母", trigger = ["blur", "change"]) => {
    const reg = /^[A-Z]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 小写字母
  lowerCase: (message = "请输入小写字母", trigger = ["blur", "change"]) => {
    const reg = /^[A-Z]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 大小写字母
  english: (message = "请输入英文", trigger = ["blur", "change"]) => {
    const reg = /^[A-Za-z]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 只能输中文
  chinese: (message = "请输入中文", trigger = ["blur", "change"]) => {
    const reg = /^[\u4e00-\u9fa5]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 不能输中文
  noChinese: (message = "不能包含中文", trigger = ["blur", "change"]) => {
    const validator = (rule, value, callback) => {
      if (value === "" || escape(value).indexOf("%u") >= 0) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 中文英文数字
  cnEnNum: (message = "请输入中文、大小写英文、数字", trigger = ["blur", "change"]) => {
    const reg = /^[\u4e00-\u9fa5|A-Za-z0-9]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 路径
  path: (message = "请输入英文、数字、划线、斜线", trigger = ["blur", "change"]) => {
    const reg = /^[-|_|/|A-Za-z0-9]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 英文数字下划线
  enNumLine: (message = "请输入英文、数字、下划线", trigger = ["blur", "change"]) => {
    const reg = /^[_|A-Za-z0-9]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 英文数字
  enNum: (message = "请输入英文、数字", trigger = ["blur", "change"]) => {
    const reg = /^[A-Za-z0-9]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 必须包含英文数字
  haveCnEnNum: (message = "必须包含英文和数字", trigger = ["blur", "change"]) => {
    const reg = /^(?=.*[a-zA-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]+$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 手机号
  mobile: (message = "请输入正确的手机号码", trigger = ["blur", "change"]) => { // 手机号码验证
    const reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(16[2|6|7])|(18[0-9])|(17([0-1]|[3]|[5-8]))|(19[1|8|9]))\d{8}$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 座机
  phone: (message = "请输入正确的座机号码", trigger = ["blur", "change"]) => {
    const reg = /^((\d{3,4}-\d{7,8})|(\d{7}-\d{1,12})|(\d{8}-\d{1,11})|(\d{11}-\d{1,8})|(\d{7,8})|(\d{11,20})|(\d{3}-\d{8}-\d{1,7})|(\d{3}-\d{7}-\d{1,8})|(\d{4}-\d{7}-\d{1,7})|(\d{4}-\d{8}-\d{1,6}))$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 手机或座机
  phoneAll: (message = "请输入正确的电话号码", trigger = ["blur", "change"]) => {
    const reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(16[2|6|7])|(18[0-9])|(17([0-1]|[3]|[5-8]))|(19[1|8|9]))\d{8}$|^((\d{3,4}-\d{7,8})|(\d{7}-\d{1,12})|(\d{8}-\d{1,11})|(\d{11}-\d{1,8})|(\d{7,8})|(\d{11,20})|(\d{3}-\d{8}-\d{1,7})|(\d{3}-\d{7}-\d{1,8})|(\d{4}-\d{7}-\d{1,7})|(\d{4}-\d{8}-\d{1,6}))$/
    const validator = (rule, value, callback) => {
      if (value === "" || reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator,
      trigger
    }
  },
  // 小数
  float: (message = "请输入合法的数字", trigger = ["blur", "change"]) => {
    const reg = /^[0-9]+([.]{1}[0-9]+){0,1}$/
    const va = (rule, value, callback) => {
      if (value === null || value === "") {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  },
  // 两位小数
  decimal: (message = "请输入最多两位小数", trigger = ["blur", "change"]) => {
    const reg = /^(([0-9]*)|(([0]\.\d{1,2}|[0-9]*\.\d{1,2})))$/
    const va = (rule, value, callback) => {
      if (value === null || value === "") {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  },
  // 整数
  number: (message = "请输入合法的数字", trigger = ["blur", "change"]) => {
    const reg = /^[0-9]\d*$/
    const va = (rule, value, callback) => {
      if (value === "") {
        callback()
      } else if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  },
  // 正数
  plusNumber: (message = "请输入合法的数字", trigger = ["blur", "change"]) => {
    const reg = /^(0|[1-9][0-9]*)(\.\d+)?$/
    const va = (rule, value, callback) => {
      if (value === "") {
        callback()
      } else if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  },
  // 大于0的正数
  moreThanZeroNumber: (message = "只能输入大于0的整数", trigger = ["blur", "change"]) => {
    const reg = /^\+?[1-9]\d*$/
    const va = (rule, value, callback) => {
      if (value === "") {
        callback()
      } else if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  },
  // 网址
  url: (message = "请输入正确的网址", trigger = ["blur", "change"]) => {
    const reg = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/
    const va = (rule, value, callback) => {
      if (value === "") {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  },
  // ip地址
  ip: (message = "请输入正确的ip", trigger = ["blur", "change"]) => {
    const reg = /^(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))*$/
    const va = (rule, value, callback) => {
      if (value === "") {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  },
  // 身份证号
  identity: (message = "请输入正确的身份证号", trigger = ["blur", "change"]) => {
    const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/
    // ^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$
    const va = (rule, value, callback) => {
      if (value === "") {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  },
  // 邮政编码
  postal: (message = "请输入正确的邮政编码", trigger = ["blur", "change"]) => {
    const reg = /^\d{6}$/
    const va = (rule, value, callback) => {
      if (value === "") {
        callback()
      }
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error(message))
      }
    }
    return {
      validator: va,
      trigger: trigger
    }
  }
}

