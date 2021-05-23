const events = require("events");
class Myevent extends events {};
const ccevent = new Myevent();
// 作用 类似于观察者模式，可以全局监听事件，派发事件等

// 监听事件
ccevent.on("play", (value) => {
  console.log(value);
})

// 触发事件
ccevent.emit("play", 22);