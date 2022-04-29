package com.cc.phone_store.service.imp;

import com.cc.phone_store.entity.BuyerAddress;
import com.cc.phone_store.form.AddressForm;
import com.cc.phone_store.repository.BuyerAddressRepo;
import com.cc.phone_store.service.AddressService;
import com.cc.phone_store.vo.AddressVo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.BeanUtils;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AddressServiceImpTest {
    @Resource
    BuyerAddressRepo buyerAddressRepo;
    @Resource
    AddressService addressService;
    @Test
    void test() {
        List<BuyerAddress> addressVoList = buyerAddressRepo.findAll();
        List<AddressVo> addressVos = new ArrayList<>();
        AddressVo addressVo = new AddressVo();
        for (BuyerAddress buyerAddress : addressVoList) {
            BeanUtils.copyProperties(buyerAddress, addressVo);
            addressVos.add(addressVo);
        }
        System.out.println(addressVos);
    }
}