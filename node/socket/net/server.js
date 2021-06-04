// 服务端

const net = require("net"); //node自带的

const server = net.createServer((socket) => {
  socket.write("hello client") //发送给客户端
  socket.on("data", (data) => {
    console.log(data.toString());
  })
  // socket.end() //关闭链接
}).on("error", (err) => {
  console.log(err);
}).on("close", () => {
  console.log('用户端关闭了');
})



server.listen('6527', () => {
  console.log('server on ', server.address());
})

// 聊天是每个用户都和服务端建立了一个socket 当其中一个socket发送消息,服务端把消息发送到其他socket