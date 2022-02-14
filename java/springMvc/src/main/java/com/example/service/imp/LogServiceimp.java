package com.example.service.imp;

import com.example.mapper.Logmap;
import com.example.service.LogService;

import javax.annotation.Resource;

public class LogServiceimp implements LogService {
    @Resource
    Logmap logmap;
    @Override
    public int add(String message,int uid,String name) {
        return logmap.addLog(message,uid,name);
    }
}
