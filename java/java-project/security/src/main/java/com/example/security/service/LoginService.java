package com.example.security.service;

import com.example.security.entity.LoginUser;
import com.example.security.entity.User;

public interface LoginService {
    LoginUser login(User user);
    void  loginout();
}
