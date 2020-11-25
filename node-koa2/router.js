// 路由封装
const ejs = require("ejs");
const tools = require("./tools");

let routers = {
  login(req,res){
     let ejsData = "我是动态的ejs内容";
      ejs.renderFile("./view/login.ejs", { ejsData: ejsData }, (err, data) => {
        tools.send(res, data);
      });
  },
  search(req,res){
    //获取get传值
    //let params = url.parse(req.url, true).query;
     tools.send(res, "search");
  },
  err(req,res){
    tools.send(res, "404");
  }
}


module.exports = routers