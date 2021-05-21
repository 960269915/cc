const http = require("http");
const https = require("https")
const querystring = require("querystring");
// let ht = http.createServer((req, res) => {
//   res.writeHead(200, { //200为状态码
//     'content-type': 'text-plain' //默认是text-html,给前端返回的数据格式
//   })
//   res.write('<div>22</div>') //返回的内容
//   res.end()
// })


let ht = http.createServer((req, res) => {
  let data;
  http.get("http://nodejs.org/dist/index.json", (result) => {
    let statusCode = result.statusCode;
    result.on("data", (chunk) => {
      data += chunk
    })
    result.on("end", () => {
      res.write(JSON.stringify(querystring.parse(data)));
      res.end()
    })
  })

  // p20


  // const url = req.url;
  // let data = "";
  // // 获取post发送的请求参数 参数必须放在body里面
  // req.on("data", (chunk) => {
  //   data += chunk
  // })
  // req.on("end", () => {
  //   res.write(data)
  //   res.end();
  // })
})


ht.listen("8085", () => {
  console.log('start');
})