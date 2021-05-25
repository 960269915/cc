// 对大型文件的读取或者写入，使用文件流
const fs = require("fs");






// ---------------------------复制文件，使用管道流 pipe
let readStreamImg = fs.createReadStream('./wwwroot/img/1.jpg');
let writeStreamImg = fs.createWriteStream('./wwwroot/img/copy.jpg');
readStreamImg.pipe(writeStreamImg);