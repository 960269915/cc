const querystring = require('querystring');
const str = "id=111&name=cc";
const obj = {
  name: 'cc',
  age: 18
}

var str1 = 'id=3&city=北京&url=https://www.baidu.com'
var str2 = 'id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com'
var escaped = querystring.escape(str1) //对中文编码
var unescaped = querystring.unescape(str2) //对中文解码
// console.log(querystring.parse(str)); //转对象
// console.log(querystring.stringify(obj)); //对象转字符串 name=cc&age=18




const url = require("url");
const urlString = 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
const urlObject = {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:443',
  port: '443',
  hostname: 'www.baidu.com',
  hash: '#tag=110',
  search: '?id=8&name=mouse',
  query: {
    id: '8',
    name: 'mouse'
  },
  pathname: '/ad/index.html',
  path: '/ad/index.html?id=8&name=mouse',
  href: 'https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110'
}
// console.log(new URL(urlString)); //对url进行解析，返回url对象
// console.log(url.format(urlObject)); //url对象转字符串