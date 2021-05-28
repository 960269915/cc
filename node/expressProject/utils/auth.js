// 鉴权
const auth = (req, res, next) => {
  if (req.url == "/login") {
    next();
    return;
  }
  if (req.session.username) {
    // 登录没有过期
    next();
  } else {
    //登录过期
    res.send("登录过期")
  }
}

module.exports = auth;