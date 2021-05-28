const express = require('express')
const app = express()
const router = require("./router/index")
// 静态服务器中间件，访问浏览器http://localhost:3000/默认地址，自动进入index.html
app.use(express.static("./public"))
// 处理post的表单数据 x-www-form-urlencoded
app.use(express.urlencoded({
  extended: false
}));
// 处理post提交json数据
app.use(express.json());

app.use("/", router)

app.listen(3000, () => console.log(`Example app listening on port port!`))