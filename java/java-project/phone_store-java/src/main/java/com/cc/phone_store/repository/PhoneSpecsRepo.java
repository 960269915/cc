package com.cc.phone_store.repository;

import com.cc.phone_store.entity.PhoneSpecs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhoneSpecsRepo extends JpaRepository<PhoneSpecs,Integer> {
//    根据手机id，查询手机规格
   List<PhoneSpecs> findByphoneId(Integer id);
}
