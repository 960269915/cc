package com.cc.phone_store.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

//手机类型vo
@Data
@AllArgsConstructor //生产带参数的构造函数
public class PhoneCategoryVo {
    @JsonProperty("name") // 工具类，当转为json对象时，categoryName字段变为name
    private  String categoryName;
    @JsonProperty("type")
    private Integer categoryType;
}
