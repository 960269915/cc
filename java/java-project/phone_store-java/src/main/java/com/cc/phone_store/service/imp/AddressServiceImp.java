package com.cc.phone_store.service.imp;

import com.cc.phone_store.entity.BuyerAddress;
import com.cc.phone_store.form.AddressForm;
import com.cc.phone_store.repository.BuyerAddressRepo;
import com.cc.phone_store.service.AddressService;
import com.cc.phone_store.vo.AddressVo;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class AddressServiceImp implements AddressService {
    @Resource
    BuyerAddressRepo buyerAddressRepo;

    @Override
    public List<AddressVo> findAll() {
        List<BuyerAddress> addressVoList = buyerAddressRepo.findAll();
        List<AddressVo> addressVos = new ArrayList<>();
        for (BuyerAddress buyerAddress : addressVoList) {
            AddressVo addressVo = new AddressVo();

            BeanUtils.copyProperties(buyerAddress, addressVo);
            addressVos.add(addressVo);
        }
        return addressVos;
    }

    @Override
    public void addOrUpdate(AddressForm addressForm) {
        Integer id = addressForm.getId();
        BuyerAddress buyerAddress;
        if (id != null) {
            buyerAddress = buyerAddressRepo.findById(id).get();
        } else {
            buyerAddress = new BuyerAddress();
        }
        buyerAddress
                .setBuyerName(addressForm.getName())
                .setBuyerPhone(addressForm.getTel())
                .setAreaCode(addressForm.getAreaCode());
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append(addressForm.getProvince()).append(addressForm.getCity()).append(addressForm.getCounty() + addressForm.getAddressDetails());
        buyerAddress.setBuyerAddress(stringBuffer.toString());
        buyerAddressRepo.save(buyerAddress);
    }

    @Override
    public void del(Integer id) {
        buyerAddressRepo.deleteById(id);
    }
}
