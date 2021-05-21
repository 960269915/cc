const querystring = require('querystring');

const str = "id=111&name=cc";
const obj = {
  name: 'cc',
  age: 18
}
console.log(querystring.parse(str)); //转对象
console.log(querystring.stringify(obj)); //对象转字符串 name=cc&age=18