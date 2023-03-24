package com.entity;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

@Data
public class Student {
//    Autowired 自动注入依赖
    @Autowired
    User user;
//    Value 设置值
    @Value("12")
    Integer age;

    public Student(@Autowired User user, Integer age) {
        System.out.println("user的有参构造");
        this.user = user;
        this.age = age;
    }

    public Student() {
        System.out.println("user的无参构造");
    }
}
