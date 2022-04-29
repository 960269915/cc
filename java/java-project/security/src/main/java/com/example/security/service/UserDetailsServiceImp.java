package com.example.security.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.security.entity.LoginUser;
import com.example.security.entity.User;
import com.example.security.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

//security认证，重写UserDetailsService的认证方法，换成自己的逻辑
@Service
public class UserDetailsServiceImp implements UserDetailsService {
    @Autowired
    UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        查询用户信息
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("name", username);
        User user = userMapper.selectOne(queryWrapper);
        if (user == null) {
            throw new UsernameNotFoundException("未查询到用户信息");
        }
        //如果查询到用户，把用户信息封装成UserDetails返回 loginUser为自己实现的类
        LoginUser loginUser = new LoginUser();
        loginUser.setUser(user);
        return loginUser;
    }
}
