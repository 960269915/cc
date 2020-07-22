// 入口文件
// import '@babel/polyfill' //兼容性处理（会导致包过大，不建议）
// import data from './user.json';
import '$css/index.css';
import './style/home.less';

import {print} from './js/print'
import './font-class/iconfont.css';


print();

console.log('index.js被加载~');

let pr = new Promise((resolve,reject)=>{});

// 异步加载js文件
document.getElementById('divs').onclick = function(){
  import(/*webpackChunkName:'common',webpackPrefetch:true */'./js/common').then(({common})=>{
    common();
  })
}





// 判断是否开启了HMR
if(module.hot){
  // 监听print文件文件，其他文件不会重新构建
  module.hot.accept('./js/print.js',function(){
    print() //如果修改了printjs文件，可以再次执行以下最新的方法
  })

  module.hot.accept('./js/common.js',function(){
    common();
  })
}


