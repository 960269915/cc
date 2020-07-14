// 定义一个操作数据库的方法 支持mysql mondodb
interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    del(id: number): boolean;
    get(id: number): any[];
}


// Mysql 去实现 DBI接口 因为DBI是泛型接口  所有Mysql也需要是泛型
class Mysql<T> implements DBI<T>{
    add(info: T): boolean {
        // console.log(info);
        return true;
    }
    update(info: T, id: number): boolean {
        return true;
    }
    del(id: number): boolean {
        return true;
    }
    get(id: number): any[] {
        return []
    }
}

// 假如操作用户user表  需要先定义个user类，和数据库做映射 （可以用class，也可以用Interface 创建）
class User{
    userName:string | undefined; //加入undefiend是为了避免编辑器报错
    passWord:string | undefined;
}

// 创建一个用户实例
let u:User = new User();
u.userName = 'cc';
u.passWord = '123';

let mysql:Mysql<User> = new Mysql();
mysql.add(u)
