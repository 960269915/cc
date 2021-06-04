// 对大型文件的读取或者写入，使用文件流
const fs = require("fs");
const zlib = require("zlib"); //压缩

const gzip = zlib.createGzip();

const readStream = fs.createReadStream("./static1/log.txt"); //创建读的流

const writeStream = fs.createWriteStream("./static1/newLog.gzip"); //创建写的流

// 可以对文件做一系列操作
readStream
  .pipe(gzip)
  .pipe(writeStream)



// // --------------------------读取文件
// let readStream = fs.createReadStream("./wwwroot/txt.txt"); //创建读取流路径
// let str = "";
// let count = 0;
// // 开始读取
// readStream.on("data", (data) => {
//   str += data;
//   count++;
// });
// // 读取结束
// readStream.on("end", () => {
//   console.log(str);
//   console.log(count);
// });
// // 读取出错
// readStream.on("error", (err) => {
//   console.log(err);
// });

// // -------------------------写入文件
// let writeStream = fs.createWriteStream('./wwwroot/txt.txt');
// let data = '我是要被写入的数据';
// writeStream.write(data, 'UTF8');
// writeStream.end(); //标记写入完成
// writeStream.on('finsh', () => {
//   console.log('写入完成');
// })