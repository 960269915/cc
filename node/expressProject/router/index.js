const express = require("express");
// 路由中间件
const router = express.Router();

const {
  indexfn
} = require('../controller/index');

// router.get("/", (req, res, next) => { //回调函数，也是中间件
//   // express 自动处理了数据 且返回数据时，不需要设置content-type等
//   const params = req.query; //拿到链接拼接的数据对象name=cc&age=18此类数据
//   res.send(params)
// })

router.get("/", indexfn)
router.post("/update", (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.send(data)
})

module.exports = router;