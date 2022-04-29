package com.example.security.service.imp;

import com.example.security.entity.LoginUser;
import com.example.security.entity.User;
import com.example.security.service.LoginService;
import com.example.security.utils.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class LoginServiceImp implements LoginService {
    @Autowired
    RedisTemplate redisTemplate;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public LoginUser login(User user) {
        try {
            //try 会捕获到UserDetails和authenticationManager.authenticate的错误信息
            //把用户传递的对象，封装成Authentication对象
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(user.getName(), user.getPassword());
//        此时会进入UserDetails里面，拿到用户名匹配的数据，再由authenticationManager.authenticate去验证密码
            Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
            LoginUser loginUser = (LoginUser) authentication.getPrincipal();
            String id = loginUser.getUser().getId().toString();
            Map<String, Object> userToken = new HashMap<>();
//        根据id生成token
            userToken.put("id", id);
            String token = Token.create(userToken);
            loginUser.getUser().setToken(token);
            //        将完整的信息存入redis,id为key
            redisTemplate.opsForValue().set("userid" + id, loginUser);
            return loginUser;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public void loginout() {
//        1、获取SecurityContextHolder中的用户id
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        LoginUser principal = (LoginUser) authentication.getPrincipal();
        Integer id = principal.getUser().getId();
//        2删除redis中的值
        redisTemplate.delete("userid" + id.toString());
    }
}
