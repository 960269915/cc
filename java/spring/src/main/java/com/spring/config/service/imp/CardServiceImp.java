package com.spring.config.service.imp;
import com.spring.config.bean.Card;
import com.spring.config.mapper.CardMap;
import com.spring.config.service.CardService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Component
public class CardServiceImp implements CardService {
    @Resource
    CardMap cardMap;
    @Override
    public Card getCard() {
       return cardMap.getCard();
    }
//    Transactional 注释的方法，会被当成一个事务来处理
//    ===此处有个坑，获取bean的时候，不能获取当前类的class，需要获取接口的。或者此方法是自己的，不是重写的父类方法 CardService cardService = context.getBean(CardService.class);
    @Transactional
    @Override
    public void insertCard() {
        cardMap.insertCard();
        if(true) throw new RuntimeException("发生错误");
        cardMap.insertCard();
    }
}
