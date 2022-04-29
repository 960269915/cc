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
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.Random;

@Slf4j
@Service
public class OrderServiceImp implements OrderService {
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

    public String AddOrder(OrderForm orderForm) {
//        根据传递的手机规格id查询数据，并且赋值
        Integer specsId = orderForm.getSpecsId();
        phoneInfoServiceImp.subStock(specsId, orderForm.getQuantity());
        PhoneSpecs phoneSpecs = phoneSpecsRepo.findById(specsId).get();
        PhoneInfo phoneInfo = phoneInfoRepo.findById(specsId).get();
        orderMaster
                .setPhoneName(phoneInfo.getPhoneName())
                .setBuyerName(orderForm.getName())
                .setBuyerPhone(orderForm.getTel())
                .setBuyerAddress(orderForm.getAddress())
                .setSpecsId(orderForm.getSpecsId())
                .setPhoneQuantity(orderForm.getQuantity())
                .setPhoneId(phoneSpecs.getPhoneId())
                .setPhoneIcon(phoneSpecs.getSpecsIcon())
                .setSpecsName(phoneSpecs.getSpecsName())
                .setSpecsPrice(phoneSpecs.getSpecsPrice())
                .setPayStatus(OrderStatusEnums.ORDER_FAIL.getCode());

////        计算总价
        BigDecimal allMoney = phoneSpecs.getSpecsPrice().divide(new BigDecimal(orderForm.getQuantity()));
        orderMaster.setOrderAmount(allMoney);
        orderMaster.setOrderId(createKey());
        orderMasterRepo.save(orderMaster);
        return orderMaster.getOrderId();
    }

    @Override
    public OrderVo orderDetails(String orderId) {
        orderMaster = orderMasterRepo.findById(orderId).get();
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
        orderVo.setAmount(amount + orderVo.getFreight());
        return orderVo;
    }

    @Override
    public String pay(String orderId) {
        OrderMaster orderMaster = orderMasterRepo.findById(orderId).get();
        if(orderMaster == null){
            try {
                log.error("订单不存在");
                throw new Exception("订单不存在");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        if(orderMaster.getPayStatus().equals(OrderStatusEnums.ORDER_FAIL.getCode())){
            orderMaster.setPayStatus(OrderStatusEnums.ORDER_SUCCESS.getCode());
            orderMasterRepo.save(orderMaster);
        }
        return orderId;
    }

    //    生产订单号
    public synchronized String createKey() {
        Random random = new Random();
        Integer key = random.nextInt(900000) + 100000;
        return System.currentTimeMillis() + String.valueOf(key);
    }
}
