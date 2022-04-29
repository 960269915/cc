package com.example.security.controller;

import com.example.security.entity.LoginUser;
import com.example.security.entity.User;
import com.example.security.service.LoginService;
import com.example.security.utils.ResultUtils;
import com.example.security.vo.ResultVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/user/login")
    public ResultVo login(@RequestBody User user) {
        LoginUser userInfo = loginService.login(user);
        if (userInfo != null) {
            String token = userInfo.getUser().getToken();
            return ResultUtils.success(token);
        }
        return ResultUtils.err("账号或者密码错误");
    }

    @PreAuthorize("hasAuthority('manager')") //需要manager权限才能调用次方法
    @PostMapping("/user/test")
    public String test(@RequestBody User user) throws Exception {
        return "test";
    }

    @GetMapping("/user/loginout")
    public ResultVo loginout() {
        loginService.loginout();
        return ResultUtils.success("退出成功");
    }
}
