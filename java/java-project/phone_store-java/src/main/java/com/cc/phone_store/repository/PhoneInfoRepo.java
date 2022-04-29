package com.cc.phone_store.repository;

import com.cc.phone_store.entity.PhoneInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhoneInfoRepo extends JpaRepository<PhoneInfo,Integer> {
//    根据手机类型查询手机
    List<PhoneInfo> findAllByCategoryType(Integer type);
}
