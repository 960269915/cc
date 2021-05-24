// 加密
const crypto = require("crypto");
const password = "caiyuntao";

let res = crypto
  .createHash("sha1") //加密算法
  .update(password, "utf-8") //需要加密的数据
  .digest("base64") //算数据的 hash 值

console.log(res);