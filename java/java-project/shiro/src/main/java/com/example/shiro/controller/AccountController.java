package com.example.shiro.controller;

import com.example.shiro.service.AccountService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountController {
    @Autowired
    AccountService accountService;
    @GetMapping("/{url}")
    public Map<String,String> test(@PathVariable("url") String url){
        Map<String,String> map = new HashMap<>();
        map.put("url",url);
        return map;
    }
    @PostMapping("/login")
    public String login(String username,String password){
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        try {
            subject.login(token); //会进入到 doGetAuthenticationInfo
            return "success";
        }catch (Exception e){
            e.printStackTrace();
            return "error";
        }
    }
    @GetMapping("/loginout")
    public void loginout(){
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
    }
    @GetMapping("/unauth")
    public String unauth(){
        return "无权限";
    }
}
