Page({
  onLoad(){

  },
  chooseImg(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success :res=> {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        this.upload('图片.png',tempFilePaths[0])
      }
    })
  },
  chooseVideo(){
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,
      camera: 'back',
      success:(res)=> {
        this.upload('视频.mp4',res.tempFilePath)
      }
    })
  },
  upload(name,file){
    wx.cloud.uploadFile({
      cloudPath: name, //上传到小程序服务器后的文件名称
      filePath: file, // 文件路径
    }).then(res => {
      // get resource ID
      console.log(res.fileID)
    }).catch(error => {
      // handle error
    })
  }
})



// 66