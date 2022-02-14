package com.study.entrity;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Data
@Component
public class User {
    String name;
    String password;
    int uid;
    public void say(){
        System.out.println(name);
    }
}
