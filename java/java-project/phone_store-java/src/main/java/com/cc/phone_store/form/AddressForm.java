package com.cc.phone_store.form;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotEmpty;

@Data
@Accessors(chain = true)
public class AddressForm {
    private Integer id;
    @NotEmpty(message = "姓名不能为空")
    private String name;
    @NotEmpty(message = "电话不能为空")
    private String tel;
    @NotEmpty(message = "省不能为空")
    private String province;
    @NotEmpty(message = "市不能为空")
    private String city;
    @NotEmpty(message = "区不能为空")
    private String county;
    @NotEmpty(message = "code不能为空")
    private String areaCode;
    @NotEmpty(message = "详细地址不能为空")
    private String addressDetails;
}
