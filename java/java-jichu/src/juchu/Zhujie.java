package juchu;

import java.lang.annotation.*;
import java.lang.reflect.Method;

//定义注解（Annotation）
//注解没有特殊意思，需要配合反射使用
//=================最常用的元注解是@Target。使用@Target可以定义注解能够被应用于源码的哪些位置：
//        类或接口：ElementType.TYPE；
//        字段：ElementType.FIELD；
//        方法：ElementType.METHOD；
//        构造方法：ElementType.CONSTRUCTOR；
//        方法参数：ElementType.PARAMETER。

//=================@Retention 什么时候用
//        仅编译期：RetentionPolicy.SOURCE；
//        仅class文件：RetentionPolicy.CLASS；
//        运行期：RetentionPolicy.RUNTIME


//=================父类注解，是否可以子类使用@Inherited

@Target({ElementType.METHOD}) //作用域
@Retention(RetentionPolicy.RUNTIME) //什么时候用，默认CLASS,一般设为RUNTIME
@interface Report{
    int value() default 0;
    int max();
    int min();
}



public class Zhujie {
    public static void main(String[] args) {
        int age = 110;
        Zhujie zhujie = new Zhujie();
        try {
//            检查值是否满足注解
            zhujie.check(age);
            zhujie.say(age);
        } catch (ReflectiveOperationException e) {
            e.printStackTrace();
        }
    }
    @Report(value = 1,max = 100,min = 0)
    public void say(int age){
        System.out.println("age" + "----" + age);
    }
    public void check(int age) throws IllegalArgumentException, ReflectiveOperationException{
        Class<Zhujie> zhujieClass = Zhujie.class;
        try {
            Method say = zhujieClass.getMethod("say",int.class);
//            获取方法的注解
            Report annotation = say.getAnnotation(Report.class);
//            获取注解的值
            int max = annotation.max();
            int min = annotation.min();
            if(age > max || age < min){
                throw new IllegalArgumentException("参数错误");
            }
            System.out.println(max+"--------"+min);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
    }
}
