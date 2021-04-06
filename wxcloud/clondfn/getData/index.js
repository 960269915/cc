// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ //如果有多个云开发环境，需要指定云函数id ,或者使用常量DYNAMIC_CURRENT_ENV，代表当前环境
  env:cloud.DYNAMIC_CURRENT_ENV  
}) 

// 云函数入口函数
exports.main = async (event, context) => {
    return cloud.database().collection('goods').get()
}