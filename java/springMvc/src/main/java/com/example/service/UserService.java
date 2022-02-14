package com.example.service;

import com.example.entity.User;

public interface UserService {
    public User getUser(String name);
    public int addUser(String name,String password);
}
