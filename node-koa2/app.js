// supervisor app.js   cmpm install supervisor - g   启动node
const http = require("http");
const tools = require("./tools");
const url = require("url");
const routers = require("./router");
const server = http.createServer((req, res) => {
  // req.url; 请求的链接/后面的值
  // res.writeHead(200, { "Content-type": 'text/html;chart:"utf-8"' });
  // res.write('<head><meta charset="UTF-8"/></head>'); //设置返回中文
  // res.write("你好");
  // res.end();

 

  // 创建路由
  // 路由和静态服务器区别    http://localhost:3000/search 为路由   http://localhost:3000/inde.html 为静态服务器
  let pathName = url.parse(req.url).pathname;
  if (pathName != "/favicon.ico") {
    // 要做拦截，区分是路由还是静态资源访问
    if (pathName.indexOf(".") > 0 || pathName == "/") {
       //创建静态服务器
      tools.static(req, res, "wwwroot");
    } else {
      let newPath = pathName.replace("/","");
      try {
        routers[newPath](req, res)
      } catch (error) {
        routers["err"](req, res)
      }
    }
  }
});

server.listen("3000");
