package com.example.security;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(" com.example.security.mapper")
public class SecurityApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecurityApplication.class, args);
    }

}

//security认证，重写UserDetailsService的认证方法，换成自己的逻辑
/*
 * usernamePasswordAuthenticationToken 是装载用户信息的，当登录时，里面存放前端传递的用户信息
 * 当登录成功以后，usernamePasswordAuthenticationToken里面存放数据库返回的用户信息，然后存入SecurityContextHolder
 * 所有的权限信息，都在SecurityContextHolder中可以获取
 * */

//security 项目流程
/*
 * 1、securityConfig里面为配置项
 * 2、UserDetailsServiceImp 重写security默认的认证，主要是验证用户是否存在，查询到用户后，return给下一步，这里不做密码校验
 * 3、LoginServiceImp 里面是登录的逻辑，配置authenticationManager为密码验证，当验证成功以后，做相应的处理
 * 4、自定义LoginUser去 继承security的UserDetails类，因为UserDetails里面封装了权限相关的获取方法
 * 5、JwtAuthTokenFilter为自定义的请求过滤器，目的是查询到用户信息以后，将用户信息存入SecurityContextHolder，因为security的权限也是在SecurityContextHolder.getContext().getAuthentication()
 * 6、handler里面是自定义的鉴权和验证失败
 * */
