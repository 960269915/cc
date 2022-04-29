package com.example.security.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;
import java.util.stream.Collectors;

@Data
@JsonIgnoreProperties({"enabled", "username", "password", "accountNonExpired", "accountNonLocked", "credentialsNonExpired", "authorities"})
public class LoginUser implements UserDetails {
    private User user;

    @Override
//    存放权限的集合
    public Collection<? extends GrantedAuthority> getAuthorities() {
        String perms = user.getPerms();
        List<String> list = new ArrayList<String>(Arrays.asList(perms.split(",")));
        return list.stream().map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
