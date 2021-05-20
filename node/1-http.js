// supervisor app.js   cmpm install supervisor - g   启动node
const http = require("http");
http.createServer((req, res) => {
  let url = req.url;
  res.write(url);
  res.end()
}).listen("8085", () => {
  console.log('server-start');
})

// 8p

// npm i -D 开发环境 
// npm i -S 生成环境
// -g  全局安装