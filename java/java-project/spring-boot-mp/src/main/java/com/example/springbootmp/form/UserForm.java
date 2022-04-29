package com.example.springbootmp.form;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UserForm  {
    @NotBlank(message = "用户名不能为空")
    private String userName;
    @NotBlank(message = "密码不能为空")
    private String password;
}
