module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: 'standard',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    plugins: [
        'react'
    ],
    settings: {
        react: {
            createClass: 'createReactClass', // 创建组件的工厂方法，默认为 'createReactClass'
            pragma: 'React', // React 的指令名称，默认为 'React'
            version: '15.0' // React 的版本号，默认为最新的稳定版
        }
    },
    rules: {
        "arrow-parens": 0,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "eol-last": 0,
        "semi": ["error", "always"],
        "space-before-function-paren": 0,
        "no-useless-escape": 0,
        "no-tabs":"off",
        "no-unused-vars": "off",
        "camelcase": "off"
    }
};