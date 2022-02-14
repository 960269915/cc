package com.spring;
import com.spring.config.Config;
import com.spring.config.service.CardService;
import com.spring.config.service.imp.CardServiceImp;
import com.spring.xmlType.bean.Student;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
//        使用xml
//        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("springConfig.xml");
//        Student student =(Student) context.getBean("student"); //获取student，不需要使用new的
//        student.say("haha");

//        使用注解开发（推荐）
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Config.class);

    }
}
