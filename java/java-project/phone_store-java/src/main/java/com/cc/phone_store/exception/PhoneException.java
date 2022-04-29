package com.cc.phone_store.exception;

import com.cc.phone_store.enums.PhoneStockEnums;

public class PhoneException extends RuntimeException{

    public PhoneException(PhoneStockEnums phoneStockEnums) {
        super(phoneStockEnums.getMsg());
    }
}
