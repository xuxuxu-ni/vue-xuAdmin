/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2019-02-01
 * Description: 文件描述
 */
const modulesFiles = require.context("./apis", true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules = Object.assign(modules, value.default)
  return modules
}, {})

export default modules
