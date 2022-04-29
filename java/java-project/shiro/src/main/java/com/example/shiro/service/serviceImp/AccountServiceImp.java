package com.example.shiro.service.serviceImp;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.shiro.entity.Account;
import com.example.shiro.mapper.AccountMapper;
import com.example.shiro.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImp implements AccountService {
    @Autowired
    private AccountMapper accountMapper;
    @Override
    public Account findByUsername(String username) {
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("name",username);
        Account account = accountMapper.selectOne(queryWrapper);
        return account;
    }
}
