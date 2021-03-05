const {
  series,
  parallel,
  src,
  dest
} = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
var htmlmin = require('gulp-htmlmin');

function transpile(cb) {
  console.log(1);
  cb(); //cb代表任务完成，也可以return标识任务完成
}

function bundle(cb) {
  console.log(2);
  cb();
}

function jsTask() {
  // src 文件路径，得到流
  //pipe 管道，处理流文件的过程(也可以向流中添加文件)
  //dest 输出
  return src('js/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('output/'));
}

function htmlTask() {
  var options = {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
  };
  return src('./index.html')
    .pipe(htmlmin({
      minifyJS: true, //压缩页面JS
    }))
    .pipe(dest('output/'));
}



exports.jsTask = jsTask; //(exports导出的任务是共有的，可以命令行调用，否则是私有的)
exports.htmlTask = htmlTask; //(exports导出的任务是共有的，可以命令行调用，否则是私有的)









// 判断环境变量=======================
// process.env.NODE_ENV === 'production'
// 任务======================================
// exports.build = series(transpile, bundle); //series理解为同步的任务
// exports.build = parallel(transpile, bundle) //parallel 为异步的任务
// exports.build = series(transpile, parallel(bundle)); //任务可以嵌套

// 任务（ task） 中返回 stream、 promise、 event emitter、 child process 或 observable，同步任务报错整个流程停止，异步任务不会停止