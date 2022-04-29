package com.example.springbootmp.generator.controller;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.springbootmp.form.UserForm;
import com.example.springbootmp.generator.entity.User;
import com.example.springbootmp.generator.service.UserService;
import com.example.springbootmp.jwt.Token;
import com.example.springbootmp.utils.ResultUtils;
import com.example.springbootmp.vo.ResultVo;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author caiyuntao
 * @since 2022-04-07
 */
@RestController
@RequestMapping("/generator/user")
public class UserController {
    @Resource
    UserService userService;
    @Resource
    private RedisTemplate redisTemplate;

    @PostMapping("/login")
    public ResultVo login(@RequestBody @Valid UserForm userForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResultUtils.err(bindingResult.getFieldError().getDefaultMessage());
        }
        QueryWrapper queryWrapper = new QueryWrapper();
        queryWrapper.eq("name", userForm.getUserName());
        queryWrapper.eq("password",userForm.getPassword());
        User user = userService.getOne(queryWrapper);
        if (user != null) {
            Map<String,Object> userInfo = new HashMap<>();
            userInfo.put("username",user.getName());
            userInfo.put("userid",user.getId());
            user.setToken(Token.create(userInfo));
            return ResultUtils.success(user);
        } else {
            System.out.println("用户不存在");
            return ResultUtils.err("用户不存在");
        }
    }
    @GetMapping("/checkToken")
    public Boolean checkToken(HttpServletRequest httpServletRequest){
        String token = httpServletRequest.getHeader("token");
        Map<String,Object> tokenInfo = Token.parse(token);
        if(tokenInfo.get("expiration") != null){
            return true;
        }
        return false;
    }
}

