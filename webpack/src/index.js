import _ from 'lodash'; //JavaScript 工具库。
import txt from '../static/name.txt';
import './style.css' //webpack一切都为模块，可以引入任何，前提是config里面配置了相应的解析loader
import img from '../static/1.png'; //img会被处理为图片路径(使用了file-loader)
import printMe from './print.js';
import { cube } from './math.js';
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello1', 'webpack'], ' ') + cube(3);
  // element.innerHTML = txt;
  // 引用外部css 
  element.className = 'reds'
  var iocn = new Image();
  iocn.src = img;

  var btn = document.createElement('button');
  btn.innerHTML = 'clickme'
  btn.onclick = printMe;


  element.appendChild(btn)
  element.appendChild(iocn)
  return element;
}
let element = component();
document.body.appendChild(element);


// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   })
// }