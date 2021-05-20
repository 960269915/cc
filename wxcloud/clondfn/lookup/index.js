// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
var $ = cloud.database().command.aggregate

// 云函数入口函数
// aggregate 聚合（理解为汇集一批数据，再对数据进行操作）
// lookup 多表查询
exports.main = async (event, context) => {
  return cloud.database().collection("goodsType").aggregate() //选择商品类型表
  .lookup({
    from:"goods", //关联上商品表
    localField: 'typeid', //商品类型表的关联字段，如果没有此字段，会匹配null
    foreignField: 'typeid', //商品表的关联字段，如果没有此字段，会匹配null
    as: 'newgoods' //匹配的结果作为newgoods相当于起个别名
  })
  // .replaceRoot({
  //   newRoot:$.mergeObjects([$.arrayElemAt(['$newgoods', 0]),'$$ROOT'])
  // })
  // .project({
  //   newgoods:0
  // })
  .end({
    success(res){
      return res
    },
    fail(err){
      return err
    }
  }) 
}



// 在云函数中，调用其他云函数
// exports.main = async (event, context) => {
//   return await cloud.callFunction({
//     name: 'sum',
//     data: {
//       x: 1,
//       y: 2,
//     }
//   })
// }