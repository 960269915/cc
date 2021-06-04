// controller层，处理逻辑
const userModel = require("../models/userModel")
const formidable = require('formidable');
const fs = require("fs");
const path = require("path");
const randomstring = require("randomstring");
const jsonwebtoke = require("jsonwebtoken")

const reg = async (req, res, next) => {
  const data = req.body;
  if (data.name && data.password) {
    let findVal = await userModel.findUser(data.name);
    if (findVal) {
      res.send("已存在用户")
    } else {
      userModel.reg(data).then(() => {
        res.send("新建用户信息成功")
      }).catch(err => {
        res.send(err)
      })
    }
  } else {
    res.send("数据不正确")
  }
}

const getList = async (req, res, next) => {
  let result = await userModel.getList();
  res.send(result)
}

const delUser = async (req, res, next) => {
  let delVal = req.body.name;
  if (delVal) {
    let findVal = await userModel.findUser(delVal);
    if (findVal) {
      userModel.delUser(delVal).then(() => {
        res.send("删除成功")
      }).catch(err => {
        res.send("删除失败")
      })
    } else {
      res.send("暂无此人员")
    }
  } else {
    res.send("数据不正确")
  }
}

const login = async (req, res) => {
  if (req.body.name == '' || req.body.password == '') {
    res.send("账号或者密码错误");
    return;
  }
  let findVal = await userModel.findUser(req.body.name);
  if (findVal) {
    if (req.body.password != findVal.password) {
      res.send("密码错误")
      return;
    }
    // let session = randomstring.generate(); //创建一个随机数
    // res.set("Set-Cookie", `sessionId=${session};Path=/;HttpOnly`) //给前端设置cookie,设置以后，前端所有的请求，都会携带cookie
    // 使用cookie-session中间件设置session
    req.session.username = req.body.name;
    res.send({
      msg: "登录成功"
    })
  } else {
    res.send("账号错误")
  }
}

const token = (req, res) => {
  // hahah 为加密的秘钥，自己随便定义（有秘钥的叫对称加密，不是最安全）
  // 非对称加密 比如git 有私钥和公钥  公钥是根据私钥生成的 
  let tokenVal = jsonwebtoke.sign({
    username: 12223
  }, "haha")
  // 解密 
  let decoded = jsonwebtoke.verify(tokenVal, 'haha')
  res.send(decoded)
}

const loginOut = (req, res) => {
  req.session = null; //移除session
  res.send("登出成功")
}


const upload = async (req, res) => {
  const form = formidable({
    multiples: true
  });
  form.parse(req, (err, fields, files) => {
    // fields 除了上传图片的其他数据  files上传的文件
    let readStream = fs.createReadStream(files.img.path);
    const writePath = path.join(__dirname, '../public/images/');
    let writeStream = fs.createWriteStream(writePath + new Date() + files.img.name);
    readStream.pipe(writeStream);
    writeStream.on('finish', () => {
      userModel.saveImg(`/images/${files.img.name}`, new Date()).then(() => {
        console.error('写入已完成');
        res.send(`<img src="http://${req.headers.host}/images/${files.img.name}" width="200">`);
      }).catch((err) => {
        res.send("保存数据库失败")
      })
    })
    writeStream.on('error', () => {
      console.error('写入失败');
    })
  })
}

module.exports = {
  reg,
  getList,
  delUser,
  upload,
  login,
  loginOut,
  token
}