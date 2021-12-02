// 就是把自己写的less文件加载过来  src/assets/styles/cover.less

// 不要手动写绝对路径, 用代码来动态获取, 绝对地址
const path = require('path')
// console.log(__dirname) // 当前文件, 所在文件夹, 的绝对路径
// 盘符:/......../工程名字, 后面自己拼接 src/styles/cover.less
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 可以 通过 less 文件覆盖（文件路径为绝对路径）
          // __dirname全局变量 ,当前文件所在目录的绝对路径
          hack: `true; @import "${path.resolve(__dirname, 'src/assets/styles/cover.less')}";`
        }
      }
    }
  }
}
