module.exports = {
  env: {
    // 定义了环境
    browser: true, // 支持浏览器环境
    es2021: true, // 使用 ES2021 特性
    node: true, // 支持 Node.js 环境
  },
  extends: [
    // 继承了下面两个规则集
    'eslint:recommended', // ESLint 推荐的基本规则
    'plugin:vue/vue3-essential', // Vue3 官方推荐的规则
  ],
  overrides: [
    // 定义了覆盖的配置
  ],
  parserOptions: {
    // 配置解析选项
    ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
    sourceType: 'module', // 使用 ES6 模块
  },
  plugins: [
    // 加载了一个插件
    'vue',
    'prettier',
  ],
  rules: {
    // 配置各种规则
    'vue/multi-word-component-names': 'off', // 禁用 vue/multi-word-component-names 规则
    indent: [
      // 使用 2 个空格作为缩进
      'error',
      2,
    ],
    'linebreak-style': [
      // 使用 Unix 换行符
      'error',
      'unix', // windows
    ],
    quotes: [
      // 使用单引号
      'error',
      'single',
    ],
    semi: [
      // 不使用分号结尾
      'error',
      'never',
    ],
    'prettier/prettier': [
      'error',
      {
        // 使用单引号
        singleQuote: true,
        // 在对象或数组最后一个元素后面添加逗号（可选值为 "none"、"es5" 或 "all"）
        trailingComma: 'es5',
        // 打印缩进使用的空格数，本例中为 2。
        tabWidth: 2,
        // 不要在语句末尾添加分号
        semi: false,
        // 在 JSX 中使用单引号
        jsxSingleQuote: true,
      },
    ],
  },
  globals: {
    uni: true,
  },
}
