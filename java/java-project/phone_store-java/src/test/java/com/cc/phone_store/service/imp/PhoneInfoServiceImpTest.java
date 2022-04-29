package com.cc.phone_store.service.imp;

import com.cc.phone_store.entity.PhoneInfo;
import com.cc.phone_store.entity.PhoneSpecs;
import com.cc.phone_store.repository.PhoneInfoRepo;
import com.cc.phone_store.repository.PhoneSpecsRepo;
import com.cc.phone_store.service.PhoneInfoService;
import com.cc.phone_store.vo.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PhoneInfoServiceImpTest {
    @Autowired
    PhoneInfoService phoneInfoService;
    @Autowired
    PhoneInfoRepo phoneInfoRepo;
    @Autowired
    PhoneSpecsRepo phoneSpecsRepo;
    @Test
    void findPhone(){
        phoneInfoService.subStock(1,2);
    }
}