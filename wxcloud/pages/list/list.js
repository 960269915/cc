// pages/list/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: {
      pageIndex: 1,
      pageSize: 30
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },
  add() {
    wx.cloud.database().collection("goods").add({
      data: {
        name: '闪电',
        price: 100
      }
    }).then(res => {
      console.log(res);
    })
  },
  getList() {
    wx.cloud.callFunction({
      name: 'getData',
      data: {
        ...this.data.page
      }
    }).then(res => {
      if (res.result.res.data.length) {
        this.setData({
          list: this.data.list.concat(res.result.res.data)
        })
      } else {
        wx.showToast({
          icon: "none",
          title: '暂无更多了',
        })
      }

    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      page: {
        pageIndex: 1,
        pageSize: 30
      },
      list: []
    })
    this.getList();
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      page: {
        pageIndex: this.data.page.pageIndex+1,
        pageSize: 30
      },
    })
    this.getList();
  }
})