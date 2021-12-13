package obj.student;

//接口，只代表一个功能，不是一个类，接口包含了方法的具体定义，类可以去实现
//类通过关键字implements去实现
interface Study{
    String schName = "骑龙小学"; //默认是public static final,变量不需要实现，其实就是为所有的类添加常量
    void study();
}

//抽象类
/* 子类必须实现抽象类的方法，除非子类也是抽象类
* 抽象类不能new
* */
abstract class Student implements Study{
//    抽象类方法
    public abstract void study();
}

public class Student1 extends Student {
    private String name = "";
    int age = 0;
    public Student1(String name,int age){
        this.name = name;
        this.age = age;
    }
//    内部类
    public static class Inner{
//    Student1.Inner inner = new Student1.Inner(); 外部实例
    }
//    匿名内部类,不去继承或者实现接口，直接创建实例(只能访问final类型的变量)
    public static void niming(){
        final int a = 10;
        Study s = new Study() {
            @Override
            public void study() {
                System.out.println("匿名内部类" + a);
            }
        };
        s.study();
    }
    public void study(){
        System.out.println("父类学习" + schName);
    }
//    1私有化变量
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
