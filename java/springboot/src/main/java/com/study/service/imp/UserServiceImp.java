package com.study.service.imp;

import com.study.entrity.User;
import com.study.mapper.UserMapper;
import com.study.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImp implements UserService {
    @Resource
    UserMapper userMapper;
    @Override
    public User getUser(String name) {
        return userMapper.getUser(name);
    }
}
