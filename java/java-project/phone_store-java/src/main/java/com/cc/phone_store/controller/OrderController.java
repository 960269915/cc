package com.cc.phone_store.controller;

import com.cc.phone_store.form.OrderForm;
import com.cc.phone_store.service.OrderService;
import com.cc.phone_store.service.PhoneInfoService;
import com.cc.phone_store.utils.ResultUtils;
import com.cc.phone_store.vo.ResultVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/order")
public class OrderController {
    @Resource
    OrderService OrderService;
    @Resource
    PhoneInfoService phoneInfoService;
    @PostMapping("/create")
    @Transactional
    public ResultVo create(@RequestBody @Valid OrderForm orderForm, BindingResult bindingResult) throws Exception {
        if (bindingResult.hasErrors()) {
            log.error("参数错误");
            throw new Exception(bindingResult.getFieldError().getDefaultMessage());
        }
        phoneInfoService.subStock(orderForm.getSpecsId(),orderForm.getQuantity());

        return ResultUtils.success(OrderService.AddOrder(orderForm));
    }

    @GetMapping("/details/{id}")
    public ResultVo create(@PathVariable String id) throws Exception {
        if (OrderService.orderDetails(id) != null) {
            return ResultUtils.success(OrderService.orderDetails(id));
        } else {
            return ResultUtils.err(null);
        }
    }

    @GetMapping("/pay/{id}")
    public ResultVo pay(@PathVariable String id) throws Exception {
        return ResultUtils.success(OrderService.pay(id));
    }
}
