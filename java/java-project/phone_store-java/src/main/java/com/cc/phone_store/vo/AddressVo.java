package com.cc.phone_store.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

//地址vo
@Data
public class AddressVo {
    @JsonProperty("areaCode")
    private String areaCode;
    @JsonProperty("id")
    private Integer addressId;
    @JsonProperty("name")
    private String buyerName;
    @JsonProperty("tel")
    private String buyerPhone;
    @JsonProperty("address")
    private String buyerAddress;
}
