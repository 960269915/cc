package com.cc.phone_store.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrderMasterRepoTest {
    @Autowired
    OrderMasterRepo orderMasterRepo;
    @Test
    void find(){
        System.out.println(orderMasterRepo.findAll());
    }
}