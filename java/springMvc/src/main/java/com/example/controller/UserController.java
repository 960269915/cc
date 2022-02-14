package com.example.controller;
import com.example.entity.MyRes;
import com.example.service.UserService;
import com.example.service.imp.UserServiceimp;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
/**
 * 1、controller 调用service的实现类
 * 2、service实现类里面去调用mapper
 * controller层负责接受前端数据和返回数据
 * */
@Controller
public class UserController {
    @Resource
    UserService userServiceimp;
    @Resource
    MyRes myRes;

    @RequestMapping("/getUser")
    @ResponseBody
    public MyRes getUser(String name){
        if(userServiceimp.getUser(name) != null){
            myRes.setStatus(200);
            myRes.setMessage("成功");
            myRes.setData(userServiceimp.getUser(name));
            return myRes;
        }
        myRes.setStatus(400);
        myRes.setMessage("未查询到人员信息");
        myRes.setData(null);
        return myRes;
    }

    @RequestMapping(value = "/addUser",method = RequestMethod.POST,params = {"name","password"})
    @ResponseBody
    public int addUser(@RequestParam("name") String name, @RequestParam("password") String password){
       return userServiceimp.addUser(name,password);
    }
}
