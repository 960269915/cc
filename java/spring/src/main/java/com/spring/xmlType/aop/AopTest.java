package com.spring.xmlType.aop;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;

//AOP操作，代理对象，在方法执行前或者执行之后，新增新的功能
//aop类也需要注册到bean
public class AopTest {
    public void beforeSay(JoinPoint point){//    JoinPoint 获取方法执行的信息，如参数
        System.out.println("方法之前调用,传递的参数值--" + point.getArgs()[0]);
    }
    public void afterSay(){
        System.out.println("方法之后调用");
    }
    public void around(ProceedingJoinPoint proceedingJoinPoint){
        try {
            proceedingJoinPoint.proceed(); //调用本体的方法
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        System.out.println("我是环绕方法，完全代理，如果本地方法有返回值，环绕方法也必须要有返回值");
    }
}
