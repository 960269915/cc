let db = wx.cloud.database().collection("goods")
Page({
  data: {
    list: [],
  },
  onLoad() {
    this.getList();
  },

  add() {
    // 数据的新增 =======
    wx.cloud.database().collection("goods")
      .add({
        data: {
          name: '闪电',
          price: 100
        }
      }).then((res) => {
        this.getList();
        console.log(res);
      })
  },
  getInfo() {
    // 查询单条数据 doc参数为数据ID
    wx.cloud.database().collection("goods")
      .doc("79550af26059f8120b8bbd40732d413c").get().then((res) => {
        console.log(res);
      })
  },
  getList() {
    // 查询多条数据
    wx.cloud.database().collection("goods")
      .where({ //where 查询条件
        // name:"苹果"
      })
      .get().then((res) => {
        this.setData({
          list: res.data
        })
      })
  },
  update() {
    // 更新单条数据
    wx.cloud.database().collection("goods")
      .doc("b00064a7605a031b0b70e224211ee466") //update的数据，必须是有oppenid的
      .update({
        data: {
          price: 100000000
        }
      })
      .then((res) => {
        this.getList();
        console.log(res);
      })
  },
  remove(e) {
    // 删除单条
    let id = e.target.dataset.id;
    wx.cloud.database().collection('goods')
      .doc(id)
      .remove()
      .then((res) => {
        console.log(res);
        this.getList();
      })
      .catch((err) => {
        console.log(err);
      })
  },
  sort(){
    // 排序
    let db = wx.cloud.database().collection('goods'); //可将数据库赋值给变量
    db.orderBy("price","desc")
    .get()
    .then((res)=>{
      this.setData({
        list:res.data
      })
    })
    // wx.cloud.database().collection('goods')
    // .orderBy("price","desc") //price 排序字段  asc升序 desc降序
    // .get()
    // .then((res)=>{
    //   this.setData({
    //     list:res.data
    //   })
    // })
  },
  limit(){
    // 返回指定条数
    db.limit(3)
    .get()
    .then(res=>{
      this.setData({
        list:res.data
      })
      console.log(res);
    })
  },
  skip(){
    // 跳过n条
    db.skip(1)
    .get()
    .then(res=>{
      console.log(res);
    })
  }
})
