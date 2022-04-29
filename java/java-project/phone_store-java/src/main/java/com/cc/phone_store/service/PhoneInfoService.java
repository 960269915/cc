package com.cc.phone_store.service;

import com.cc.phone_store.vo.PhoneInfoVo;
import com.cc.phone_store.vo.PhoneVo;
import com.cc.phone_store.vo.SpecsPackageVo;

import java.util.List;

public interface PhoneInfoService {
//    首页信息
    public PhoneInfoVo findPhone();
//    根据类型，获取手机集合
    public List<PhoneVo> findPhoneByType(Integer type);
//    通过手机编号，获取手机规格
    public SpecsPackageVo findSpecsPackage(Integer phoneId);
//    减库存
    public void subStock(Integer specsId,Integer quantity);
}
