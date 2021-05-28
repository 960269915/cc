const mongoose = require("mongoose");

const conn = mongoose.createConnection("mongodb://127.0.0.1:27017/cc", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}) //连接数据库

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

let userSchema = mongoose.Schema({ //定义模型
  name: String,
  password: String
})

let User = conn.model("users", userSchema) //使用模型,此处在cc数据库，创建了user表

module.exports = User


// let newuser = new User({ //创建数据
//   name: "cc",
//   password: "123"
// })

// newuser.save(); //保存数据