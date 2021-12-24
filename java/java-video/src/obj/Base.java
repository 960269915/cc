package obj;

public class Base {
//    1成员变量
    private String name;
    int age;
    static int score; //static修饰符 静态变量，属于当前类，所有对象共享，一次改变，其他的全部改变
//    2构造方法(构造方法也可以重载)
    public Base(){}
    public Base(String name,int age){
        this.name = name; //this代表实例，不能在静态方法中使用
        this.age = age;
    }
//    3成员方法
    public void say(){ //public修饰符，实例调用

    }
//    4方法的重载，一个类里面可以包含多个重名的方法，但是参数类型不同
    public void sum(int a,int b){
        System.out.println(a+b);
    }
    public void sum(double a,double b){
        System.out.println(a+b);
    }
    static void staticfn(){} //静态方法,当跨包时，一定要加public修饰符

//    5私有变量的设置和访问
    public int getAge() {
        return age;
    }
    public void setName(String name) {
        this.name = name;
    }
}


//访问修饰符
/*
* private 只能在同一个类中使用（私有的）
* protected 同一个类 同一个包  子类
* public 任何地方
* */
