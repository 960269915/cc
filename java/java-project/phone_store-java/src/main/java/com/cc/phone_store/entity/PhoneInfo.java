package com.cc.phone_store.entity;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

//手机信息
@Entity
@Data
@Table(name = "PhoneInfo")
public class PhoneInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "phoneId")
    private Integer phoneId;
    private String phoneName;
    private BigDecimal phonePrice;
    private String phoneDescription;
    private Integer phoneStock;
    private String phoneIcon;
    private Integer categoryType;
    private Date createTime;
    private Date updateTime;
    private String phoneTag;
}
