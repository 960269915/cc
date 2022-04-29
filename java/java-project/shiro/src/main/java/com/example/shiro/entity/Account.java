package com.example.shiro.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName
public class Account {
    private Integer id;
    private String name;
    private String password;
    private String perms;
    private String role;
}
