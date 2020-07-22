// 开发配置
const common = require("./webpack.base.config");
const { merge } = require("webpack-merge"); //作用是合并配置

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    //代理
    // proxy: {
    //     '/api': 'http://127.0.0.1:9001',
    //     changeOrigin: true
    // },
    //运行目录
    contentBase: "./",
    //一切服务都启用gzip 压缩：
    compress: true,
    //端口号
    port: "8080",
    //自动打开浏览器
    open: true,
    //模块热替换
    hot: true,
    //页面自动刷新
    inline: true,
    //打开的页面
    openPage: "",
    //支持https
    // https: true
  },
});
