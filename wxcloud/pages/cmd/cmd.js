let db = wx.cloud.database();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  onLoad(){
    this.getList();
  },
  getList(){
    db.collection('goods').get().then(res=>{
      this.setData({
        list:res.data
      })
    })
  },
  cmd1(){
    // gt 大于  查询比较操作符
    db.collection('goods').where({
      price:db.command.gt(50)
    })
    .get()
    .then(res=>{
      this.setData({
        list:res.data
      })
      console.log(res);
    })
  },
  cmd2(){
    // and多条件查询 查询逻辑操作符
    db.collection('goods')
    .where(db.command.and(
      [
        {
          price:db.command.gt(0)
        },
        {
          price:db.command.lt(100)
        }
      ]
    ))
    .get()
    .then((res)=>{
      this.setData({
        list:res.data
      })
      console.log(res);
    })
  }
})