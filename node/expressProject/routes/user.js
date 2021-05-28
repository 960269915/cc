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



module.exports = router;