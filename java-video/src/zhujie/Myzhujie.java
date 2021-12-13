package zhujie;
//元注解，解释普通注解，普通注解无法单独工作，需要元注解才能正常工作
//元注解有 @Retention、@Documented、@Target、@Inherited、@Repeatable 5 种。
/**
 * Retention,注解的的存活时间,通常使用RetentionPolicy.RUNTIME
 * Documented 将注解中的元素包含到 Javadoc 中去
 * Target 指定了注解运用的地方（可以包含多个）
 *          ElementType.ANNOTATION_TYPE 可以给一个注解进行注解
 *          ElementType.CONSTRUCTOR 可以给构造方法进行注解
 *          ElementType.FIFIELDELD 可以给属性进行注解
 *          ElementType.LOCAL_VARIABLE 可以给局部变量进行注解
 *          ElementType.METHOD 可以给方法进行注解
 *          ElementType.PACKAGE 可以给一个包进行注解
 *          ElementType.PARAMETER 可以给一个方法内的参数进行注解
 *          ElementType.TYPE 可以给一个类型进行注解，比如类、接口、枚举
 * Inherited 是继承的意思,如果一个父类被注解过，那么他子类没有注解的情况下，子类会继承父类的注解
 * Repeatable 可重复的意思,一个人他既是程序员又是产品经理,同时他还是个画家
 * */
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;

class MyTest{
    //    1、字段使用注解
    @Fieldzj(name = "caiyuntao")
    public String name;
//    2、函数参数使用注解
    public void test( @Methodzj(name = "caiyuntao") String name){

    }
}


public class Myzhujie {
//    1、获取注解
    public void say(){
        Class<MyTest> myTestClass = MyTest.class;
        try {
            Method method = myTestClass.getMethod("test",String.class);
            Field name = null;
            try {
                name = myTestClass.getField("name");
            } catch (NoSuchFieldException e) {
                e.printStackTrace();
            }
//            System.out.println(name.isAnnotationPresent(Fieldzj.class)); //判断某个注解是否存在于field
//            System.out.println(method.isAnnotationPresent(Methodzj.class)); //判断某个注解是否存在于method
//            Annotation[][] Mannotation =  method.getParameterAnnotations(); //获取方法参数的注解
            Annotation[] Fannotation = name.getAnnotations();//获取成员变量的注解
            Fieldzj fieldzj = (Fieldzj) Fannotation[0]; //拿取注解值
            System.out.println(fieldzj.name());
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
    }
}
