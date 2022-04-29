package com.example.springbootmp.entity;

import com.baomidou.mybatisplus.annotation.*;
import com.example.springbootmp.enums.UserStatusEnum;
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.Date;

@Data
@Accessors(chain = true)
@TableName("user") //表名
public class User implements Serializable {
//    主键的生成策略
    /*
     * AUTO(0) 自增
     * NONE(1) 默认
     * INPUT(开发者手动赋值，如果没有手动赋值，数据库通过自增方式赋值)
     * ASSIGN_ID(MP分配的)
     * ASSIGN_UUID(分配uuid,string，要求主键的数据类型，必须是string,string是无法自增的)
     * */

    @TableId(value = "id", type = IdType.AUTO) //数据库主键字段隐射,type主键的生成策略
    private Integer id;
    @TableField(value = "name") //数据库非主键字段隐射
    private String myName;
    private Integer age;
    @TableField(exist = false) //exist 是否是数据库的字段
    private String gender;
    @TableField(fill = FieldFill.INSERT) //fill 自动填充，一般为时间字段
    private Date createTime;
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private Date updateTime;
    @Version //version 乐观锁，设置一个字段，放入查询语句。当操作过后字段值改变，防止多线程同时修改数据，保证只有一个线程能修改成功
    //数据库设计的时候，一定要给默认值
    private Integer version;
    //枚举
    private UserStatusEnum status;
    @TableLogic //逻辑删除
    private Integer del;
}
