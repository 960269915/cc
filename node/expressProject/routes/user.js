var express = require('express');
var router = express.Router();
const userController = require("../controller/userController")
// 注册用户
router.post('/regUser', (req, res, next) => {
  userController.reg(req, res, next)
});

// 获取用户列表
router.get("/userList", (req, res, next) => {
  userController.getList(req, res, next)
})

// 删除用户
router.post("/delUser", (req, res, next) => {
  userController.delUser(req, res, next)
})
// 上传图片
router.post("/upload", (req, res, next) => {
  userController.upload(req, res)
})
// 登录
router.post("/login", (req, res) => {
  userController.login(req, res)
})
// 登出
router.post("/loginOut", (req, res) => {
  userController.loginOut(req, res)
})

// 生成token jsonwebtoken(jwk)
// token 和 session等的区别 token是json数据，可以跨平台   session如果用户过多，会不断往服务器存储，服务器负载
router.get("/token", (req, res) => {
  userController.token(req, res)
})


module.exports = router;