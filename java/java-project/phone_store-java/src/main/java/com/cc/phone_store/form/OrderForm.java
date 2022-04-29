package com.cc.phone_store.form;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class OrderForm {
//    private String orderId;
    @NotEmpty(message = "姓名不能为空")  //NotEmpty 只能判断字符串或者集合，NotNull判断number或者类
    private String name;
    @NotEmpty(message = "电话不能为空")
    private String tel;
    @NotEmpty(message = "地址不能为空")
    private String address;
    @NotNull(message = "specsId不能为空")
    private Integer specsId;
    @NotNull(message = "quantity不能为空")
    private Integer quantity;
}
