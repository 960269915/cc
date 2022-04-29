package com.cc.phone_store.controller;

import com.cc.phone_store.form.AddressForm;
import com.cc.phone_store.service.AddressService;
import com.cc.phone_store.utils.ResultUtils;
import com.cc.phone_store.vo.AddressVo;
import com.cc.phone_store.vo.ResultVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/address")
@Slf4j
public class AddressController {
    @Resource
    private AddressService addressService;
    @GetMapping("/list")
    public ResultVo<Object> list(){
        List<AddressVo> list =  addressService.findAll();
        System.out.println(list);
        if(list != null){
            return ResultUtils.success(list);
        }else{
            return ResultUtils.success(new ArrayList<>());
        }
    }
    @PostMapping("/create")
    @Transactional
    //@Valid 启用验证机制  @RequestBody 解析前端传递的json对象 bindResult检验失败的错误信息
    public ResultVo<Object> create(@Valid @RequestBody AddressForm addressForm, BindingResult bindingResult) throws Exception{
        if(bindingResult.hasErrors()){
            log.error("参数错误");
                throw new Exception(bindingResult.getFieldError().getDefaultMessage());
        }
        addressService.addOrUpdate(addressForm);
        return ResultUtils.success("操作成功");
    }

    @PostMapping("/update")
    @Transactional
    //@Valid 启用验证机制  @RequestBody 解析前端传递的json对象 bindResult检验失败的错误信息
    public ResultVo<Object> update(@Valid @RequestBody AddressForm addressForm, BindingResult bindingResult) throws Exception{
        if(bindingResult.hasErrors()){
            log.error("参数错误");
            throw new Exception(bindingResult.getFieldError().getDefaultMessage());
        }
        addressService.addOrUpdate(addressForm);
        return ResultUtils.success("操作成功");
    }

    @GetMapping("/del/{id}")
    @Transactional
    //@Valid 启用验证机制  @RequestBody 解析前端传递的json对象 bindResult检验失败的错误信息
    public ResultVo<Object> update(@PathVariable Integer id) throws Exception{
        addressService.del(id);
        return ResultUtils.success("操作成功");
    }
}
