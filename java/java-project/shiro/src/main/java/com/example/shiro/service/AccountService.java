package com.example.shiro.service;

import com.example.shiro.entity.Account;

public interface AccountService {
    public Account findByUsername(String username);
}
