package web.proxy;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

//动态代理，不写类的实现，直接创建interface的实例

public class ProxyTest{
    public Object getProxy(Object object){
        //            该方法在代理对象调用方法时调用
        InvocationHandler handler = (proxy, method, args) -> {
            System.out.println(method);
            if(method.getName() == "say"){
                System.out.println(method.getName() +"---"+ args[0] + "被代理了");
            }
            return null;
        };

//        调用Proxy的newProxyInstance方法可以生成代理对象
        Object obj = (Object) Proxy.newProxyInstance(
                object.getClass().getClassLoader(),
                object.getClass().getSuperclass().getInterfaces(), //getSuperclass 为获取父类的，如果没有父类，可以省略
                handler
        );
        return  obj;
    }


    public void test(){
        InvocationHandler handler = new InvocationHandler() {
            @Override
//            该方法在代理对象调用方法时调用
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                System.out.println(method);
                if(method.getName() == "say"){
                    System.out.println(method.getName() +"---"+ args[0] + "被代理了");
                }
                return null;
            }
        };

//        调用Proxy的newProxyInstance方法可以生成代理对象
        Person person = (Person) Proxy.newProxyInstance(
                Person.class.getClassLoader(), //传入ClassLoader
                new Class[]{Person.class}, // 传入要实现的接口
                handler// 传入处理调用方法的InvocationHandler
        );
        person.say("xx");
    }
}
