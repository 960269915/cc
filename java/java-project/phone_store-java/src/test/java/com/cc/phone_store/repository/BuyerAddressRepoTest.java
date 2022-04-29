package com.cc.phone_store.repository;

import com.cc.phone_store.entity.BuyerAddress;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BuyerAddressRepoTest {
    @Autowired
    BuyerAddressRepo buyerAddressRepo;
    @Test
    void test(){
        System.out.println(buyerAddressRepo.findAll());
    }
    @Test
    void save(){
        BuyerAddress buyerAddress = new BuyerAddress();
        buyerAddress.setAreaCode("1111");
        buyerAddress.setBuyerAddress("beijing");
        buyerAddress.setBuyerName("zhangsan");
        buyerAddress.setBuyerPhone("13333333333");
        buyerAddressRepo.save(buyerAddress);
    }
    @Test
    void update(){
        BuyerAddress buyerAddress = buyerAddressRepo.findById(35).get();
        buyerAddress.setBuyerName("cc");
        buyerAddressRepo.save(buyerAddress);

    }
}