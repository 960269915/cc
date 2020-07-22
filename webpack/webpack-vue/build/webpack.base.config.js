// 公共配置
const path = require("path");
const pluginsConfig = require("./webpack.plugin.config");
var glob = require("globby");
const rulesConfig = require("./webpack.loader.config");
//选择js目录下的js文件,生成入口对象
var entryConfig = (function () {
  var _config = {};
  const fileList = glob.sync(["./src/js/*.*"]);
  if (fileList && fileList.length > 0) {
    for (var i = 0; i < fileList.length; i++) {
      _config[fileList[i].match(/([^\/]+)(?=\.)/gi)[0]] = fileList[i];
    }
  }
  return _config;
})();

module.exports = {
  entry: entryConfig,
  // entry:path.join(__dirname, '../src/js/index.js'),
  output: {
    filename: "js/[name].[hash:10].js", //缓存期间，为了改东西生效，需要加入hash
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: pluginsConfig,
  optimization: {
    // 1、能将node_modules里面的代码单独打包成chunk
    // 2、分析多入口chunkz中的公共依赖，生成一个单独chunk
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    alias: {
      $src: path.resolve(__dirname, "src"), //设置别名，方便路径查找
      utils$: path.resolve(__dirname, "../utils.js"), //为了引入本地js,挂载到全局
    },
  },
  //loader
  module: {
    rules: rulesConfig,
  },
};
