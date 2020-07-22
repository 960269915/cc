// 插件配置

const path = require("path");
const webpack = require("webpack");
// 每次打包清除dist文件夹
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 根据模板，自动生成html
const HtmlWbpackPlugin = require("html-webpack-plugin");
// 读取文件
var glob = require("globby");

// 将src/static直接copy到dist，并重命名为static
const CopyWebpackPlugin = require("copy-webpack-plugin");

var pluginsConfig = [
  new CleanWebpackPlugin(),
  // ProvidePlugin可以将库挂载到全局，避免每个页面import
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    utils: "utils",
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "../src/static"),
        to: "./assets",
      },
    ],
  }),
];

// 根据提供的html模板，生成HTML，并且自动引入js
(function () {
  const fileList = glob.sync(["./src/html/*.html"]);
  if (fileList && fileList.length > 0) {
    for (var i = 0; i < fileList.length; i++) {
      pluginsConfig.push(
        new HtmlWbpackPlugin({
          template: fileList[i],
          filename: fileList[i].match(/([^\/]+)(?=\.)/gi)[0] + ".html",
          chunks: [fileList[i].match(/([^\/]+)(?=\.)/gi)[0]],
          hash: false, //引入的文件设置hash值
          // 压缩HTML的配置
          minify: {
            collapseWhitespace: true, //移除空格
            removeComents: true, //移除注释
          },
        })
      );
    }
  }
})();

module.exports = pluginsConfig;
