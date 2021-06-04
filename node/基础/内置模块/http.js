const http = require("http");
const https = require("https")
const querystring = require("querystring");
// let ht = http.createServer((req, res) => {
//   res.writeHead(200, { //200为状态码
//     'Access-Control-Allow-Origin': '*' //开启跨域
//     'content-type': 'text-plain' //默认是text-html,给前端返回的数据格式
//   })
//   res.write('<div>22</div>') //返回的内容
//   res.end()
// })


let ht = http.createServer((req, res) => {
  // 接受客户端请求
  // const url = req.url;
  // let data = "";
  // req.on("data", (chunk) => {
  //   data += chunk
  // })
  // req.on("end", () => {
  //   res.write(data)
  //   res.end();
  // })


  // 发送get请求
  // let data;
  // http.get("http://nodejs.org/dist/index.json", (result) => {
  //   let statusCode = result.statusCode;
  //   result.on("data", (chunk) => {
  //     data += chunk
  //   })
  //   result.on("end", () => {
  //     res.write(JSON.stringify(querystring.parse(data)));
  //     res.end()
  //   })
  // })

  // 发送post请求
  // const postData = querystring.stringify({
  //   name: 'cc',
  //   age: 18
  // })
  // const result = http.request({
  //   protocol: "http:", //协议
  //   hostname: "localhost", //主机名
  //   method: 'post', //请求方式
  //   port: "8080", //端口号
  //   path: "/data", //接口路径
  //   headers: { //请求时的头部信息
  //     'content-type': "application/x-www-form-urlencoded",
  //     "Content-Length": Buffer.byteLength(postData)
  //   }
  // }, (result) => {})
  // result.write(postData);
  // result.end();
  res.end();
})


ht.listen("8081", () => {
  console.log('start');
})