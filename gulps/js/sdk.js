     const jsApiList = ['startRecord', 'stopRecord', 'playVoice', 'chooseImage', 'checkJsApi', 'uploadImage', 'uploadVoice']

     function getconfig() {
       $.ajax({
         type: "GET",
         url: `http://118.24.233.39:8184/weixin/jsconfig?url=${window.location}`,
         success(res) {
           console.log(res);
           wx.config({
             debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
             appId: res.data.sign.appId, // 必填，公众号的唯一标识
             timestamp: res.data.sign.timestamp, // 必填，生成签名的时间戳
             nonceStr: res.data.sign.nonceStr, // 必填，生成签名的随机串
             signature: res.data.sign.signature, // 必填，签名
             jsApiList: jsApiList // 必填，需要使用的JS接口列表
           });
           // wx.ready(function () {
           //   console.log(111);
           // });
         }
       });
     }
     getconfig();





     let sdk = {
       startRecord() {
         wx.startRecord();
       },
       stopRecord() {
         return new Promise((reject, resolve) => {
           wx.stopRecord({
             success: function (res) {
               reject(res.localId);
             }
           });
         })
       },
       uploadVoice(id) {
         return new Promise((reject, resolve) => {
           wx.uploadVoice({
             localId: id.toString(), // 需要上传的音频的本地ID，由stopRecord接口获得
             isShowProgressTips: 1, // 默认为1，显示进度提示
             success: function (res) {
               reject(res.serverId)
             }
           });
         })
       },
       cameraImage() {
         return new Promise((reject, resolve) => {
           wx.chooseImage({
             count: 1, // 默认9
             sizeType: ['compressed'],
             sourceType: ['camera'],
             success: function (res) {
               reject(res.localIds);
             }
           });
         })
       },
       chooseImage() {
         return new Promise((reject, resolve) => {
           wx.chooseImage({
             count: 1, // 默认9
             sizeType: ['compressed'],
             sourceType: ['album'],
             success: function (res) {
               reject(res.localIds)
             }
           });
         })
       },
       uploadImage(localIds) {
         return new Promise((reject, resolve) => {
           wx.uploadImage({
             localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
             isShowProgressTips: 1, // 默认为1，显示进度提示
             success: function (res) {
               reject(res.serverId)
             }
           })
         })
       },
       media(mediaId) {
         return $.ajax({
           type: 'Get',
           url: `http://118.24.233.39:8184/live/chat/media?mediaId=${mediaId}`
         })
       }
     }