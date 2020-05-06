"use strict";
var str = 'xx';
var num = 11;
// ===============泛型
var arr = ['cc', 'name'];
// ================联合类型
var testval = 1;
// ===============枚举
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 4] = "red";
    Color[Color["orange"] = 5] = "orange";
    Color[Color["black"] = 6] = "black";
})(Color || (Color = {}));
var c = Color.black;
console.log(Color.blue); //0，未声明值，返回下标。如在已声明值的后面，返回已声明值+从声明值开始算的下标，已声明值下标为0
// ============================================函数
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
        age: age
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
console.log(getinfo(18));
