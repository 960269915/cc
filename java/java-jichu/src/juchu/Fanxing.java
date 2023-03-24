package juchu;

import java.util.ArrayList;
import java.util.HashMap;

//泛型类
//所以泛型的实例，获取的class都是同一个
//无法instanceof判断
//所有的泛型，在jvm编译的时候，是不知道类型的。全部被当成object在处理，叫类型擦拭

//?指未知类型
//<? extends Integer> 上界通配符,泛型类型限定为Integer以及Integer的子类
//<? super Integer> 下界通配符，泛型类型限定为Integer或者Integer的父类
//T extends Number 使用extends限定T类型,用在类声明上

//==========================测试  extends
//水果类
class Fruit {}
//水果子类苹果类
class Apple extends Fruit {}
//容器类，有拿和放的功能
class Plate<T>{
    private T item;
    public Plate(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }

    public void setItem(T item) {
        this.item = item;
    }
}


class FanxingPerson<S,I>{
    S name;
    I age;
//    泛型方法,不能用于static的方法
    public S sayName(S name){
        return this.name;
    }

    public FanxingPerson(S name, I age) {
        this.name = name;
        this.age = age;
    }
}



public class Fanxing {
    public static void main(String[] args) {
        Fanxing fanxing = new Fanxing();
         FanxingPerson<String, Integer> stringIntegerFanxingPerson = new FanxingPerson<String,Integer>("cc",18);
        fanxing.say(stringIntegerFanxingPerson);
        extendsfn();
    }
//    函数参数为泛型类的实例，需要指定类型，否则可以随便更改实例值的类型
    void say(FanxingPerson<String,Integer> f){
        System.out.println(f.name);
    }
//    重点，解释了extends和super的使用
    public static void extendsfn(){
        Apple apple = new Apple();
//       编辑器逻辑，苹果是水果，但是装苹果的盘子，不等于装水果的盘子。所以转换失败。容器里水果有继承关系，但是容器没有
//        Plate<Fruit> plate = new Plate<Apple>(apple);
//        使用上界通配符，让水果盘子和苹果盘子发生关系，一个能放水果和水果子类的容器
//        上界通配符缺点，只能调用get，不能调用set,且取出来的要向上转型
//        比如水果pan有苹果和梨子两个子类，水果盘随便拿一个都是水果，但是如果拿梨子往里面放，就会出错
//        下界<? super T>不影响往里存，但往外取只能放在Object对象里，因为规定的下界，对于上界并不清楚，所以只能放到最根本的基类Object中
//        总结 需要频繁取值用上界，需要频繁存值，用下界
        Plate<? extends Fruit> plate = new Plate<Apple>(apple);
        Fruit item = plate.getItem();
        System.out.println(item);

    }
}
