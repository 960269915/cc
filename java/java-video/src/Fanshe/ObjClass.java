package Fanshe;
import java.io.File;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;

//反射
//class对象，当加载一个类的时候，会提取类的信息，放在内存中，生成class对象。而反射就是利用存放的类信息，来获取类的信息和操作类
//每个类（包括自己创建的类）只会存在一个class对象
public class ObjClass {
    static class Student{
        public String name;
        public Student(String name){
            this.name = name;
        }
        public void run(String time){
            System.out.println(this.name +time+ "跑步");
        }
    }
//    1、获取class
    public void say1(){
        Class<String> stringClass = String.class;//获取class方式1
        Class<?> strClass = new String("").getClass();//获取class方式2
    }

//    2、获取和判断类型
    public void say2(){
        String str = new String("cc");
        Integer i = 10;
        System.out.println(str.getClass() == String.class); //判断类型
        System.out.println(i.getClass().getSuperclass()); //获取父类
        System.out.println(i.getClass().getInterfaces()[0]); //获取实现的接口,返回数组类型
    }
//    3、根据class创建对象
    public void say3(){
        Class<Student> studentClass  = Student.class; //获取class
        try {
//            getDeclaredConstructor 可以访问非public的构造方法，无视权限
//            studentClass.getConstructor(String.class).setAccessible(true); 强行打开访问权限
            Student student = studentClass.getConstructor(String.class).newInstance("caiyuntao"); //String.class 为构造方法参数类型，newInstance里面传入参数
//            student.run(); //调用实例的方法
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
//    4、调用方法
    public void say4(){
        Class<?> studentClass = Student.class;
        try {
            Object instance = studentClass.getConstructor(String.class).newInstance("caiyuntao"); //获取实例
            Method run = studentClass.getMethod("run",String.class); //传入方法名称和参数类型class
            run.invoke(instance,"早上"); //调用方法，传入实例和参数（类似js的call和apply）
//            System.out.println(run.getName()); 获取方法名称
//            System.out.println(run.getReturnType());//获取返回值类型
//            System.out.println(Arrays.toString(run.getParameterTypes()));//获取参数类型，数组类型
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }
//    5、访问和修改属性
    public void say5(){
        Class<?> studentClass = Student.class;
        try {
            Field name = studentClass.getField("name");
            Object instance = null; //获取实例
            try {
                instance = studentClass.getConstructor(String.class).newInstance("caiyuntao");
                name.set(instance,"cai"); //设置字段
                Method run = studentClass.getMethod("run",String.class);
                run.invoke(instance,"早上");
            } catch (Exception e) {
                e.printStackTrace();
            }
        } catch (NoSuchFieldException e) {
            e.printStackTrace();
        }

    }
}
