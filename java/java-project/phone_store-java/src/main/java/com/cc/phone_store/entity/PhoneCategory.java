package com.cc.phone_store.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.Date;

//商品类型 实体类，需要跟表名一样才能关联
@Data
@Accessors(chain = true) //链式调用
@Entity //将数据库的表与类关联的注解
@Table(name = "PhoneCategory") //对应表名字，不是必须
public class PhoneCategory {
    @Id //设置为主键
    @GeneratedValue(strategy = GenerationType.IDENTITY) //设置主键自增方式
    @Column(name = "categoryId")//column 设置对应数据库的字段,注意大小写
    private Integer categoryId;
    @Column(name = "categoryName")
    private String categoryName;
    @Column(name = "categoryType")
    private Integer categoryType;
    @Column(name = "createTime")
    private Date createTime;
    @Column(name = "updateTime")
    private Date updateTime;
}
