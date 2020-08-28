// 文件操作
const fs = require("fs");

//1、-------------------------------------------fs.stat 检测是文件还是目录

// fs.stat("./tools.js", (err, data) => {
//   console.log(data.isFile()); //是否是文件
//   console.log(data.isDirectory()); //是否是目录
// });

//2、 ------------------------------------------fs.mkdir 创建目录

// 参数1 创建的目录路径
// 参数2 目录权限
// 参数3 回调函数
// fs.mkdir("./css", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("success");
// });

//3、--------------------------------------------- fs.writeFile 写入文件

// 参数1 创建的文件路径及名称
// 参数2 写入的内容
// fs.writeFile("./css/index.css", "div{padding:0}", (err) => {});

//4、----------------------------------------------- fs.appendFile()  追加内容，用法同写入文件，没有文件创建文件，有文件在文件后面追加内容

//5、 ------------------------------------------------ fs.readFile 读取文件内容

// fs.readFile('./css/index.css',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     // Buffer 转换为string类型
//     console.log(data.toString());
// })

// 6、----------------------------------------------fs.readdir 读取目录里的所有文件以及文件夹
// fs.readdir('./css',(err,data)=>{
//     console.log(data);
// })

// 7、-----------------------------------------------fs.rename  重命名或者移动文件(2个路径不一样，就是移动，相同为重命名)

// fs.rename('./css/index.css','./css/home.css',(err)=>{})

// 8、-----------------------------------------------删除目录  fs.rmdir() 当目录里面有文件时，需要先删除文件

// 9、------------------------------------------------删除文件 fs.unlink()

// 练习题  1、判断服务器上有没有upload目录，没有增加，有不做操作 (有mkdirp的Npm包可使用)

const upload_path = "./upload";
fs.stat(upload_path, (err, data) => {
  if (err) {
    //没有upload，直接创建
    mkdirfn(upload_path);
    return;
  }
  if (!data.isDirectory()) {
    // 有upload，但是不是个文件夹,需要先删除
    fs.unlink(upload_path, (err) => {
      if (err) {
        console.log("删除失败");
      } else {
        mkdirfn(upload_path);
      }
    });
  }
});

function mkdirfn(path) {
  fs.mkdir(path, (err) => {
    if (err) {
      console.log("创建失败");
      return;
    }
    console.log("创建成功");
  });
}

// 联系题2 找出www.root 下的所有文件夹，然后放入一个数组中
let arrs = [];
const wwwroot = "./wwwroot";

// fs.readdir(wwwroot, (err, data) => {
//   if (err) {
//     return;
//   }
//   (function getDir(num) {
//     console.log(arrs);
//     // fs.stat 是异步的
//     fs.stat(`${wwwroot}/` + data[num], (err, _data) => {
//       if (_data.isDirectory()) {
//         arrs.push(data[num]);
//         getDir(num + 1);
//       }
//     });
//   })(0);
// });

// 使用await 和 async 处理
function isDir(item) {
  return new Promise((resolve, reject) => {
    fs.stat(`${wwwroot}/${item}`, (err, data) => {
      if (err) {
        return;
      }
      data.isDirectory() ? resolve(true) : reject(false);
    });
  }).catch(()=>{});//注意此处要加catch
}

function main() {
  fs.readdir(wwwroot, async (err, data) => {
    if (err) {
      return;
    } else {
      for (let i = 0; i < data.length; i++) {
        await isDir(data[i])
        if (await isDir(data[i]).catch()) {
          arrs.push(data[i]);
        }
      }
      console.log(arrs);
    }
  });
}
main();
