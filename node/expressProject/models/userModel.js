// model层，操作数据库
const userdb = require("../utils/userdb")
const imgdb = require("../utils/imgdb")

const reg = async (user) => {
  let {
    name,
    password
  } = user;

  const users = new userdb({
    name,
    password
  })
  let result = users.save(); //返回存储结果，返回promise,mongoose的操作，都返回promise
  return result;
}

const getList = () => {
  return userdb.find()
}

const delUser = (name) => {
  return userdb.deleteOne({
    name
  })
}

const saveImg = (url, date) => {
  const imgs = new imgdb({
    url,
    date
  })
  return imgs.save()
}


// 查找用户是否存在
const findUser = (username) => {
  return userdb.findOne({
    name: username
  })
}


module.exports = {
  reg,
  findUser,
  getList,
  delUser,
  saveImg
};