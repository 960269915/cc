package com.cc.phone_store.entity;

import lombok.Data;
import lombok.experimental.Accessors;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.Date;

//订单
@Component
@Data
@Entity
@Accessors(chain = true)
@DynamicUpdate
@DynamicInsert
public class OrderMaster {
    @Id
    private String orderId; //订单id如果是int，不合适，此处使用string
    private String buyerName;
    private String buyerPhone;
    private String buyerAddress;
    private Integer phoneId;
    private String phoneName;
    private Integer phoneQuantity;
    private String phoneIcon;
    private Integer specsId;
    private String specsName;
    private BigDecimal specsPrice;
    private BigDecimal orderAmount;
    private Integer payStatus;
    private Date updateTime;
    private Date createTime;
}
