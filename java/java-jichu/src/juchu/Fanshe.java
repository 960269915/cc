package juchu;

//获取class的方式
//类.class
//数据类型.getClass()

import java.lang.reflect.*;

class ClassObj{
    public String name = "cai";


    public ClassObj(String name) {
        this.name = name;
    }

    public void say(){
        System.out.println("say" + this.name);
    }
}

//动态代理，不手动new创建对象，Proxy.newProxyInstance()方式创建
interface Hello{
    void say(String name);
}
class TargetObj implements Hello{
    String name;

    public TargetObj(String name) {
        this.name = name;
    }
    public void say(String name){
        System.out.println("动态代理"+name);
    }
}

public class Fanshe {
    public static void main(String[] args) {
//        获取对象的class
        Class cls = ClassObj.class;
//        创建实例
        ClassObj classObj = new ClassObj("cc");
        try {
//            获取field
            Field name = cls.getField("name");
//            根据field获取值
            System.out.println(name.get(classObj) + "===name");
//            修改字段
            name.set(classObj,"zz");
            System.out.println(classObj.name);

//            获取方法
            Method say = cls.getMethod("say");
            say.invoke(classObj); //如果是静态方法，参数1传入null

//            获取constructor，直接newInstance只能获取无参构造，此方法可以获取有参的构造
            Constructor constructor = cls.getConstructor(String.class);
            ClassObj zzz =(ClassObj) constructor.newInstance("我是反射的构造方法实例出来的");
            zzz.say();

//            同样可以获取父类的class和实现的接口....

//            动态代理测试代码
            TargetObj targetObj = new TargetObj("ccc");
            Hello proxy =(Hello) getProxy(targetObj); //注意此处转型到父类的interface
            proxy.say(targetObj.name);
        }catch (Exception e){
            System.out.println(e);
        }


//        String str = "xxx";
////      获取String的Class实例:
//        Class cls = str.getClass();
//        try {
//            String newStr = (String) cls.newInstance(); //只能调用public的无参数构造方法
//            System.out.println(newStr);
//        } catch (InstantiationException e) {
//            e.printStackTrace();
//        } catch (IllegalAccessException e) {
//            e.printStackTrace();
//        }

    }
    public static Object getProxy(Object target){
        //定义一个InvocationHandler实例，它负责实现接口的方法调用；
        InvocationHandler invocationHandler = new InvocationHandler() {
            @Override
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                System.out.println("劫持方法，在方法前面做点什么");
                Object result = method.invoke(target, args);
                return result;
            }
        };
        Object proxy = Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), invocationHandler);
        return proxy;
    }
}
