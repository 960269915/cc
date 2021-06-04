const http = require("http");
const fs = require("fs");
const websocket = require('ws')



const socket = new websocket.Server({
  port: 8080
})

socket.on("connection", (client) => {

  client.on("open", () => {
    console.log('socket-start');
  })

  client.on("message", (data) => {
    socket.clients.forEach((item) => { //所有的链接
      if (item.readyState === websocket.OPEN) {
        item.send(data)
      }
    })
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