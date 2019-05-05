module.exports = {
  // 别人可以直接使用你配置好的ESLint
  root: true,
  // 指定解析器
  parser: 'babel-eslint',
  // 指定解析器选项
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  },
  extends: 'standard',
  // 指定脚本的运行环境
  env: {
    "browser": true,
    "node": true,
    'es6': true,
  },
  // 脚本在执行期间访问的额外的全局变量
  globals: {
    localStorage: true,
    alert: true,
    Image: true,
    history: true,
    location: true
  },
  // 启用的规则及其各自的错误级别
  rules: {
    // function 的圆括号之前是否使用空格
    // @off 不关心
    'space-before-function-paren': 0
  }
};