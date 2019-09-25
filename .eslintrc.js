module.exports = {
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [0],
        "quotes": [0],
        // @off 没必要限制
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        "no-unused-vars": [0],
        // 关闭语句强制分号结尾
        "semi": [0],
        //空行最多不能超过100行
        "no-multiple-empty-lines": [0, {"max": 100}],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0],
        "no-undef":[0],
        "no-case-declarations":[0],

    }
}
