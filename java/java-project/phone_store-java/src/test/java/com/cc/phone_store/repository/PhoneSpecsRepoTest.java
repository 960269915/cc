package com.cc.phone_store.repository;

import com.cc.phone_store.entity.PhoneSpecs;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PhoneSpecsRepoTest {
    @Autowired
    PhoneSpecsRepo phoneSpecsRepo;
    @Test
    void find(){
        System.out.println(phoneSpecsRepo.findByphoneId(1));
    }
}