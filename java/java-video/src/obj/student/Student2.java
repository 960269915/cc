package obj.student;

//extends继承关键字
//所有的类，全部继承Object
public class Student2 extends Student1 {
    public Student2(String name,int age){
        //1子类需要使用super关键字，实现父类的构造函数
        super(name,age);
    }
//    2重写父类方法，无法重写静态方法
    @Override
    public void study(){
        //3调用父类的方法
        super.study();
        System.out.println("子类学习");
    }
    public void eat(){
        System.out.println("吃饭");
    }
}


//=============类的类型转换
//所有的类，都可以向上转型为自己的父类，因为子类拥有父类的属性和方法
//    Student1 stu2 = new Student2("cc",19);

//向下转型（转为子类）需要明确知道sp的类型才能转换
//Student2 sp = (Student2) stu2;

//instanceof 类型判断，判断一个类是否是另一个类或者另一个类的子类(实现了interface的，也是interface的子类)
//stu2 instanceof Student2