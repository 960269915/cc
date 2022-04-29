package com.example.springbootmp.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import lombok.Data;
public enum UserStatusEnum {
    OPEN(1,"启用"),
    CLOSE(0,"禁用")
    ;
    @EnumValue //枚举注解
    private Integer code;
    private String msg;

    UserStatusEnum(Integer code, String msg) {

        this.code = code;
        this.msg = msg;
    }
}
