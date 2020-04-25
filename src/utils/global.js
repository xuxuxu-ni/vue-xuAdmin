/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2020/4/15
 * Description: 自定义全局插件
 */

import rules from "./rules"
import request from "@/api"
import echarts from "echarts"

export default {
  install (Vue, options) {
    Vue.prototype.$echarts = echarts
    Vue.prototype.$request = request
    Vue.prototype.$rules = rules
    /** 时间字符串
     * @method $getDateDiff
     * @param timespan
     */
    Vue.prototype.$getDateDiff = function (timespan) {
      var dateTime = new Date(timespan)
      var year = dateTime.getFullYear()
      var month = (dateTime.getMonth() + 1) < 10 ? "0" + (dateTime.getMonth() + 1) : (dateTime.getMonth() + 1)
      var day = dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate()
      var hour = dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours()
      var minute = dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes()
      var seconds = dateTime.getSeconds() < 10 ? "0" + dateTime.getSeconds() : dateTime.getSeconds()
      var now = new Date()
      var nowNew = now.getTime()
      var milliseconds = 0
      var timeSpanStr
      milliseconds = nowNew - dateTime

      if (milliseconds <= 1000 * 60 * 1) {
        timeSpanStr = "刚刚"
      } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + "分钟前"
      } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + "小时前"
      } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 3) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + "天前"
      } else if (milliseconds > 1000 * 60 * 60 * 24 * 3 && year === now.getFullYear()) {
        timeSpanStr = month + "-" + day + " " + hour + ":" + minute + ":" + seconds
      } else {
        timeSpanStr = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds
      }
      return timeSpanStr
    }

    /** 当前地址ip
     * @method $path
     * @param {}
    */
    Vue.prototype.$path = process.env.API_HOST

    /** 传入路径转换成完整连接
     * @method $getPath
     * @param {url: 路径}
    */
    Vue.prototype.$getPath = function (url) {
      const base = process.env.API_HOST
      if (/^http/.test(url)) return url
      return base + url
    }
    /** 是否开发模式
     * @method $env
     * @param {}
    */
    Vue.prototype.$env = process.env.NODE_ENV

    /** 导出，下载处理文件流
     * @method $exportClick
     * @param {res：文件流，name ： 下载文件名}
    */
    Vue.prototype.$exportClick = function (res, name = "下载.zip") {
      const content = res
      const blob = new Blob([content])
      const fileName = name
      if ("download" in document.createElement("a")) { // 非IE下载
        const elink = document.createElement("a")
        elink.download = fileName
        elink.style.display = "none"
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      } else { // IE10+下载
        navigator.msSaveBlob(blob, fileName)
      }
    }

    /** 当res.code === 200 时
     * @method $restBack
     * @param res
     * @param fn
     * @param message
     * @param type
     */
    Vue.prototype.$restBack = function (res, fn = () => {}, message, type = "success") {
      if (res.code === 200) {
        this.$message({
          message: message || res.message,
          type: type
        })
        fn()
      }
    }
  }
}
