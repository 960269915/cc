package com.example.security.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("account")
public class User {
    @TableId
    private Integer id;
    private String name;
    private String password;
    private String perms;
    private String role;
    private String token;
}
