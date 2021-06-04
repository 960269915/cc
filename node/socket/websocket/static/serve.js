// 静态资源服务器
const http = require("http")
const path = require("path")
const mime = require("mime")
const fs = require("fs")

function getData(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        resolve('文件解析错误')
      } else {
        resolve(data)
      }
    })
  })
}

async function readFile(pathName, res) {
  let ext = path.parse(pathName).ext || 'text-html'; //拿取路径扩展名
  let type = mime.getType(ext)
  let data
  if (fs.existsSync(pathName)) { //existsSync判断文件是否存在
    if (ext) { //有后缀名为文件，否则为文件夹
      data = await getData(pathName)
    } else {
      data = "文件解析错误"
      // data = await getData(path.join(pathName, '/index.html'))
    }
  } else {
    data = '文件不存在'
  }
  return {
    data,
    type
  };
}

http.createServer(async (req, res) => {
  let urlStr = req.url;
  if (urlStr == '/favicon.ico') {
    return
  }
  //path.join 拼接路径  (./平级目录 /下级目录  ..上级目录)
  //path.resolve  相当于cd目录操作
  let pathName = path.join(__dirname, './public', urlStr); //定义静态资源服务器地址
  // let test = path.resolve(__dirname, 'public', `./${urlStr}`)
  let data = await readFile(pathName, res)
  if (data.data == "文件不存在" || data.data == "文件解析错误") {
    (res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    }))
    res.end(data.data);
    return
  }
  res.writeHead(200, {
    "Content-type": `${data.type};charset=utf-8`
  })
  res.write(data.data)
  res.end()

}).listen("8085", () => {
  console.log("start");
})