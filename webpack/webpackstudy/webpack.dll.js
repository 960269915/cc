const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    // ['jquery'] 要被打包的库
    jquery: ["jquery"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dll"),
    library: "[name]_[hash]", //打包出去的库最终向外暴露的名字
  },
  plugins: [
    // 打包生成一个manifest.json 形成和jq的映射
    new webpack.DllPlugin({
      name: "[name]_[hash]", //映射的库名称
      path: path.resolve(__dirname, "dll/manifest.json"), //输出文件的路径
    }),
  ],
  mode: "production",
};
