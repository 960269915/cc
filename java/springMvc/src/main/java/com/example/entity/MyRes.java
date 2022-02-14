package com.example.entity;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class MyRes {
    int status = 200;
    String message = "成功";
    Object data;
}
