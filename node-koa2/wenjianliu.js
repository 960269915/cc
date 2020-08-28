// 对大型文件的读取或者写入，使用文件流
const fs = require("fs");



// --------------------------读取文件
let readStream = fs.createReadStream("./wwwroot/txt.txt"); //创建读取流路径
let str = "";
let count = 0;
// 开始读取
readStream.on("data", (data) => {
  str += data;
  count++;
});
// 读取结束
readStream.on("end", () => {
  console.log(str);
  console.log(count);
});
// 读取出错
readStream.on("error", (err) => {
  console.log(err);
});

// -------------------------写入文件
let writeStream = fs.createWriteStream('./wwwroot/txt.txt');
let data = '我是要被写入的数据';
writeStream.write(data,'UTF8');
writeStream.end();//标记写入完成
writeStream.on('finsh',()=>{
    console.log('写入完成');
})


// ---------------------------复制文件，使用管道流 pipe
let readStreamImg = fs.createReadStream('./wwwroot/img/1.jpg');
let writeStreamImg = fs.createWriteStream('./wwwroot/img/copy.jpg');
readStreamImg.pipe(writeStreamImg);