package com.example.shiro.mapper;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AccountMapperTest {
    @Resource
    AccountMapper accountMapper;
    @Test
    void test(){
        System.out.println(accountMapper.selectList(null));
    }
}