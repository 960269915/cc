module.exports = [
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
];
