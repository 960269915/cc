package com.cc.phone_store.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Data
@Component
@Accessors(chain = true)
public class OrderVo {
    private String orderId;
    private String buyerName;
    private String phoneName;
    private Integer payStatus;
    private Integer freight = 1000;
    @JsonProperty("tel")
    private String buyPhone;
    @JsonProperty("address")
    private String buyerAddress;
    @JsonProperty("num")
    private Integer phoneQuantity;
    @JsonProperty("specs")
    private Integer specsId;
    @JsonProperty("price")
    private BigDecimal specsPrice;
    @JsonProperty("icon")
    private String phoneIcon;
    private Integer amount; //总价
}
