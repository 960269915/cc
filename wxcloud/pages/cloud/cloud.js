
Page({
    onLoad(){
      // 云函数调用
      wx.cloud.callFunction({
        name:"getData" //getData为云函数文件名称
      }).then(res=>{
        // console.log(res);
      })
    },
    update(){
      wx.cloud.callFunction({
        name:'update',
        data:{ //向云函数传递数据，云函数的event接受数据
          id:'28ee4e3e605b44b20c61a3416b18d57a',
          price:30
        }
      }).then(res=>{
        console.log(res);
      })
    }
})