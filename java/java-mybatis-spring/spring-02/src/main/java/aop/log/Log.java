package aop.log;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class Log  {
    @Pointcut("execution(* com.entity.*.*(..))")
    private void ms() {
    }
//    第一个*为任意返回值
//    后面为UserService类上的任意方法
//    (..)方法的任意参数
    @Before("ms()")
    public void before(){
        System.out.println("方法执行前");
    }
}
