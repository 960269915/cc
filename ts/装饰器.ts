// ==========================普通装饰器，不可传参
function logfn(params:any){ //params代表被装饰的类
    params.prototype.name = 'cc';
    params.prototype.run = ()=>{
        console.log('run');
    }
}

@logfn //装饰A,相当于在A上面动态扩展属性和方法
class A{
    constructor() {
        
    }
}
// let a = new A();
// a.run();




//=========================== 装饰器工厂，可传参
function fnaa(name:string){
    return function(target:any){
        console.log(name); //传递进来的参数
        console.log(target); //被装饰的类
        target.prototype.name = name;
    }
}

@fnaa('cc')
class AA{
    constructor() {
        
    }
}

// let aa = new AA();
// console.log(aa.name);




// ==================================重置类的值和方法
function fnbb(str:string){
    return function(target:any){
        console.log(target);
        return class extends target{
            name = '我是修改后的name' //重置值
            GetName(){ //重置方法
                console.log(`修改后的GetName`+ this.name);
            }
        }
    }
}

@fnbb('传递进来的参数')
class BB{
    name:string | undefined;
    constructor() {
        this.name = 'ccc'
    }
    GetName(){
        console.log(this.name);
    }
}

// let bb = new BB();
// bb.GetName();




// ==============属性装饰器
function prop(name:string){
    return function(target:any,attr:any){
        console.log(target); //被装饰的类
        console.log(attr); //被装饰的属性名称
        target[attr] = name;
    }
}
class CC{
    @prop('我是被装饰的name')
    name:string | undefined;
    constructor() {
    }
    GetName(){
        console.log(this.name + '---');
    }
}

let cc = new CC();
cc.GetName();


// =====================方法装饰器
function ddfn(agr:string){
    return function(target:any,methodName:any,desc:any){
        console.log(target); //被装饰的类
        console.log(methodName); // 被装饰的方法名称
        console.log(desc); //方法的描述  desc.value 指向当前方法
        let omethods = desc.value;
        desc.value = function(...agr:any[]){
            console.log(agr);
            omethods.apply(this,[...agr])
        }
    }
}
class DD{
    constructor() {
        
    }
    @ddfn('传入')
    GetData(...agr:any[]){
        console.log(agr);
        console.log('我是在dd里面的GetData');
    }
}

let dd = new DD();
dd.GetData('cc',18);