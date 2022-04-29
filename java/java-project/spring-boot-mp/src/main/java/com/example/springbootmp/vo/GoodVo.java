package com.example.springbootmp.vo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("goods")
public class GoodVo {
    private String goodsName;
    private Integer userId;
    private String name;
}
