const http = require("http");
const tools = require("./tools");
const ejs = require("ejs");
const url = require("url");
const server = http.createServer((req, res) => {
  // req.url; 请求的链接/后面的值
  // res.writeHead(200, { "Content-type": 'text/html;chart:"utf-8"' });
  // res.write('<head><meta charset="UTF-8"/></head>'); //设置返回中文
  // res.write("你好");
  // res.end();

  // // 创建静态服务器
  tools.static(req, res, "wwwroot");
  // 创建路由
  let pathName = url.parse(req.url).pathname;
  console.log(pathName);
  if (pathName == "/login") {
    let ejsData = "我是动态的ejs内容";
    ejs.renderFile("./view/login.ejs", { ejsData: ejsData }, (err, data) => {
      tools.send(res, data);
    });
  } else if (pathName == "/search") {
    // 获取get传值
    // let params = url.parse(req.url, true).query;
    tools.send(res, '111');
  } else {
    tools.send("404");
  }
});

server.listen("3000");
