const http = require("http");
const fs = require("fs");
const mime = require("mime") //返回文件类型库 要安装
// console.log(mime.getType(".txt"));


const app = http.createServer((req, res) => {
  const urlStr = req.url;
  switch (urlStr) {
    case "/":
      fs.readFile("./static1/home.html", (err, result) => {
        res.end(result)
      })
      break;
    case "/home.js": //html里面引用了其他资源，也会发起请求，需要处理
      fs.readFile("./static1/home.js", (err, result) => {
        res.end(result)
      })
  }
})

app.listen("8085", () => {
  console.log("start");
})