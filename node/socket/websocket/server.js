const http = require("http");
const fs = require("fs");
const websocket = require('ws') //第三方包



const socket = new websocket.Server({
  port: 8080
})

socket.on("connection", (client) => {

  client.on("open", () => { //client当前链接
    console.log('服务端开启了socket');
  })

  client.on("message", (data) => {
    socket.clients.forEach((item) => { //socket.clients所有的链接
      if (item.readyState === websocket.OPEN) {
        console.log(`接受客户端的消息${data}`);
        item.send(data)
      }
    })
  })

  client.on("close", () => {
    console.log('服务端关闭了socket');
  })


})
// p 65




http.createServer((req, res) => {
  const urlStr = req.url;
  switch (urlStr) {
    case "/index.html":
      fs.readFile("./static/index.html", (err, result) => {
        res.end(result)
      })
      break;
  }
}).listen("8081", () => {
  console.log('start');
})