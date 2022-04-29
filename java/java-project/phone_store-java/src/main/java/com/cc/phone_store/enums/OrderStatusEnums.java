package com.cc.phone_store.enums;

import lombok.Getter;

@Getter
public enum OrderStatusEnums {
    ORDER_SUCCESS(1,"支付成功"),
    ORDER_FAIL(0,"未支付"),
    ;
    private Integer code;
    private String msg;
    OrderStatusEnums(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
