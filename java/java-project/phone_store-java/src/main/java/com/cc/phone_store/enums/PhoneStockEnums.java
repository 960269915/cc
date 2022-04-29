package com.cc.phone_store.enums;

import lombok.Getter;

@Getter
public enum PhoneStockEnums {
    PHONE_STOCK_SUCCESS(1,"库存足"),
    PHONE_STOCK_ERROR(0,"库存不足");

    private Integer code;
    private String msg;

    PhoneStockEnums(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
