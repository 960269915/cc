// node模块化
const fs = require("fs");
const path = require("path");

// 获取content-type
function getLastName(name) {
  let data = fs.readFileSync("./data/mime.json");
  return JSON.parse(data.toString())[name];
}

function send(res, val, type = "text/html", status = 200) {
  res.writeHead(status, { "Content-type": `${type};chart:"utf-8"` });
  res.write(val);
  res.end();
}

// 创建静态服务器
function static(req, res, staticPath) {
  let pathName = req.url;
  pathName = pathName === "/" ? "/index.html" : pathName;
  if (pathName != "/favicon.ico") {
    // 访问服务器静态资源(注意html的引入的css、js等资源的路径问题)
    try {
      let data = fs.readFileSync(`./${staticPath}/${pathName}`);
      let lastName = getLastName(path.extname(pathName));
      send(res, data, lastName);
    } catch (error) {}
  }
}

module.exports = {
  send,
  getLastName,
  static,
};
