package com.cc.phone_store.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

//手机全部信息vo
@Data
public class PhoneInfoVo {
    private List<PhoneCategoryVo> categoryVos;
    private List<PhoneVo> phoneVos;
}
