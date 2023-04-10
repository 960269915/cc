package com.entity;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Data
//@Component 等价于spring.xml注册bean
@Component
public class Student {
//    Autowired 自动注入依赖
    @Autowired
    User user;
//    Value 设置值
    @Value("12")
    Integer age;

//    public Student(@Autowired User user, Integer age) {
//        System.out.println("Student的有参构造");
//        this.user = user;
//        this.age = age;
//    }
//
//    public Student() {
//        System.out.println("Student的无参构造");
//    }
}
