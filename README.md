### 笔记
1、webstorm报错: ESLint: TypeError: this.cliEngine is not a constructor
业务背景
>更新了package.json里面的elint版本,重新下载了依赖包后,IDE就报这个错

问题解决
>升级webstorm到最新版本,或者把eslint降级到5.x版本

原因分析
>就是ide和eslint版本不兼容导致的

2、react所依赖的包的版本很重要，如果版本不对，会有各种错误，以下是固定的版本
```js
"react-scripts": "^1.1.4"
"less": "^2.7.3"
"react-app-rewired": "^1.5.2"
```
3、rcc + tab键 - - 用ES6模块系统创建一个React组件类
