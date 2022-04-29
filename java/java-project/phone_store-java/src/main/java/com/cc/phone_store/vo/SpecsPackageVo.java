package com.cc.phone_store.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Map;

//手机规格弹出显示vo
@Data
@Accessors(chain = true)
public class SpecsPackageVo {
    private Map<String,String> goods;
    private SkuVo sku;
}


