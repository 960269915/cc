package com.cc.phone_store.service.imp;

import com.cc.phone_store.entity.PhoneCategory;
import com.cc.phone_store.entity.PhoneInfo;
import com.cc.phone_store.entity.PhoneSpecs;
import com.cc.phone_store.enums.PhoneStockEnums;
import com.cc.phone_store.exception.PhoneException;
import com.cc.phone_store.repository.PhoneCategoryRepo;
import com.cc.phone_store.repository.PhoneInfoRepo;
import com.cc.phone_store.repository.PhoneSpecsRepo;
import com.cc.phone_store.service.PhoneInfoService;
import com.cc.phone_store.utils.PhoneUtils;
import com.cc.phone_store.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Slf4j
public class PhoneInfoServiceImp implements PhoneInfoService {
    @Resource
    PhoneCategoryRepo phoneCategoryRepo;
    @Resource
    PhoneInfoRepo phoneInfoRepo;
    @Resource
    PhoneSpecsRepo phoneSpecsRepo;

    @Override
    public PhoneInfoVo findPhone() {
        PhoneInfoVo phoneInfoVo = new PhoneInfoVo();
//       1、 类型
        List<PhoneCategory> phoneCategoryList = phoneCategoryRepo.findAll(); //数据库隐射对象
//        数据库隐射对象转换为前端展示的对象
//        for (PhoneCategory phoneCategory : phoneCategoryList) {
//            PhoneCategoryVo phoneCategoryVo = new PhoneCategoryVo();
//            phoneCategoryVo.setCategoryName(phoneCategory.getCategoryName());
//            phoneCategoryVo.setCategoryType(phoneCategory.getCategoryType());
//            phoneCategoryVoList.add(phoneCategoryVo);
//        }
        List<PhoneCategoryVo> phoneCategoryVoList = phoneCategoryList.stream()
                .map((e) ->
                        new PhoneCategoryVo(e.getCategoryName(), e.getCategoryType())
                ).collect(Collectors.toList());

        phoneInfoVo.setCategoryVos(phoneCategoryVoList);

        //2、 手机
        List<PhoneInfo> phoneInfoList = phoneInfoRepo.findAllByCategoryType(phoneCategoryVoList.get(0).getCategoryType());
        List<PhoneVo> phoneVoList = phoneInfoList.stream()
                .map(e -> new PhoneVo(
                        e.getPhoneId(),
                        e.getPhoneName(),
                        e.getPhonePrice(),
                        e.getPhoneDescription(),
                        PhoneUtils.splitTag(e.getPhoneTag()),
                        e.getPhoneIcon()))
                .collect(Collectors.toList());

        phoneInfoVo.setPhoneVos(phoneVoList);

        return phoneInfoVo;
    }

    @Override
    public List<PhoneVo> findPhoneByType(Integer type) {
        PhoneCategory phoneCategory = phoneCategoryRepo.findBycategoryType(type);
        List<PhoneInfo> phoneInfoList = phoneInfoRepo.findAllByCategoryType(phoneCategory.getCategoryType());
        List<PhoneVo> phoneVoList = phoneInfoList.stream()
                .map(e -> new PhoneVo(
                        e.getPhoneId(),
                        e.getPhoneName(),
                        e.getPhonePrice(),
                        e.getPhoneDescription(),
                        PhoneUtils.splitTag(e.getPhoneTag()),
                        e.getPhoneIcon()))
                .collect(Collectors.toList());
        return phoneVoList;
    }

    @Override
    public SpecsPackageVo findSpecsPackage(Integer phoneId) {
        //        查询手机详细
        PhoneInfo phoneInfo = phoneInfoRepo.findById(phoneId).get();
//        查询手机规格
        List<PhoneSpecs> phoneSpecs = phoneSpecsRepo.findByphoneId(phoneId);
//        tree
        List<Vvo> treeVos = new ArrayList<>();
        List<ListVo> listVos = new ArrayList<>();
        for (PhoneSpecs phoneSpec : phoneSpecs) {
            Vvo vvo = new Vvo();
            ListVo listVo = new ListVo();
            BeanUtils.copyProperties(phoneSpec, vvo); //拷贝对象(被拷贝对象，赋值对象)
            BeanUtils.copyProperties(phoneSpec, listVo);
            treeVos.add(vvo);
            listVos.add(listVo);
        }


        TreeVo treeVo = new TreeVo();
        treeVo.setV(treeVos);

        SkuVo skuVo = new SkuVo();
        skuVo.setList(listVos);
        List<TreeVo> treeVos1 = new ArrayList<>();
        treeVos1.add(treeVo);
        skuVo.setTree(treeVos1)
                .setPrice(phoneInfo.getPhonePrice())
                .setStockNum(phoneInfo.getPhoneStock());
        SpecsPackageVo specsPackageVo = new SpecsPackageVo();
        Map<String, String> goods = new HashMap<String, String>();
        goods.put("picture", phoneInfo.getPhoneIcon());
        specsPackageVo
                .setSku(skuVo)
                .setGoods(goods);
        return specsPackageVo;
    }

    @Override
    public void subStock(Integer specsId, Integer quantity) {
        PhoneSpecs phoneSpecs = phoneSpecsRepo.findById(specsId).get();
        Integer phoneId = phoneSpecs.getPhoneId();
        PhoneInfo phoneInfo = phoneInfoRepo.findById(phoneId).get();
        Integer result1 = phoneInfo.getPhoneStock() - quantity;
        Integer result2 = phoneSpecs.getSpecsStock() - quantity;
        System.out.println(result1);
        System.out.println(result2);
        if (result1 < 0 || result2 < 0) {
            log.error("库存不足");
            throw new PhoneException(PhoneStockEnums.PHONE_STOCK_ERROR);
        }
        phoneSpecs.setSpecsStock(result2);
        phoneSpecsRepo.save(phoneSpecs);
        phoneInfo.setPhoneStock(result1);
        phoneInfoRepo.save(phoneInfo);
    }
}
