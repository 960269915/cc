package com.cc.phone_store.entity;
import lombok.Data;
import lombok.experimental.Accessors;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

//购买者信息
@Data
@Entity
@DynamicInsert //动态插入（表示insert对象的时候，生成动态的insert语句，如果这个字段的值是null就不会加入到insert语句中，默认false）
@DynamicUpdate// 动态更新
@Accessors(chain = true)
public class BuyerAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer addressId;
    private String buyerName;
    private String buyerPhone;
    private String buyerAddress;
    private String areaCode;
    private Date updateTime;
    private Date createTime;
}

