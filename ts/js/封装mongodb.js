"use strict";
// Mysql 去实现 DBI接口 因为DBI是泛型接口  所有Mysql也需要是泛型
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    Mysql.prototype.add = function (info) {
        // console.log(info);
        return true;
    };
    Mysql.prototype.update = function (info, id) {
        return true;
    };
    Mysql.prototype.del = function (id) {
        return true;
    };
    Mysql.prototype.get = function (id) {
        return [];
    };
    return Mysql;
}());
// 假如操作用户user表  需要先定义个user类，和数据库做映射 （可以用class，也可以用Interface 创建）
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// 创建一个用户实例
var u = new User();
u.userName = 'cc';
u.passWord = '123';
var mysql = new Mysql();
mysql.add(u);
