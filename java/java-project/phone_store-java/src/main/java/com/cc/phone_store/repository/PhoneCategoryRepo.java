package com.cc.phone_store.repository;

import com.cc.phone_store.entity.PhoneCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneCategoryRepo extends JpaRepository<PhoneCategory,Integer> {
//     查询手机分类
     PhoneCategory findBycategoryType(Integer type);
}
