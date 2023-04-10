package com;

import aop.service.UserService;
import aop.service.UserServiceImp;
import com.entity.School;
import com.entity.Student;
import com.entity.User;
import com.mapper.SchoolMapper;
import com.mapper.SchoolMapperImp;
import config.JavaConfig;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

//重点  重点   重点   spring 最主要的 就是ioc  管理和注入bean(就是管理类) 和aop

public class Mytest {
    @Test
    public void test1(){
//        ==============================最好结合方式，注册bean使用xml，属性注入使用注解
//        xml方式
////        加载bean
//        ApplicationContext c  = new ClassPathXmlApplicationContext("spring.xml");
////        获取bean
//        User user = c.getBean("user",User.class);
//        user.say();
//        javaConfig方式
        ApplicationContext c = new AnnotationConfigApplicationContext(JavaConfig.class);
        User user =(User) c.getBean("user");
        user.say();
    }
    @Test
    public void test2(){
        ApplicationContext c  = new ClassPathXmlApplicationContext("spring.xml");
        SchoolMapper schoolMapper = c.getBean(SchoolMapper.class);
        School school = new School("xx",2);
        schoolMapper.addSchool(school);
        schoolMapper.delSchool(2);
    }
}
