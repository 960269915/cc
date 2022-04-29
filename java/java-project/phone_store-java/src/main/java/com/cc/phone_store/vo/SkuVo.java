package com.cc.phone_store.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.math.BigDecimal;
import java.util.List;

//手机规格弹出显示vo子集
@Data
@Accessors(chain = true)
public class SkuVo {
    private List<TreeVo> tree;
    private List<ListVo> list;
    private BigDecimal price;
    private Integer stockNum;
    private Boolean noneSku = false;
    private Boolean hideStock = false;
}
