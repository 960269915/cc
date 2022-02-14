package com.example.entity;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Log {
    String message;
    int uid;
    String name;
}
