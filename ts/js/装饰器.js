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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// ==========================普通装饰器，不可传参
function logfn(params) {
    params.prototype.name = 'cc';
    params.prototype.run = function () {
        console.log('run');
    };
}
var A = /** @class */ (function () {
    function A() {
    }
    A = __decorate([
        logfn //装饰A,相当于在A上面动态扩展属性和方法
    ], A);
    return A;
}());
// let a = new A();
// a.run();
//=========================== 装饰器工厂，可传参
function fnaa(name) {
    return function (target) {
        console.log(name); //传递进来的参数
        console.log(target); //被装饰的类
        target.prototype.name = name;
    };
}
var AA = /** @class */ (function () {
    function AA() {
    }
    AA = __decorate([
        fnaa('cc')
    ], AA);
    return AA;
}());
// let aa = new AA();
// console.log(aa.name);
// ==================================重置类的值和方法
function fnbb(str) {
    return function (target) {
        console.log(target);
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = '我是修改后的name'; //重置值
                return _this;
            }
            class_1.prototype.GetName = function () {
                console.log("\u4FEE\u6539\u540E\u7684GetName" + this.name);
            };
            return class_1;
        }(target));
    };
}
var BB = /** @class */ (function () {
    function BB() {
        this.name = 'ccc';
    }
    BB.prototype.GetName = function () {
        console.log(this.name);
    };
    BB = __decorate([
        fnbb('传递进来的参数')
    ], BB);
    return BB;
}());
// let bb = new BB();
// bb.GetName();
// ==============属性装饰器
function prop(name) {
    return function (target, attr) {
        console.log(target); //被装饰的类
        console.log(attr); //被装饰的属性名称
        target[attr] = name;
    };
}
var CC = /** @class */ (function () {
    function CC() {
    }
    CC.prototype.GetName = function () {
        console.log(this.name + '---');
    };
    __decorate([
        prop('我是被装饰的name')
    ], CC.prototype, "name", void 0);
    return CC;
}());
var cc = new CC();
cc.GetName();
// =====================方法装饰器
function ddfn(agr) {
    return function (target, methodName, desc) {
        console.log(target); //被装饰的类
        console.log(methodName); // 被装饰的方法名称
        console.log(desc); //方法的描述  desc.value 指向当前方法
        var omethods = desc.value;
        desc.value = function () {
            var agr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                agr[_i] = arguments[_i];
            }
            console.log(agr);
            omethods.apply(this, __spreadArrays(agr));
        };
    };
}
var DD = /** @class */ (function () {
    function DD() {
    }
    DD.prototype.GetData = function () {
        var agr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            agr[_i] = arguments[_i];
        }
        console.log(agr);
        console.log('我是在dd里面的GetData');
    };
    __decorate([
        ddfn('传入')
    ], DD.prototype, "GetData", null);
    return DD;
}());
var dd = new DD();
dd.GetData('cc', 18);
