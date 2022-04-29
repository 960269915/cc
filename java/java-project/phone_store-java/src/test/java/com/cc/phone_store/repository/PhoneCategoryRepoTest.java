package com.cc.phone_store.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest

class PhoneCategoryRepoTest {
    @Autowired
    private PhoneCategoryRepo phoneCategoryRepo;
    @Test
    void find(){
        System.out.println(phoneCategoryRepo.findBycategoryType(1));;
    }
}