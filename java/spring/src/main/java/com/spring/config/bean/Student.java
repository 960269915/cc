package com.spring.config.bean;
import lombok.Data;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.annotation.Resource;

@Data
//Component 注解表示这个类将被注册到bean中
@Component
public class Student {
    String name;
    //   Resource 自动注入，推荐用在字段上（字段必须是引用类型，且已注册到Javabean）。方法上可以使用@Autowired
    //   @Resource
//    Card card;
    //注意Autowired如果用在方法上，那么被设置的字段必须是引用类型，且已注册到Javabean
    Student(){
//        System.out.println("构造函数");
    }
//    @Autowired
//    public void setCard(Card card) {
////        System.out.println("设置card");
//        this.card = card;
//    }
    //PostConstruct 等同于init-method
    @PostConstruct
    public void init(){
//        System.out.println("属性card为" + card);
    }
//    PreDestroy等同于destroy-method
    @PreDestroy
    public void destory(){
//        System.out.println("销毁");
    }
    public String say(String text){
        System.out.println("我说--" + text);
        return text;
    }
}
