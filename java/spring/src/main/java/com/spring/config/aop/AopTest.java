package com.spring.config.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

//aop操作的类
@Aspect
@Component
public class AopTest {

    @Before("execution(* com.spring.config.bean.Student.say(String))")
    public void before(JoinPoint joinPoint){
        System.out.println("say方法执行之前做的事情" + "say方法传递的参数为---" + joinPoint.getArgs()[0]);
    }
    @AfterReturning("execution(* com.spring.config.bean.Student.say(String))")
    public void after(){
        System.out.println("say方法执行之后做的事情");
    }
    @Around("execution(* com.spring.config.bean.Student.say(String))")
    public Object around(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
            System.out.println("我是环绕方法，完全代理，如果本地方法有返回值，环绕方法也必须要有返回值");
            Object val = proceedingJoinPoint.proceed();
            return val;
    }
}
