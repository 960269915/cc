const fs = require("fs");
const fsPromise = require("fs").promises
//===================================== 文件夹操作
// 创建文件夹
// fs.mkdir("static", (err) => { //node的回调，都是错误优先
//   if (err) {
//     return
//   }
//   console.log("创建文件夹成功");
// })

// 修改文件名称
// fs.rename("./static", "static1", () => {
//   console.log("修改文件成功");
// })

// 删除文件夹
// fs.rmdir("./static1", (err) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log("删除文件夹成功");
// })

// 读取文件夹
// fs.readdir("./static1", (err, res) => {
//   console.log(res);
// })


// ====================================文件的操作
// 创建文件
// fs.writeFile("./static1/log.txt", "我是写入的内容", (err) => {
//   console.log('finsh');
// })
//  追加内容
// fs.appendFile("./static1/log.txt", "我是追加的内容", () => {})
//  删除文件
// fs.unlink("./static1/log.txt", () => {
//   console.log('del');
// })
// 读取操作(返回buffer)
// fs.readFile("./static1/log.txt", "utf-8", (err, res) => {
//   console.log(res);
// })

// 可以用promise类型读取文件
// fsPromise.readFile("./static1/log.txt").then(res => {
//   console.log(res.toString());
// })  