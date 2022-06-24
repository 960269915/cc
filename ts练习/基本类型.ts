// 数字
let hd: number = 111; //数值包含了小数，负数，整数

// 字符串
let str: string = "xxx";

// 布尔值
let flag: boolean = true;

// 数组
let arr1: string[] = ["1", "2"];
let arr3: (string | number)[] = [1, 2, "3"];

interface user {
  name: string;
  age?: number;
}
let user1: user = {
  name: "cc",
};
let arr2: Array<string> = ["xx"]; //泛型数组
let arr4: Array<user> = [user1];

// volid 只能是null 或者undefined
let none1: void;

// null & undefined
let none2: null | undefined;

// 对象
interface person<T, U extends user> {
  //对象的泛型接口
  name: T;
  user?: U;
}
let obj1: person<string, user> = {
  name: "cc",
  user: user1,
};
