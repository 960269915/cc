let str: string = "xx";

let num: number = 11;

// =========================================================泛型
let arr: Array<string> = ["cc", "name"];

// 函数泛型
function getdata<T>(val: T): T {
  return val;
}
// 不用再函数声明时定义类型，可以在函数使用时传入类型 <number> 对应<T> 增加了函数的复用性 也可以理解把约束交给了调用者
getdata<number>(1223);

interface infoface {
  name: string;
  age: number;
}

function info<T>(info: T) {
  console.log(info);
}

// info<infoface>({
//     name:'cc',
//     age:18
// })

// 类泛型
class MinNum<T> {
  public list: Array<T> = [];
  add(val: T): void {
    this.list.push(val);
  }
  getOne(): T {
    let val = this.list[0];
    return val;
  }
}
let m: MinNum<number> = new MinNum();
m.add(10);
m.add(2);

let m2: MinNum<string> = new MinNum();
m2.add("a");
m2.add("b");

// 接口泛型
interface fnaa<T> {
  (name: T): T;
}

let fncc: fnaa<string> = function <T>(name: T): T {
  return name;
};
// console.log(fncc('cc'));

interface obj {
  name: string;
  age: number;
}

class Db<T> {
  add(info: T): boolean {
    // console.log(info);
    return true;
  }
}

var d: Db<obj> = new Db();
d.add({
  name: "cc",
  age: 18,
});

// ===========================================================================联合类型
let testval: string | number = 1;

// ===================枚举
enum Color {
  blue,
  red = 4,
  orange,
  black,
}

let c: Color = Color.black;

// console.log(Color.blue); //0，未声明值，返回下标。如在已声明值的后面，返回已声明值+从声明值开始算的下标，已声明值下标为0

// ============================================================函数
// ===================函数传参
// 函数传递对象
function run({ name, age }: { name: string; age: number }): string {
  return name + age;
}
// 剩余参数，主要是规定agr的属性
function run1(name: string, ...agr: string[]) {}

// 可选参数和默认参数
function run2(name: string = "cc", age?: number) {}

// 对象结构，默认赋值
function run3({ name = "def", age }: { name?: string; age: number }) {
  console.log(name + age);
}

// =====================函数返回值
// 返回值为对象
function test(age: number): {
  name: string;
  age?: number;
  info: { address: string };
} {
  return {
    name: "cc",
    age: age,
    info: {
      address: "xxx",
    },
  };
}

// 返回方法
function returnfn(): Function {
  return function () {};
}

// =======================方法的重载

function getinfo(name: string): string;
function getinfo(age: number): number;
function getinfo(agr: number | string): any {
  if (typeof agr === "string") {
    return "我的名字" + agr;
  } else if (typeof agr === "number") {
    return "我的年纪" + agr;
  }
}

//========================================================== 面向对象
class Person {
  name: string;
  static h: number = 20;
  constructor(name: string) {
    this.name = name;
  }
  run(): string {
    return this.name;
  }
  static sayname() {
    //静态方法,静态方法无法访问属性，如果要访问，需要把属性也改为静态属性
    // console.log(this.h);
    console.log(Person.h);
  }
}

class Son extends Person {
  age: number;
  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }
}

var p: Son = new Son("cc", 18);

// ====================================================================接口 对属性、方法、对象进行规范
// 对象接口
interface obj {
  name: string;
  age: number;
  score?: number; //可选参数
}

function interfn(info: obj) {
  console.log(info);
}
// interfn({name:'cc',age:181})

// 函数接口
interface fn {
  (
    name: string,
    age: number,
    info: { address: string },
    score?: number
  ): string;
}
let fns: fn = (name, age, info, score): string => {
  return name + age + info.address + score;
};
// console.log(
//     fns('cc', 18, { address: 'chengdu' }, 100)
// );

// 类接口
interface Dog {
  name: string;
  eat(): void;
}

class Cat implements Dog {
  //Cat必须要有Dog接口的所有属性和方法
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + "eatfood");
  }
}
let cats = new Cat("小华");

// cats.eat();
