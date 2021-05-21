// commonjs规范 是使用在后端的  浏览器不支持  webpack使用common.js (同步加载的,因为服务端文件在本地，速度较快)
// 每个文件就是一个模块， 有自己的作用域， 文件中的变量、 函数、 类等都是对其他文件不可见的
// 3、引用模块
let name = require("./test.js");
name = 2; //name只是test.js里面的值的拷贝，这里就算更改了，都不会改变test.js内部的值




// AMD ================（异步模块，浏览器使用的，会加载服务器端的模块，所以异步不阻塞）
// 1、定义模块
// 独立模块
// define(function () {
//   return {
//     //返回接口
//   }
// })
//非独立模块
// define(['module1', 'module2'], function (m1, m2) {
//   // 此模块依赖module1， module2
//   // function 模块加载成功以后的回调，m1, m2模块加载成功后返回的值
//   return {
//     //返回接口
//   }
// })

// 2、加载模块
// require(['module1,module1', function () {
//   // .... 
// }])


// ES6 ================ module 
// 模块内的变量，不会被添加到window
// 模块顶级作用域的 this 值为 undefined
// 外包想要访问，必须导出

// 1、定义模块
// export var color = "red";
// 重命名导出的名称
// export {
//   sum as add
// }
// 2、引入
// import {
//   a
// } from "other.js"
//  引入全部
// import * as example from './example.js'