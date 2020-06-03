// 分离，开发配置
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", // 设置mode
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
});
