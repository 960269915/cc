// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
// event 包含 appId openId 以及调用时传递的参数
// context 为当前云函数上下文对象
exports.main = async (event, context) => {
    return cloud.database().collection('goods')
    .doc(event.id)
    .update({
        data:{
          price:event.price
        }
    })
}