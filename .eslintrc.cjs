/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 单引号
        semi: false, // 无分号
        printWidth: 90, // 每行宽度至多90字符
        trailingComma: 'none', // 不加对象|数组最后逗号
        endOfLine: 'auto' // 换行符号
      }
    ],
    'vue/multi-word-component-names': 'off', // 关闭组件多单词命名
    'vue/no-setup-props-destructure': 'off', // 关闭 props 解构的校验
    'no-undef': 'error' // 添加未定义变量错误提示
  }
}
