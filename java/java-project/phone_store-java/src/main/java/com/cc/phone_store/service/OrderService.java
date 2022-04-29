package com.cc.phone_store.service;

import com.cc.phone_store.form.OrderForm;
import com.cc.phone_store.vo.OrderVo;
import org.springframework.stereotype.Service;

public interface OrderService {
    public String AddOrder(OrderForm orderForm);
    public OrderVo orderDetails(String orderId);
    public String pay(String orderId);

}
