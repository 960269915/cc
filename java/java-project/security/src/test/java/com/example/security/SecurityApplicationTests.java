package com.example.security;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootTest
class SecurityApplicationTests {

    @Test
    void contextLoads() {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
//        String code = bCryptPasswordEncoder.encode("123");
//        System.out.println(code);
//        解密
        System.out.println(bCryptPasswordEncoder.matches("123", "$2a$10$RJiAR7IGHMhrRdJlZAM17Oh.dhHgTybkdZY/JcZywObMBdVi9K07O"));
    }
}
