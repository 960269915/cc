package zhujie;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD,ElementType.TYPE,ElementType.PARAMETER}) //注解在方法上面
@Retention(RetentionPolicy.RUNTIME)//运行时
public @interface Methodzj {
//    String value() default ""; //默认一个值的时候，就可以定义为value,default指定默认值
    String name();
}


