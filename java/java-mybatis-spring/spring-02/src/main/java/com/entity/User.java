package com.entity;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Data
@Component
public class User {
    @Value("cc")
    String name;
    public void say(){
        System.out.println("hello");
    }
}
