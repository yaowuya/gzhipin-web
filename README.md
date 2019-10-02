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
rccp + tab键 - - 创建一个带有PropTypes和ES6模块系统的React组件类

4、在package.json文件中使用proxy做代理，解决跨域问题

5、当组件的state或者props发生改变的时候，render函数就会重新执行，页面就会从新被渲染，因为页面是由render函数渲染出来的。同时，当父组件的render函数被运行时，它的子组件的render都将被重新运行一次

6、刷新浏览器或者打开新的窗口，相当于重新开启应用，必定会从最初的状态重新开始！(redux的值也会恢复到最初状态)要想保存值要么向后台发请求，做出真实的改变，要么将值本地存储，从本地存储去取值。

7、组件链接中附带的参数，可以通过this.props.match.params来获取
