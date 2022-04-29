package com.example.security.mapper;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserMapperTest {
    @Autowired
    UserMapper userMapper;
    @Test
    public void test(){
        QueryWrapper queryWrapper = new QueryWrapper();
        System.out.println(userMapper.selectList(null));
    }
}