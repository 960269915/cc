package com.example.service.imp;

import com.example.entity.User;
import com.example.mapper.Logmap;
import com.example.mapper.Usermap;
import com.example.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Service
/**
 * service层负责跟数据库交互
 * */
public class UserServiceimp implements UserService {
    @Resource
    Usermap usermap;
    @Resource
    Logmap logmap;
    @Override
    public User getUser(String name) {
        return  usermap.getUser(name);
    }

    @Override
    @Transactional
    public int addUser(String name, String password) {
        User user = new User();
        user.setName(name);
        user.setPassword(password);
        if(usermap.addUser(user) <=0){
            throw new RuntimeException("添加用户信息时错误");
        }
        if(logmap.addLog("学生插入成功",user.getUid(),name) <=0){
            throw new RuntimeException("添加日志信息时错误");
        }
        if(name.equals("1")){
            throw new RuntimeException("不能创建用户名为1的用户");
        }
        return 1;
    }
}
