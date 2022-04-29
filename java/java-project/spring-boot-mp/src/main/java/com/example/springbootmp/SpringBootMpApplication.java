package com.example.springbootmp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

@MapperScan("com.example.springbootmp.generator.mapper")

//generator包下面的为自动生成的，其他为学习代码

public class SpringBootMpApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootMpApplication.class, args);
    }

}
