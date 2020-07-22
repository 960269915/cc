/**
 * 配置文件，运行webpack的时候，会加载这里的配置
 */

// process.env.NODE_ENV = "development";//设置node环境变量，去读取browserslist相应配置,默认读取开发环境的设置

const path = require("path");
const HtmlWbpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  // entry: "./src/index.js", //入口起点
  entry: ["./src/index.js", "./src/index.html"], //为了使用HRM，需要把entry改为数组，并且把HTML文件加入
  // entry:{  //多入口
  //   index:["./src/index.js","./src/index.html"],
  //   test:"./src/js/test.js"
  // },
  output: {
    filename: "js/[name].[hash:10].js", //输出的文件名称,缓存期间，为了改东西生效，需要加入hash值，强制刷新
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
            loader: "postcss-loader", //处理css兼容，使用postcss-loader
            options: {
              ident: "postcss",
              plugins: () => [
                require("postcss-preset-env")(), //帮助postcss找到package.json里面的browserslist 配置项
              ],
            },
          },
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
        loader: "html-loader", //处理image标签中的图片
      },
      // 打包其他资源
      {
        exclude: /\.(js|css|less|html|jpg|png|gif|json)$/, //exclude 排除这些资源，其他的使用file-loader
        loader: "file-loader",
        options: {
          outputPath: "asset",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          // 指示babel做怎样的兼容处理
          presets: [
            [
              "@babel/preset-env",
              {
                // 按需兼容
                useBuiltIns: "usage",
                // 指定corejs版本
                corejs: {
                  version: "3",
                },
                // 指定需要兼容的浏览器版本
                targets: {
                  chrome: "60",
                  ie: "10",
                },
              },
            ],
          ],
          cacheDirectory: true, //开启babel缓存
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
      // 压缩HTML的配置
      minify: {
        collapseWhitespace: true, //移除空格
        removeComents: true, //移除注释
      },
    }),
    //每次打包前清除build文件夹
    new CleanWebpackPlugin(),
    //css和Js文件分离
    new MiniCssExtractPlugin({
      filename: "css/index.[hash:10].css", //css输出目录
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
    // 告诉webpack，哪些库不参与打包
    new webpack.DllReferencePlugin({
      manifest:path.resolve('dll/manifest.json')
    }),
    //在html中自动引入，因为DllReferencePlugin忽略了打包
    new AddAssetHtmlWebpackPlugin({
      filepath:path.resolve('dll/jquery.js')
    })
  ],
  //开启实时重新加载（需要安装webpack-dev-server）
  devServer: {
    contentBase: "./build", //监听的文件夹
    compress: true, //开启压缩
    port: 3000, //端口号
    open: true, //自动打开浏览器
    hot: true, //开启热替换 只会重新加载被修改的文件
    host:'localhost', //域名
    // proxy:{
    //   // 一旦5000服务器接收到 /api/xxx开头的请求，就会把请求转到3000服务器
    //   // 浏览器和服务器有跨域，服务器和服务器没有跨域，浏览器和代理服务器没有跨域，再通过代理服务器和有跨域的服务通信
    //   '/api':{
    //     target:'http://localhost:3000',
    //     // 发送请求时，路径重写，遇到/api/xxx的，替换为/xxx
    //     pathRewrite:{
    //       '^/api':''
    //     }
    //   }
    // },
  },
  optimization: {
    // 1、能将node_modules里面的代码单独打包成chunk
    // 2、分析多入口chunkz中的公共依赖，生成一个单独chunk
    splitChunks: {
      chunks: "all",
    },
  },
  // externals: {
  //   jquery: "jQuery",
  // },
  // devtool:"source-map",
  // 配置模块解析的规则
  resolve:{
    alias:{
      $css:path.resolve(__dirname,'src/style') //当引入css时，不要每层的找，直接使用$css/index.css这样
    }
  },
  mode:'production', //生产环境下，会自动压缩js
  // mode: "development"
};
