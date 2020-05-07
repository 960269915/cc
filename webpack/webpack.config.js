// config文件单独的配置文件,指定 loader 规则(loader rules)、插件(plugins)、解析选项(resolve options)，以及许多其他增强功能
// loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const config = {
    // 可设置多入口文件，
    // 1、如果是单页面程序，分离应用程序(app)和第三方库(vendor)入口 
    // 2、如果是多页面使用CommonsChunkPlugin能够复用入口起点之间的大量代码/模块
    entry: {
        main: './src/index.js',//入口文件
        common:'./src/common.js'
    },
    // devtool: 'inline-source-map',//映射源码，显示具体错误和位置(只用于开发环境)。当多个js打包成一个bundle时，发生错误，只会指向最外层
    devServer: { //开启实时重新加载
        contentBase: './dist',//监听的文件夹
        hot: true
    },
    output: { //出口
        filename: '[name].js', //打包出来的名字
        path: path.resolve(__dirname, 'dist') //路径，__dirname为绝对根路径。dist文件名称
    },
    module: {
        rules: [
            {
                // 当遇到require()/import 语句中被解析为 '.txt' 的路径时，在打包前，使用raw-loader解析下
                test: /\.txt$/, use: 'raw-loader'  //test属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件,use 属性，表示进行转换时，应该使用哪个 loader
            },
            {
                test: /\.css$/,
                use: [ //loader的阅读顺序是从后往前，先是css-loader处理，然后再把结果传递给style-loader
                    'style-loader',//作用是把样式插入到 DOM中,head中插入一个style标签
                    'css-loader'//作用是处理css中的 @import 和 url 这样的外部资源
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    // 插件目的在于解决 loader 无法实现的其他事
    plugins: [
        new HtmlWebpackPlugin(), //会默认生成 index.html 文件,所有的output的bundle会自动添加到 html 中
        new CleanWebpackPlugin(),//每次打包，清除dist文件夹
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config