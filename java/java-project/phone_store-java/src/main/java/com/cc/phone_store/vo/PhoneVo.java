package com.cc.phone_store.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

//手机信息vo
@Data
@AllArgsConstructor
public class PhoneVo {
    @JsonProperty("id")
    private Integer phoneId;
    @JsonProperty("title")
    private String phoneName;
    @JsonProperty("price")
    private BigDecimal phonePrice;
    @JsonProperty("desc")
    private String phoneDescription;
    private List<Map<String,String>> tag;
    @JsonProperty("thumb")
    private String phoneIcon;
}
