package com;

import com.entity.Student;
import com.entity.User;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class Mytest {
    @Test
    public void test1(){
//        加载bean
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
//        获取bean
        Student s =(Student) context.getBean("student");
        System.out.println(s);
    }
}
