package com.cc.phone_store.service;

import com.cc.phone_store.form.AddressForm;
import com.cc.phone_store.vo.AddressVo;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface AddressService {
    public List<AddressVo> findAll();
//    新增或者更新
    public void addOrUpdate(AddressForm addressForm);
    public void del(Integer id);
}
