/**
 * 配置文件，运行webpack的时候，会加载这里的配置
 */

// process.env.NODE_ENV = "development";//设置node环境变量，去读取browserslist相应配置,默认读取开发环境的设置

const path = require("path");
const HtmlWbpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");




module.exports = {
  entry: "./src/index.js", //入口起点
  output: {
    filename: "js/[name].js", //输出的文件名称
    path: path.resolve(__dirname, "build"), //输出路径，__dirname，node变量，当前文件的目录的绝对路径(指向webpackstudy)
  },
  module: {
    //loader配置
    rules: [
      {
        test: /\.css$/, //匹配哪些文件
        use: [
          // "style-loader", //创建style标签，插入到页面head
          MiniCssExtractPlugin.loader, //当分离css时，使用此loader，并且去除style-loader
          "css-loader", //解析css文件为字符串,执行顺序是从后往前
          {
            loader:'postcss-loader',//处理css兼容，使用postcss-loader
            options:{
              ident:'postcss',
              plugins:()=>[
                require('postcss-preset-env')()//帮助postcss找到package.json里面的browserslist 配置项
              ]
            }
          }
        ],
      },
      {
        test: /\.less$/,
        use: [
          // "style-loader", //创建style标签，并且插入页面
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader", //将less文件转换为css文件
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader", //处理css中引入的图片,只使用单个loader格式
        options: {
          limit: 8 * 1024, //小于8kb,转为base64形式（好处减少请求，坏处增大图片体积）
          outputPath: "img", //指定输出路径
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",//处理image标签中的图片
      },
      // 打包其他资源
      {
        exclude: /\.(js|css|less|html|jpg|png|gif|json)$/, //exclude 排除这些资源，其他的使用file-loader
        loader: "file-loader",
        options: {
          outputPath: "asset",
        },
      },
      // {
      //   // eslint的检查规则在package.json的eslintConfig
      //   test:/\.js$/,
      //   exclude:/node_modules/,//只检查自己写的代码，去除node_modules的检查
      //   loader:"eslint-loader",
      //   options:{
      //     fix:true //自动修复
      //   }
      // }
    ],
  },
  plugins: [
    //默认创建index.html 并引入打包出来的Js
    new HtmlWbpackPlugin({
      template: "./src/index.html", //以这个文件为模板
    }),
    //每次打包前清除build文件夹
    new CleanWebpackPlugin(), 
    //css和Js文件分离
    new MiniCssExtractPlugin({
      filename:'css/index.css'//css输出目录
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ],
  //开启实时重新加载（需要安装webpack-dev-server）
  devServer: {
    contentBase: "./build", //监听的文件夹
    compress: true, //开启压缩
    port: 3000, //端口号
    open: true, //自动打开浏览器
  },
  mode: "development",
  //   mode:'production'
};
