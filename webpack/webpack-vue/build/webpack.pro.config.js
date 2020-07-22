// 生产环境配置
const common = require("./webpack.base.config");
const { merge } = require("webpack-merge"); //作用是合并配置
module.exports = merge(common,{
    
})