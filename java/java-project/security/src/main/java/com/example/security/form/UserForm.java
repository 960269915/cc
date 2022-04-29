package com.example.security.form;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class UserForm {
    @NotBlank
    private String name;
    @NotBlank
    private String password;
}
