class Msg {
  constructor() {
    this.addEvent();
    this.timeOutEvent = 0;
    this.removeEle = "";
  }
  addEvent() {
    let that = this;
    $(".content-box")
      // touchstart 会和click 一样执行
      .on("touchstart", ".msg-box", function (e) {
        if ($(".remove-tag").css("display") == "block") {
          let name = e.target.className;
          if (name == "remove-tag") {
            that.removeEle = $(this);
            chart.push(
              JSON.stringify({
                type: "remove",
              })
            );
          } else {
            $(".remove-tag").remove();
          }
        }
        e.preventDefault();
        that.timeOutEvent = setTimeout(() => {
          $("body").click(() => {
            $(".remove-tag").remove();
          });
          if ($(this).find(".remove-tag").length > 0) {
            return;
          }
          //   error navIndex
          let navIndex = $(this).parent(".content-box").index();
          // 直播动态区域，取消用户长按删除
          if (navIndex == -1 && user.type != "admin") {
            return;
          }
          let ele;
          if (navIndex == -1 && user.type == "admin") {
            ele = that.createTag("撤销");
          }
          if (navIndex == 1 && user.type == "admin") {
            ele = that.createTag("删除");
          }
          if (navIndex == 1 && user.type != "admin") {
            //   验证当前消息是否是当前用户的
            let id = $(this).data("id");
            if (user.id == id) {
              ele = that.createTag("删除");
            } else {
              return;
            }
          }
          let direction = $(this).find(".msg-wrap").hasClass("left");
          ele.css({
            float: direction ? "left" : "right",
          });
          $(this).find(".msg-wrap").append(ele);
        }, 1000);
      })
      .on("touchend", ".msg-box", function () {
        clearTimeout(that.timeOutEvent);
      });
  }
  createTag(name = "删除") {
    return $(`<div class="remove-tag">
    ${name}
  </div> `);
  }
}
let msgEx = new Msg();
