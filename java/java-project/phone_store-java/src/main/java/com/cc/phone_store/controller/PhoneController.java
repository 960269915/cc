package com.cc.phone_store.controller;

import com.cc.phone_store.service.PhoneInfoService;
import com.cc.phone_store.utils.ResultUtils;
import com.cc.phone_store.vo.ResultVo;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController //@RestController注解相当于@ResponseBody ＋ @Controller合在一起的作用
@RequestMapping("/phone")
public class PhoneController {
    @Resource
    private PhoneInfoService phoneInfoService;
    @GetMapping("/index")
    public ResultVo index(){
        return ResultUtils.success(phoneInfoService.findPhone());
    }
    @GetMapping("/findByCategoryType/{type}")
    public ResultVo findByCategoryType(@PathVariable("type") Integer type){
        return ResultUtils.success(phoneInfoService.findPhoneByType(type));
    }
    @GetMapping("/findSpecsByPhoneId/{id}")
    public ResultVo findSpecsByPhoneId(@PathVariable("id") Integer id){
        return ResultUtils.success(phoneInfoService.findSpecsPackage(id));
    }
}
