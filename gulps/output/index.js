"use strict";function asyncGeneratorStep(t,n,e,a,i,s,c){try{var o=t[s](c),r=o.value}catch(t){return void e(t)}o.done?n(r):Promise.resolve(r).then(a,i)}function _asyncToGenerator(o){return function(){var t=this,c=arguments;return new Promise(function(n,e){var a=o.apply(t,c);function i(t){asyncGeneratorStep(a,n,e,i,s,"next",t)}function s(t){asyncGeneratorStep(a,n,e,i,s,"throw",t)}i(void 0)})}}$(function(){var i="1",s="cc",c="./img/photo.png",o="admin",r=new Chat("chat1","1");r.push();var a,n=new Chat("chat2","2");n.push(),function(){for(var t,n=[],e=escape(face),a=/(%\w{5}){2}/g;t=a.exec(e);)n.push(unescape(t[0]));var i=$("<ul></ul>"),s="";n.forEach(function(t){s+="<li>\n                ".concat(t,"\n              </li>")}),i.append(s),$("#icon-box").append(i)}(),$(".nav-item").on("click",function(){$(this).addClass("nav-item-active").siblings().removeClass("nav-item-active");var t=$(this).find("img");$(".nav-item-img").each(function(t){$(this).attr("src","./img/".concat(t+1,"-dis.png"))});var n=a=$(this).data("index");1==n&&("admin"==o?$("#send-box-admin").show():$("#content1").css({height:"58vh"}),$("#send-box-user").hide()),2==n&&($("#send-box-admin").hide(),$("#send-box-user").show()),3==n&&($("#send-box-admin").hide(),$("#send-box-user").hide());var e="./img/"+n+".png";$(t).attr("src",e),$(".content-box").hide(),$("#content".concat(n)).show(),$(".content-box").eq(2).css({height:"58vh"})}),$(".nav-item").eq(0).click(),$("#mask-switch").on("click",function(){var t=$(this).find("img");"./img/open.png"==t.attr("src")?(t.attr("src","./img/close.png"),$("#mask-box").hide()):(t.attr("src","./img/open.png"),$("#mask-box").show())});var d={tmp:$("#mask-wrap"),addMask:function(){var t=$('<p class="mask-item"><span class="mask-item-text">'.concat(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"测试","</span></p>"));this.tmp.prepend(t)},move:function(){var t=$("#mask-wrap").height(),n=($(".mask-item").height(),$("#mask-box").height());n<t&&this.tmp.css({top:n-t+"px"})}};function u(t){return 9<t?t+"":"0"+t}function h(t){(t=new Date(t)).getFullYear();var n=t.getMonth()+1,e=t.getDate(),a=t.getHours(),i=t.getMinutes(),t=t.getSeconds();return u(n)+"/"+u(e)+" "+u(a)+":"+u(i)+":"+u(t)}var p=function(t,n,e,a){return $('<div id="msg-box" class="'.concat("left"==a?"flex":"",'"">\n                   <img class="user-photo ').concat("left"==a?"":"fr",'" src="').concat(t,'" alt="">\n                   <div class="msg-wrap ').concat("left"==a?"left":"fl right",' ">\n                     <p class="user-name ').concat("right"==a?"tr":"",'">').concat(n,' \n                      <span class="admin-tip">').concat("admin"==o?"管理员":"","</span>\n                      ").concat(h(new Date),'</p>\n                     <p class="msg-text ').concat("left"==a?"admin-color":"user-color",'">').concat(e,"</p>\n                   </div>\n                   </div"))},l=function(t,n,e,a){return $('<div id="msg-box" class="'.concat("left"==a?"flex":"",'"">\n                   <img class=" user-photo ').concat("left"==a?"":"fr",'" src="').concat(t,'" alt="">\n                   <div class="msg-wrap ').concat("left"==a?"left":"fl imgright",' ">\n                     <p class="user-name ').concat("right"==a?"tr":"",'">').concat(n," ").concat(h(new Date),'</p>\n                     <img class="msg-img" src="').concat(e,'" alt="">\n                   </div>\n                   </div'))},m=function(t,n,e,a){return $('<div id="msg-box" class="'.concat("left"==a?"flex":"",'"">\n                   <img class=" user-photo ').concat("left"==a?"":"fr",'" src="').concat(t,'" alt="">\n                 <div class="msg-wrap ').concat("left"==a?"left":"fl audioright",' ">\n                   <p class="user-name ').concat("right"==a?"tr":"",'">').concat(n," ").concat(h(new Date),'</p>\n                   <div class="audio-box">\n                     ·|·|·|·\n                     <audio class="audio" src="').concat(e,'" controls="controls"></audio>\n                   </div>\n                   </div> \n                 </div>\n                 </div'))};$("#content").on("click",".audio-box",function(){try{var n=$(this).find("audio");$(".audio").each(function(t){$(".audio").eq(t).attr("src")==n.attr("src")?n[0].paused?n[0].play():n[0].pause():$(".audio").get(t).pause()})}catch(t){alert(t)}});var e=$("#content1").height();$("#addbtn").on("click",function(){var t=$(".fnbox").height();"none"==$(".fnbox").css("display")?($(".fnbox").show().css({display:"flex"}),$("#content1").height($("#content1").height()-t),$("#mask-switch,#mask-box").hide()):($(".fnbox").hide(),$("#content1").height(e),$("#mask-switch").show(),"./img/open.png"==$("#mask-switch").find("img").attr("src")&&$("#mask-box").show())});var f=$("#content2").height();$("#addicon").on("click",function(){if($(this).attr("disabled"))return $(".icon-box").hide(),void $("#content2").height(f);var t=$(".icon-box").height();"none"==$(".icon-box").css("display")?($(".icon-box").show().css({display:"flex"}),$("#content2").height($("#content2").height()-t-5)):($(".icon-box").hide(),$("#content2").height(f))}),$("#icon-box").on("click","li",function(){var t=document.getElementById("userinput").selectionStart,n=$("#userinput").val(),e=$(this).text().trim(),n=n.slice(0,t)+e+n.slice(t,n.length);$("#userinput").val(n)}),$(".fnbox div").on("click",_asyncToGenerator(regeneratorRuntime.mark(function t(){var n,e,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("yy"==(n=$(this).data("type")))return t.abrupt("return");t.next=5;break;case 5:if("xiangji"==n)return t.next=8,sdk.cameraImage();t.next=10;break;case 8:(e=t.sent)&&sdk.uploadImage(e).then(function(t){sdk.media(t).then(function(t){try{r.push(JSON.stringify({id:i,name:s,photo:c,msg:t.data.result,type:"jpg"}))}catch(t){alert(t+"error")}})});case 10:if("tupian"==n)return t.next=13,sdk.chooseImage();t.next=15;break;case 13:(a=t.sent)&&sdk.uploadImage(a).then(function(t){sdk.media(t).then(function(t){r.push(JSON.stringify({id:i,name:s,photo:c,msg:t.data.result,type:"jpg"}))})});case 15:"jinyan"==n&&(e=$(this).find("p"),"禁言"==(a=e.text())?e.text("禁言中"):e.text("禁言"),r.push(JSON.stringify({id:i,name:s,photo:c,msg:"禁言"==a?"禁言":"取消禁言",type:"command"})));case 16:case"end":return t.stop()}},t,this)}))),console.log($(".cancel").offset());var g,v={top:0,left:0,w:0,h:0};$("#yymask").on({touchstart:function(t){t.preventDefault(),timeOutEvent=setTimeout(function(){timeOutEvent=0,$("#yyshow").show(),v.top=$(".cancel").offset().top,v.left=$(".cancel").offset().left,v.h=$(".cancel").height(),v.w=$(".cancel").width(),sdk.startRecord()},400)},touchmove:function(){},touchend:(g=_asyncToGenerator(regeneratorRuntime.mark(function t(n){var e,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(clearTimeout(timeOutEvent),0==timeOutEvent){t.next=4;break}t.next=16;break;case 4:if(a=n.originalEvent.changedTouches[0],e=a.pageX,a=a.pageY,e>v.left&&e<v.left+v.w&&a>v.top&&a<v.top+v.h)return $("#yyshow").hide(),sdk.stopRecord(),t.abrupt("return");t.next=11;break;case 11:return t.next=13,sdk.stopRecord();case 13:(a=t.sent)&&sdk.uploadVoice(a).then(function(t){sdk.media(t).then(function(t){r.push(JSON.stringify({id:i,name:s,photo:c,audiourl:t.data.result,type:"audio"}))})}),$("#yyshow").hide();case 16:return t.abrupt("return",!1);case 17:case"end":return t.stop()}},t)})),function(t){return g.apply(this,arguments)})}),$("#admin-send").on("click",function(){var t=$("#admininput").val();""!=t&&r.push(JSON.stringify({id:i,name:s,photo:c,msg:t,type:"text"}))}),$("#usersend").on("click",function(){var t=$("#userinput").val();""!=t&&n.push(JSON.stringify({id:i,name:s,photo:c,msg:t,type:"text"}))}),$(".pay-btn").on("click",function(){window.location.href="http://user.szwangtuo.com:8889/web/aliWxPay/scanqr/4"}),ROP.On("publish_data",function(t,n){!function(t){var n,e=JSON.parse(t),t=e.id==i?"right":"left";if("text"==e.type&&(n=p(c,s,e.msg,t)),"jpg"==e.type&&(n=l(c,s,e.msg,t)),"audio"==e.type&&(n=m(c,s,e.audiourl,t)),1==a){if("command"==e.type&&("禁言"==e.msg||"取消禁言"==e.msg)){"禁言"==e.msg&&($("#userinput").attr({disabled:!0,placeholder:"禁言中"}).val("").blur(),$("#usersend").attr("disabled",!0),$("#addicon").attr("disabled",!0).click()),"取消禁言"==e.msg&&($("#addicon").attr("disabled",!1),$("#userinput").attr({disabled:!1,placeholder:"来说点什么吧..."}),$("#usersend").attr("disabled",!1));t=$("<p class='sysinfo'>\n                 ".concat(e.msg,"\n               </p>"));return $("#msg-box-wrap").prepend(t.clone()),$("#content2").prepend(t)}$("#msg-box-wrap").prepend(n)}else $("#content2").prepend(n),d.addMask(e.name+":"+e.msg);$("#admininput,#userinput").val("")}(t)})});