/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2020/4/15
 * Description: 全局工具方法
 */

import CryptoJS from "crypto-js"

const encryptKey = "WfJTKO9S4eLkrPz2JKrAnzdb"
const encryptIV = "D076D35C"

// 深度复制
export function deepClone (obj) {
  let result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        result[key] = deepClone(obj[key])
      } else {
        result[key] = obj[key]
      }
    }
  }
  return result
}

// 3DES加密
export function desEncrypt (str, key = encryptKey, iv = encryptIV) {
  var cryptoKey = CryptoJS.enc.Utf8.parse(key)
  var cryptoIv = CryptoJS.enc.Utf8.parse(iv.substr(0, 8))
  var encodeStr = CryptoJS.TripleDES.encrypt(str, cryptoKey, {
    iv: cryptoIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encodeStr.toString()
}

// 3DES解密
export function desDecrypt (str, key = encryptKey, iv = encryptIV) {
  var cryptoKey = CryptoJS.enc.Utf8.parse(key)
  var cryptoIv = CryptoJS.enc.Utf8.parse(iv.substr(0, 8))
  var decryptStr = CryptoJS.TripleDES.decrypt(str, cryptoKey, {
    iv: cryptoIv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return decryptStr.toString(CryptoJS.enc.Utf8)
}

// 随机生成由字母+数字的字符串
export function randomWord (randomFlag, min, max) {
  // randomFlag: Boolean 是否随机个数
  // min 最少个数
  // max 最大个数
  var str = ""
  var range = min
  var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min
  }
  var pos = ""
  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1))
    str += arr[pos]
  }
  return str
}

// 判断数组中是否存在相同值
export function hasRepeatValue (arr, key = null) {
  if (key) arr = arr.map(d => d[key])
  if (arr.length) {
    let nameNum = arr.reduce((pre, cur) => {
      if (cur in pre) {
        pre[cur]++
      } else {
        pre[cur] = 1
      }
      return pre
    }, {})
    return Object.values(nameNum).findIndex(d => d > 1) < 0
  }
  return true
}

// 获取cookie值
export function getCookie (name, defaultValue) {
  const result = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  return result[0] === document.cookie.match(result[1]) ? unescape(result[0][2]) : defaultValue
}

// base64ToFile
export function base64ToFile (base64Data, tempfilename, contentType) {
  contentType = contentType || ""
  var sliceSize = 1024
  var byteCharacters = atob(base64Data)
  var bytesLength = byteCharacters.length
  var slicesCount = Math.ceil(bytesLength / sliceSize)
  var byteArrays = new Array(slicesCount)

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize
    var end = Math.min(begin + sliceSize, bytesLength)

    var bytes = new Array(end - begin)
    for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0)
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes)
  }
  var file = new File(byteArrays, tempfilename, { type: contentType })
  return file
}

// 将base64转换为文件
export function dataURLtoFile (dataurl, filename) {
  var arr = dataurl.split(",")
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

// 将图片转换为Base64
export function getImgToBase64 (url, callback, outputFormat) {
  var canvas = document.createElement("canvas")
  var ctx = canvas.getContext("2d")
  var img = new Image()
  img.crossOrigin = "Anonymous"
  img.onload = function () {
    canvas.height = img.height
    canvas.width = img.width
    ctx.drawImage(img, 0, 0)
    var dataURL = canvas.toDataURL(outputFormat || "image/png")
    callback(dataURL)
    canvas = null
  }
  img.src = url
}

// 转换级联下拉数据
export function loopOptions (list, option = {}) {
  option = {
    value: "id",
    label: "name",
    children: "children",
    ...option
  }
  if (list instanceof Array && list.length) {
    return list.map((d, i) => {
      d.value = d[option.value] || i + 1
      d.label = d[option.label]
      if (d[option.children]) {
        d[option.children] = loopOptions(d[option.children], option)
      }
      return d
    })
  }
  return []
}

// 通过Id获取级联数据id数组
export function getTreeIds (tree, currentId, key = "id") {
  let parent = {}
  let pid = {}
  const loop = (list, level) => {
    if (list instanceof Array && list.length) {
      for (let index = 0; index < list.length; index++) {
        const d = list[index]
        parent[level] = d.id
        if (d[key] === currentId) {
          for (let idx = 1; idx <= level; idx++) {
            pid[idx] = parent[idx]
          }
          break
        } else if (d.children) {
          loop(d.children, level + 1)
        }
      }
    }
  }
  loop(tree, 1)
  let result = []
  Object.keys(pid).sort((a, b) => a - b).forEach(k => {
    result.push(pid[k])
  })
  return result
}

// 秒转换时分秒
export function transverterMss (result) {
  var h = Math.floor(result / 3600) < 10 ? "0" + Math.floor(result / 3600) : Math.floor(result / 3600)
  var m = Math.floor((result / 60 % 60)) < 10 ? "0" + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
  var s = Math.floor((result % 60)) < 10 ? "0" + Math.floor((result % 60)) : Math.floor((result % 60))
  return h + ":" + m + ":" + s
}

// 获取日期时间戳
export function getTime (dayNum) {
  var myDate = new Date()
  var lw = new Date(myDate - 1000 * 60 * 60 * 24 * dayNum)// 最后一个数字多少天前的意思
  var lastY = lw.getFullYear()
  var lastM = lw.getMonth() + 1
  var lastD = lw.getDate()
  var startdate = lastY + "-" + (lastM < 10 ? "0" + lastM : lastM) + "-" + (lastD < 10 ? "0" + lastD : lastD)
  var b = startdate.split(/\D/)
  var date = new Date(b[0], b[1] - 1, b[2])
  var time = date.getTime()
  return time
}

// 获取几天之前日期
export function getData (dayNum) {
  var myDate = new Date()
  var lw = new Date(myDate - 1000 * 60 * 60 * 24 * dayNum)// 最后一个数字多少天前的意思
  var lastY = lw.getFullYear()
  var lastM = lw.getMonth() + 1
  var lastD = lw.getDate()
  var startdate = lastY + "-" + (lastM < 10 ? "0" + lastM : lastM) + "-" + (lastD < 10 ? "0" + lastD : lastD)
  return startdate
}

// 日期转换时间戳
export function getNewTime (dayNum) {
  var b = dayNum.split(/\D/)
  var date = new Date(b[0], b[1] - 1, b[2])
  var time = date.getTime()
  return time
}
