package com.cc.phone_store.service.imp;

import com.cc.phone_store.entity.OrderMaster;
import com.cc.phone_store.entity.PhoneInfo;
import com.cc.phone_store.entity.PhoneSpecs;
import com.cc.phone_store.enums.OrderStatusEnums;
import com.cc.phone_store.form.OrderForm;
import com.cc.phone_store.repository.OrderMasterRepo;
import com.cc.phone_store.repository.PhoneInfoRepo;
import com.cc.phone_store.repository.PhoneSpecsRepo;
import com.cc.phone_store.service.OrderService;
import com.cc.phone_store.vo.OrderVo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

import java.math.BigDecimal;
import java.util.Random;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrderServiceImpTest {
    @Resource
    OrderMasterRepo orderMasterRepo;
    @Resource
    PhoneSpecsRepo phoneSpecsRepo;
    @Resource
    OrderMaster orderMaster;
    @Resource
    PhoneInfoRepo phoneInfoRepo;
    @Resource
    PhoneInfoServiceImp phoneInfoServiceImp;
    @Test
    public void test(){
        OrderForm orderForm = new OrderForm();
        orderForm.setSpecsId(1);
        orderForm.setAddress("xxx");
        orderForm.setQuantity(1);
        orderForm.setTel("13333333333");
        orderForm.setName("cc");
        Integer specsId = orderForm.getSpecsId();

        phoneInfoServiceImp.subStock(specsId,3);

        PhoneSpecs phoneSpecs = phoneSpecsRepo.findById(specsId).get();
        PhoneInfo phoneInfo = phoneInfoRepo.findById(specsId).get();
        System.out.println(phoneSpecs);
        orderMaster
                .setBuyerName(orderForm.getName())
                .setBuyerPhone(orderForm.getTel())
                .setBuyerAddress(orderForm.getAddress())
                .setSpecsId(orderForm.getSpecsId())
                .setPhoneQuantity(orderForm.getQuantity())
                .setPhoneId(phoneSpecs.getPhoneId())
                .setPhoneIcon(phoneSpecs.getSpecsIcon())
                .setSpecsName(phoneSpecs.getSpecsName())
                .setSpecsPrice(phoneSpecs.getSpecsPrice())
                .setPhoneName(phoneInfo.getPhoneName())
                .setPayStatus(OrderStatusEnums.ORDER_FAIL.getCode());

//        计算总价
        BigDecimal allMoney = phoneSpecs.getSpecsPrice().divide(new BigDecimal(orderForm.getQuantity()));
        orderMaster.setOrderAmount(allMoney);
        orderMaster.setOrderId(createKey());
        orderMasterRepo.save(orderMaster);

    }
    public synchronized String createKey(){
        Random random = new Random();
        Integer key = random.nextInt(900000) + 100000;
        return System.currentTimeMillis() + String.valueOf(key);
    }

    @Test
    void test2(){
        orderMaster = orderMasterRepo.findById("1648539513864560230").get();
        OrderVo orderVo = new OrderVo();
        orderVo.setOrderId(orderMaster.getOrderId())
                .setBuyerName(orderMaster.getBuyerName())
                .setPhoneName(orderMaster.getPhoneName())
                .setPayStatus(orderMaster.getPayStatus())
                .setBuyPhone(orderMaster.getBuyerPhone())
                .setBuyerAddress(orderMaster.getBuyerAddress())
                .setPhoneQuantity(orderMaster.getPhoneQuantity())
                .setSpecsId(orderMaster.getSpecsId())
                .setSpecsPrice(orderMaster.getSpecsPrice())
                .setPhoneIcon(orderMaster.getPhoneIcon());
        Integer amount = orderMaster.getSpecsPrice().divide(new BigDecimal(orderMaster.getPhoneQuantity())).add(new BigDecimal(orderVo.getFreight())).intValue();
        orderVo.setAmount(amount);
        System.out.println(orderVo);
    }
    @Test
    void test3(){
//        OrderMaster orderMaster = orderMasterRepo.findById("1648694610762342055").get();
//        if(orderMaster == null){
//            try {
//                throw new Exception("订单不存在");
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        }
//        if(orderMaster.getPayStatus().equals(OrderStatusEnums.ORDER_FAIL.getCode())){
//            orderMaster.setPayStatus(OrderStatusEnums.ORDER_SUCCESS.getCode());
//            orderMasterRepo.save(orderMaster);
//        }
    }
}