package com.example.shiro.realm;

import com.example.shiro.entity.Account;
import com.example.shiro.service.AccountService;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.Set;

public class AccountRealm extends AuthorizingRealm {
    @Autowired
    private AccountService accountService;
    @Override
//    授权（登录后的授权）角色的权限信息，授权时使用
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        Subject subject = SecurityUtils.getSubject();//拿取用户信息
        Account account =(Account) subject.getPrincipal();

//        设置角色
        Set<String> roles = new HashSet<>();
        roles.add(account.getRole());
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo(roles);
//        设置权限
        info.addStringPermission(account.getPerms());
        return info;
    }

    @Override
//    认证(登录操作) 用户的角色信息集合，认证时使用
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken usernamePasswordToken =(UsernamePasswordToken) authenticationToken; //获取客户端传递的token，包含了用户名和密码
        Account account = accountService.findByUsername(usernamePasswordToken.getUsername());//数据库查询用户
        if(account != null){
            return new SimpleAuthenticationInfo(account,account.getPassword(),account.getName()); //验证用户名，密码
        }
        return null;
    }
}
