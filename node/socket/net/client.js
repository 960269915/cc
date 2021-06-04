// 客户端
const net = require("net");

const client = net.createConnection({
  port: '6527'
}, () => {
  console.log('客户端链接成功');
  client.write("hello server")
}).on("error", (err) => {
  console.log(err);
}).on("close", () => {
  console.log("服务端关闭了");
})

client.on("data", (data) => {
  console.log(data.toString());
})

client.on("end", () => {
  console.log("断开链接");
})

// client.end() 断开链接