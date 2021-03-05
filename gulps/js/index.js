 $(function () {

   // 用户信息
   let user = {
     id: '1',
     name: 'cc',
     photo: './img/photo.png',
     type: 'admin' //观看者watch 主播admin
   }

   var chart = new Chat('chat1', '1');
   chart.push();
   var chart2 = new Chat('chat2', '2')
   chart2.push();


   // 初始化表情
   function emojifn() {
     let rs = []
     var str = escape(face)
     var reg = /(%\w{5}){2}/g
     var match = null
     while (match = reg.exec(str)) {
       // console.log(match)
       rs.push(unescape(match[0]))
     }
     let ulele = $("<ul></ul>")
     let listr = '';
     rs.forEach((item) => {
       listr += `<li>
                ${item}
              </li>`
     })
     ulele.append(listr);
     $("#icon-box").append(ulele);
   }
   emojifn();


   let navIndex;
   // 导航切换
   $(".nav-item").on("click", function () {
     $(this)
       .addClass("nav-item-active")
       .siblings()
       .removeClass("nav-item-active");
     let imginfo = $(this).find("img");
     $(".nav-item-img").each(function (i) {
       $(this).attr("src", `./img/${i + 1}-dis.png`);
     });
     let index = navIndex = $(this).data("index");
     if (index == 1) {
       if (user.type == "admin") {
         $("#send-box-admin").show();
       } else {
         $("#content1").css({
           height: "58vh"
         })
       }
       $("#send-box-user").hide();
     }
     if (index == 2) {
       $("#send-box-admin").hide();
       $("#send-box-user").show();
     }
     if (index == 3) {
       $("#send-box-admin").hide();
       $("#send-box-user").hide();
     }
     let src = "./img/" + index + ".png";
     $(imginfo).attr("src", src);
     $(".content-box").hide();
     $(`#content${index}`).show();
     $(".content-box").eq(2).css({
       height: "58vh"
     })
   });

   $(".nav-item").eq(0).click();


   // 弹幕开关切换
   $("#mask-switch").on("click", function () {
     let img = $(this).find("img");
     if (img.attr("src") == './img/open.png') {
       img.attr("src", "./img/close.png")
       $("#mask-box").hide();
     } else {
       img.attr("src", "./img/open.png")
       $("#mask-box").show();
     }
   })


   // 弹幕渲染
   let mask = {
     tmp: $("#mask-wrap"),
     addMask(text = '测试') {
       let p = $(`<p class="mask-item"><span class="mask-item-text">${text}</span></p>`);
       this.tmp.prepend(p);
       this.move();
     },
     move() {
       let maskH = $("#mask-wrap").height();
       let h = $('.mask-item').height();
       let boxh = $('#mask-box').height();
       if (maskH > boxh) {
         this.tmp.css({
           top: (boxh - maskH) + 'px'
         })
       }
     }
   }


   function formatTen(num) {
     return num > 9 ? (num + "") : ("0" + num);
   }

   function formatDate(date) {
     var date = new Date(date)
     var year = date.getFullYear();
     var month = date.getMonth() + 1;
     var day = date.getDate();
     var hour = date.getHours();
     var minute = date.getMinutes();
     var second = date.getSeconds();
     // return year + "-" + formatTen(month) + "-" + formatTen(day) + " " + formatTen(hour) + ":" + formatTen(minute) + ":" + formatTen(second);
     return formatTen(month) + "/" + formatTen(day) + " " + formatTen(hour) + ":" + formatTen(minute) + ":" + formatTen(second);

   }


   // 消息渲染
   let msg = {
     // url 用户头像链接, name用户名字, text发送的文字, lr控制左右
     text(url, name, text, lr) {
       let text_str = $(`<div id="msg-box" class="${lr == 'left' ?'flex':'' }"">
                   <img class="user-photo ${lr == 'left' ?'':'fr' }" src="${url}" alt="">
                   <div class="msg-wrap ${lr == 'left' ?'left':'fl right' } ">
                     <p class="user-name ${lr == 'right' ? 'tr' : '' }">${name} 
                      <span class="admin-tip">${user.type == "admin" ? '管理员' : ''}</span>
                      ${formatDate(new Date())}</p>
                     <p class="msg-text ${lr == 'left' ? 'admin-color' : 'user-color' }">${text}</p>
                   </div>
                   </div`)
       return text_str
     },
     // url 用户头像链接, name用户名字, imgurl发送的图片链接, lr控制左右
     img(url, name, imgurl, lr) {
       let img_str = $(`<div id="msg-box" class="${lr == 'left' ?'flex':'' }"">
                   <img class=" user-photo ${lr=='left' ?'':'fr' }" src="${url}" alt="">
                   <div div class = "msg-wrap ${lr == 'left' ?'left':'fl right' } " >
                     <p class="user-name ${lr == 'right' ? 'tr' : '' }">${name} 
                     <span class="admin-tip">${user.type == "admin" ? '管理员' : ''}</span>
                     ${formatDate(new Date())}</p>
                     <div class="img-box"><img class="msg-img" src="${imgurl}" alt=""></div>
                   </div>
                   </div`)
       return img_str
     },
     audio(url, name, audiourl, lr) {
       let audio_str = $(`<div id="msg-box" class="${lr == 'left' ?'flex':'' }"">
                   <img class=" user-photo ${lr=='left' ?'':'fr' }" src="${url}" alt="">
                 <div div class = "msg-wrap ${lr == 'left' ?'left':'fl right' } " >
                   <p class="user-name ${lr == 'right' ? 'tr' : '' }">${name} 
                   <span class="admin-tip">${user.type == "admin" ? '管理员' : ''}</span>
                   
                   ${formatDate(new Date())}</p>
                   <div class = "audio-box ${lr == 'left' ?'':'right_audio' }" >
                     <img src = "../img/yuyin.png">
                     <audio class="audio " src="${audiourl}" controls="controls"></audio>
                   </div>
                   </div> 
                 </div>
                 </div`)
       return audio_str
     }
   }

   let imgsrc = '';
   $("#msg-box-wrap").on("click", '.img-box', function () {
     let img = $(this).find("img");
     imgsrc = img.attr("src");
     $("#img-show").show().css({
       display: 'flex'
     }).find("img").attr("src", imgsrc)
   })

   $("#img-show").click(function () {
     $(this).hide();
   })

   //  let textele = msg.audio('', 'cc', '文字', 'right');
   //  $("#msg-box-wrap").append(textele)


   // http://read.szwangtuo.com:8080/mp3/05-1.mp3
   // 语音点击播放
   $("#content").on("click", '.audio-box', function () {
     try {
       let audioele = $(this).find("audio");
       $(".audio").each((index) => {
         if ($(".audio").eq(index).attr("src") == audioele.attr("src")) {
           if (audioele[0].paused) { //判断当前的状态是否为暂停，若是则点击播放，否则暂停
             audioele[0].play();
           } else {
             audioele[0].pause();
           }
         } else {
           $(".audio").get(index).pause();
         }
       })
     } catch (error) {
       alert(error)
     }
   })

   // 主播添加按钮
   let contenth = $("#content1").height();
   $("#addbtn").on("click", function () {
     let h = $('.fnbox').height();
     if ($('.fnbox').css('display') == 'none') {
       $('.fnbox').show().css({
         display: "flex"
       });
       $("#content1").height($("#content1").height() - h)
       $("#mask-switch,#mask-box").hide();
     } else {
       $('.fnbox').hide();
       $("#content1").height(contenth)
       $("#mask-switch").show();
       let status = $("#mask-switch").find("img").attr("src");
       if (status == "./img/open.png") {
         $("#mask-box").show();
       }
     }
   })

   // 用户添加表情按钮
   let content2h = $("#content2").height();
   $("#addicon").on("click", function () {
     let tf = $(this).attr("disabled");
     if (tf) {
       $('.icon-box').hide();
       $("#content2").height(content2h)
       return
     }
     let h = $('.icon-box').height();
     if ($('.icon-box').css('display') == 'none') {
       $('.icon-box').show().css({
         display: "flex"
       });
       $("#content2").height($("#content2").height() - h - 5)
     } else {
       $('.icon-box').hide();
       $("#content2").height(content2h)
     }
   })

   // 选择表情
   $("#icon-box").on("click", "li", function () {

     let positions = document.getElementById("userinput").selectionStart;
     let val = $("#userinput").val();
     let emoji = $(this).text().trim();
     let newval = val.slice(0, positions) + emoji + val.slice(positions, val.length);
     $("#userinput").val(newval)
   })


   // 主播功能区
   $(".fnbox div").on("click", async function () {
     let type = $(this).data("type");
     var localId
     if (type == 'yy') {
       return
       let pele = $(this).find('p');
       if (pele.text() == '语音') {
         wx.startRecord();
         pele.text('结束')
       } else {
         wx.stopRecord({
           success: function (res) {
             localId = res.localId;
             console.log(localId);
           }
         });

         pele.text('语音')
       }
     }
     if (type == "xiangji") {
       let id = await sdk.cameraImage()
       if (id) {
         sdk.uploadImage(id).then((ids) => {
           sdk.media(ids).then((res) => {
             try {
               chart.push(JSON.stringify({
                 id: user.id,
                 name: user.name,
                 photo: user.photo,
                 msg: res.data.result,
                 type: 'jpg'
               }));
             } catch (error) {
               alert(error + 'error')
             }
           })
         })
       }
     }
     if (type == 'tupian') {
       let id = await sdk.chooseImage()
       if (id) {
         sdk.uploadImage(id).then((ids) => {
           sdk.media(ids).then((res) => {
             chart.push(JSON.stringify({
               id: user.id,
               name: user.name,
               photo: user.photo,
               msg: res.data.result,
               type: 'jpg'
             }));
           })
         })
       }
     }
     if (type == 'jinyan') {
       let p = $(this).find("p");
       let text = p.text();
       if (text == '禁言') {
         p.text("禁言中");
       } else {
         p.text("禁言");
       }
       chart.push(JSON.stringify({
         id: user.id,
         name: user.name,
         photo: user.photo,
         msg: text == "禁言" ? "禁言" : "取消禁言",
         type: 'command'
       }))
     }
   })
   console.log($(".cancel").offset());

   let lt = {
     top: 0,
     left: 0,
     w: 0,
     h: 0
   }
   // $("#yyshow").show();
   $("#yymask").on({
     touchstart: function (e) {
       // 长按事件触发
       e.preventDefault();
       timeOutEvent = setTimeout(function () {
         timeOutEvent = 0;
         $("#yyshow").show();
         lt.top = $(".cancel").offset().top;
         lt.left = $(".cancel").offset().left;
         lt.h = $(".cancel").height();
         lt.w = $(".cancel").width();
         sdk.startRecord();
         // alert('你长按了');
       }, 400);
       //长按400毫秒
       // e.preventDefault();
     },
     touchmove: function () {
       // clearTimeout(timeOutEvent);
       // timeOutEvent = 0;
     },
     touchend: async function (e) {
       clearTimeout(timeOutEvent);
       if (timeOutEvent != 0) {
         // 点击事件
         // location.href = '/a/live-rooms.html';
         // alert('你点击了');
       } else {
         var touch = e.originalEvent.changedTouches[0];
         var x = touch.pageX;
         var y = touch.pageY;
         if ((x > lt.left && x < (lt.left + lt.w)) && y > lt.top && y < (lt.top + lt.h)) {
           $("#yyshow").hide();
           sdk.stopRecord()
           return
         }

         let id = await sdk.stopRecord();
         if (id) {
           sdk.uploadVoice(id).then((ids) => {
             sdk.media(ids).then((res) => {
               chart.push(JSON.stringify({
                 id: user.id,
                 name: user.name,
                 photo: user.photo,
                 audiourl: res.data.result,
                 type: 'audio'
               }));
             })
           })
         }
         // alert('松开了')
         $("#yyshow").hide();
       }
       return false;
     }
   })

   // 接受消息回调
   function getmsg(data) {
     let dataObj = JSON.parse(data);
     let textele;
     let direction = dataObj.id == user.id ? "right" : "left" //聊天方向

     if (dataObj.type == "text") {
       textele = msg.text(user.photo, user.name, dataObj.msg, direction)
     }
     if (dataObj.type == "jpg") {
       textele = msg.img(user.photo, user.name, dataObj.msg, direction)
     }
     if (dataObj.type == "audio") {
       textele = msg.audio(user.photo, user.name, dataObj.audiourl, direction)
     }
     if (navIndex == 1) { //navIndex区分聊天室，添加聊天内容
       if (dataObj.type == "command") {
         if (dataObj.msg == "禁言" || dataObj.msg == "取消禁言") {
           if (dataObj.msg == "禁言") {
             $("#userinput").attr({
               "disabled": true,
               "placeholder": "禁言中"
             }).val("").blur();
             $("#usersend").attr("disabled", true)
             $("#addicon").attr("disabled", true).click();
           }
           if (dataObj.msg == "取消禁言") {
             $("#addicon").attr("disabled", false);
             $("#userinput").attr({
               "disabled": false,
               "placeholder": "来说点什么吧..."
             })
             $("#usersend").attr("disabled", false)
           }
           let sysinfo = $(`<p class='sysinfo'>
                 ${dataObj.msg}
               </p>`)
           $("#msg-box-wrap").prepend(sysinfo.clone())
           $("#content2").prepend(sysinfo)

           return
         }
       }

       $("#msg-box-wrap").prepend(textele)

     } else {
       $("#content2").prepend(textele)
       mask.addMask(dataObj.name + ":" + dataObj.msg)
     }
     $("#admininput,#userinput").val("");
   }



   $("#admin-send").on("click", function () {
     let value = $("#admininput").val();
     if (value == "") {
       return;
     }
     chart.push(JSON.stringify({
       id: user.id,
       name: user.name,
       photo: user.photo,
       msg: value,
       type: 'text'
     }));
   })


   $("#usersend").on("click", function () {
     let value = $("#userinput").val();
     if (value == "") {
       return;
     }
     chart2.push(JSON.stringify({
       id: user.id,
       name: user.name,
       photo: user.photo,
       msg: value,
       type: 'text'
     }));
   })

   $(".pay-btn").on("click", function () {
     window.location.href = "http://user.szwangtuo.com:8889/web/aliWxPay/scanqr/4"
   })

   ROP.On("publish_data", (data, topic) => {
     getmsg(data)
   })


 });