package com.example.security.filter;

import com.example.security.entity.LoginUser;
import com.example.security.utils.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;
import java.util.Objects;

//请求的过滤器
//注意过滤器在访问的时候和返回结果的时候，都会经过
@Component
public class JwtAuthTokenFilter extends OncePerRequestFilter {
    @Autowired
    private RedisTemplate redisTemplate;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        1、获取token
        String token = request.getHeader("token");
        if (!StringUtils.hasText(token) && request.getRequestURI().equals("/user/login")) {
            filterChain.doFilter(request, response); //没有token，直接放行，因为还要后续的过滤器会判断是否是授权的
            return; //添加return的目的，是应为返回的时候还会经过过滤器
        }
//        2、解析token
        Map<String, Object> parse = Token.parse(token);
        if (!StringUtils.hasText((String) parse.get("id"))) {
            throw new ServletException("获取token失败");
        }
        String id = (String) parse.get("id");
//        3、根据token，获取Redis中的用户信息
        LoginUser loginUser = (LoginUser) redisTemplate.opsForValue().get("userid" + id);
        if (Objects.isNull(loginUser)) {
            throw new ServletException("用户信息获取失败");
        }
//        4、将用户信息存入securityContextHolder
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(loginUser,null,loginUser.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        filterChain.doFilter(request, response);
    }
}
