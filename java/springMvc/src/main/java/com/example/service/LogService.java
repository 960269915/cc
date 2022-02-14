package com.example.service;

import org.apache.ibatis.annotations.Param;

public interface LogService {
    public int add(String message,int uid,String name);
}
