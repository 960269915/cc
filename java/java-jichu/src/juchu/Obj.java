package juchu;


//枚举类
enum Color{
    RED, GREEN, BLUE;
}



//抽象类的方法，继承了它的子类，必须实现它的方法
abstract class Action{
    abstract void say();
}


public class Obj extends Action{
    public String name;
    public Obj(String name) {
        this.name = name;
    }
    void say(){
    }
}


//继承，java是单继承，一个子类只能有一个父类，一个父类可以有多个子类
//子类转父类无需强制转换，父类转子类需要强转
class Person extends Obj{
    public Person(String name) {
        super(name); //super指向父类，就算不写，也会默认调用
    }

    //重写方法
    @Override
    void say() {
        System.out.println("我重写父类的方法，只能是非static的");
        System.out.println(this instanceof Obj); //instanceof判断是否是另一个对象的子类
    }
}
