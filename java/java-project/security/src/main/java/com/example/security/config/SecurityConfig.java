package com.example.security.config;

import com.example.security.filter.JwtAuthTokenFilter;
import com.example.security.handler.AuthError;
import com.example.security.handler.PermError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableGlobalMethodSecurity(prePostEnabled = true)//开启注解权限功能
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private JwtAuthTokenFilter jwtAuthTokenFilter;
    @Autowired
    private AuthError authError;
    @Autowired
    private PermError permError;

    @Bean
    //security的密码加密
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    //配置authenticationManager，用于密码检验
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
//    配置认证
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/user/login").anonymous() //登录接口，可以不鉴权,且不能携带token
                .anyRequest().authenticated();//除了登录，其他都要鉴权

//        添加自定义的过滤器(参数1位自己的过滤器，参数2位要添加到哪个过滤器之前)
        http.addFilterAfter(jwtAuthTokenFilter, UsernamePasswordAuthenticationFilter.class);
        //配置异常处理器
        http.exceptionHandling()
//                配置认证失败的处理器
                .authenticationEntryPoint(authError)
//                配置鉴权失败的处理器
                .accessDeniedHandler(permError);
        //security配置运行跨域
        http.cors();
    }

}
