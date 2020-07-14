"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var str = 'xx';
var num = 11;
// =========================================================泛型
var arr = ['cc', 'name'];
// 函数泛型
function getdata(val) {
    return val;
}
// 不用再函数声明时定义类型，可以在函数使用时传入类型 <number> 对应<T> 增加了函数的复用性 也可以理解把约束交给了调用者
getdata(1223);
function info(info) {
    console.log(info);
}
// info<infoface>({
//     name:'cc',
//     age:18
// })
// 类泛型
var MinNum = /** @class */ (function () {
    function MinNum() {
        this.list = [];
    }
    MinNum.prototype.add = function (val) {
        this.list.push(val);
    };
    MinNum.prototype.getOne = function () {
        var val = this.list[0];
        return val;
    };
    return MinNum;
}());
var m = new MinNum();
m.add(10);
m.add(2);
var m2 = new MinNum();
m2.add('a');
m2.add('b');
var fncc = function (name) {
    return name;
};
var Db = /** @class */ (function () {
    function Db() {
    }
    Db.prototype.add = function (info) {
        // console.log(info);
        return true;
    };
    return Db;
}());
var d = new Db();
d.add({
    name: 'cc',
    age: 18
});
// ===========================================================================联合类型
var testval = 1;
// ===================枚举
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 4] = "red";
    Color[Color["orange"] = 5] = "orange";
    Color[Color["black"] = 6] = "black";
})(Color || (Color = {}));
var c = Color.black;
// console.log(Color.blue); //0，未声明值，返回下标。如在已声明值的后面，返回已声明值+从声明值开始算的下标，已声明值下标为0
// ============================================================函数
// ===================函数传参
// 函数传递对象
function run(_a) {
    var name = _a.name, age = _a.age;
    return name + age;
}
// 剩余参数，主要是规定agr的属性
function run1(name) {
    var agr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        agr[_i - 1] = arguments[_i];
    }
}
// 可选参数和默认参数
function run2(name, age) {
    if (name === void 0) { name = 'cc'; }
}
// 对象结构，默认赋值
function run3(_a) {
    var _b = _a.name, name = _b === void 0 ? 'def' : _b, age = _a.age;
    console.log(name + age);
}
// =====================函数返回值
// 返回值为对象
function test(age) {
    return {
        name: 'cc',
        age: age,
        info: {
            address: 'xxx'
        }
    };
}
// 返回方法
function returnfn() {
    return function () {
    };
}
function getinfo(agr) {
    if (typeof agr === 'string') {
        return '我的名字' + agr;
    }
    else if (typeof agr === 'number') {
        return '我的年纪' + agr;
    }
}
//========================================================== 面向对象
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name;
    };
    Person.sayname = function () {
        // console.log(this.h);
        console.log(Person.h);
    };
    Person.h = 20;
    return Person;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    return Son;
}(Person));
var p = new Son('cc', 18);
function interfn(info) {
    console.log(info);
}
var fns = function (name, age, info, score) {
    return name + age + info.address + score;
};
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + 'eatfood');
    };
    return Cat;
}());
var cats = new Cat('小华');
// cats.eat();
