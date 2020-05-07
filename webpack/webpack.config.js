// config文件单独的配置文件,指定 loader 规则(loader rules)、插件(plugins)、解析选项(resolve options)，以及许多其他增强功能
// loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块
const path = require('path');

const config = {
    // 可设置多入口文件，
    // 1、如果是单页面程序，分离应用程序(app)和第三方库(vendor)入口 
    // 2、如果是多页面使用CommonsChunkPlugin能够复用入口起点之间的大量代码/模块
    entry: {
        main: './src/index.js'//入口文件
    },
    output: { //出口
        filename: 'bundle.js', //打包出来的名字
        path: path.resolve(__dirname, 'dist') //路径，__dirname为绝对根路径。dist文件名称
    },
    module: {
        rules: [
            {
                // 当遇到require()/import 语句中被解析为 '.txt' 的路径时，在打包前，使用raw-loader解析下
                test: /\.txt$/, use: 'raw-loader'  //test属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件,use 属性，表示进行转换时，应该使用哪个 loader
            }
        ]
    },
    // 插件目的在于解决 loader 无法实现的其他事
    plugins: []
};

module.exports = config