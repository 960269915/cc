// 声明函数
let fn1: Function; //记得函数要大写
fn1 = () => {};
// 函数确定参数类型
/*
type 和 interface的区别
1、两者都可以描述对象或者方法，interface使用extend继承，type使用&
2、type 可以声明基本类型，联合类型，元祖类型，interface不行
3、type 可以是另一个类型的typeof的返回值
4、重点--------能用interface 就不用type
*/

type userType = {
  name: string;
};

let num: number = 1;

type userTypeCopy1 = typeof num;

// 写法1
function fn2(
  name: string,
  age?: number,
  user: userType = { name: "zz" },
  initVal: number = 1
): string {
  if (age) {
    return name;
  } else {
    return name + age + initVal + user.name;
  }
}
// fn2("cc", 12);

// 写法2
let fn3: (name: string, age: number) => string = (
  name: string,
  age: number
): string => {
  return name + age;
};

// 剩余参数
function sum(...agrs: number[]): number {
  return agrs.reduce((s, n) => {
    return s + n;
  }, 0);
}
// sum(1, 2, 3);

// 函数泛型,使用extend约束参数类型
function fun4<T extends { name: string }>(user: T) {
  console.log(user.name);
}

// fun4({ name: "cc" });

// 函数回调是函数
function fn5(name: string, callback: (age: number) => string): string {
  let age: number = 10;
  let str: string = callback(age);
  return name + str;
}

fn5("cc", (age) => {
  return "" + age;
});



https://doc.houdunren.com/typescript/2%20%E5%9F%BA%E7%A1%80%E7%B1%BB%E5%9E%8B.html#%E5%89%A9%E4%BD%99%E5%8F%82%E6%95%B0