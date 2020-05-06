let str: string = 'xx';

let num: number = 11;

// ===============泛型
let arr: Array<string> = ['cc', 'name']

// ================联合类型
let testval: string | number = 1;

// ===============枚举
enum Color { blue, red = 4, orange, black }

let c: Color = Color.black

console.log(Color.blue); //0，未声明值，返回下标。如在已声明值的后面，返回已声明值+从声明值开始算的下标，已声明值下标为0


// ============================================函数
// ===================函数传参
// 函数传递对象
function run({ name, age }: { name: string, age: number }): string {
    return name + age;
}
// 剩余参数，主要是规定agr的属性
function run1(name: string, ...agr: string[]) { }

// 可选参数和默认参数
function run2(name: string = 'cc', age?: number) { }

// 对象结构，默认赋值
function run3({ name = 'def', age }: { name?: string, age: number }) {
    console.log(name + age);
}

// =====================函数返回值
// 返回值为对象
function test(age:number):{name:string,age?:number}{
    return {
        name:'cc',
        age:age
    }
}

// =======================方法的重载

function getinfo(name:string):string
function getinfo(age:number):number
function getinfo(agr:number | string):any{
    if(typeof agr === 'string'){
        return '我的名字' + agr
    }else if(typeof agr === 'number'){
        return '我的年纪' + agr
    }
}
console.log(getinfo(18));

