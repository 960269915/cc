const express = require('express')
const app = express()
const router = require("./router/index")


// 处理post的表单数据
app.use(express.urlencoded({
  extended: false
}));

app.use("/", router)

app.listen(3000, () => console.log(`Example app listening on port port!`))

// p48