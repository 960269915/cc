package com.example.security.utils;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TokenTest {
    @Test
    void test(){
        System.out.println(Token.parse("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJleHAiOjE2NTA2Nzk3NTQsImp0aSI6ImM0YTEzY2MxLTNlYjAtNGUyMi04NTU0LThiNDc3NTg4ZTk0ZSJ9.f2ojj_Pgu90Mvzhxrjr8r8MyTuqk4C55wYqBWPr4tk8"));
    }
}