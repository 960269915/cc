import _ from 'lodash'; //JavaScript 工具库。
import txt from '../static/name.txt';
function component() {
    var element = document.createElement('div');
    // element.innerHTML = _.join(['Hello', 'webpack','cc'], '/');
    element.innerHTML = txt;

    return element;
  }
  
  document.body.appendChild(component());