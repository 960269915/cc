Page({
  lookup(){
    wx.cloud.callFunction({
      name:"lookup" //getData为云函数文件名称
    }).then(res=>{
      console.log(res);
    })
  }
})