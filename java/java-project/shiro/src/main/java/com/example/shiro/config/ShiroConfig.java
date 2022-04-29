package com.example.shiro.config;

import com.example.shiro.realm.AccountRealm;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ShiroConfig {
    @Bean
//    1、注册自定义的realm
    public AccountRealm accountRealm(){
        return new AccountRealm();
    }
    @Bean
//    2、将自己的realm注册到manager
    public DefaultWebSecurityManager defaultWebSecurityManager(@Qualifier("accountRealm") AccountRealm accountRealm){
        DefaultWebSecurityManager manager = new DefaultWebSecurityManager();
        manager.setRealm(accountRealm);
        return manager;
    }

    @Bean
//    3、将manager加载到factory
    public ShiroFilterFactoryBean shiroFilterFactoryBean(@Qualifier("defaultWebSecurityManager") DefaultWebSecurityManager defaultWebSecurityManager){
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        shiroFilterFactoryBean.setSecurityManager(defaultWebSecurityManager);

//        此处写权限逻辑
        Map<String,String> map = new HashMap<>();
        map.put("/main","authc"); //访问main必须认证
        map.put("/manager","perms[manager]"); //访问manager，必须要有manager权限
        map.put("/admin","roles[admin]"); //访问admin，必须拥有admin角色
        shiroFilterFactoryBean.setFilterChainDefinitionMap(map);

        shiroFilterFactoryBean.setLoginUrl("/unauth"); //设置未登录
        shiroFilterFactoryBean.setUnauthorizedUrl("/unauth");//设置未授权
        return shiroFilterFactoryBean;
    }
}
