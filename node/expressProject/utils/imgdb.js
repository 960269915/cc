const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://127.0.0.1:27017/cc", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) //连接数据库

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

let imgSchema = mongoose.Schema({ //定义模型
  url: String,
  date: Date
})

let Img = conn.model("imgs", imgSchema) //使用模型

module.exports = Img