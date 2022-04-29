package com.example.springbootmp.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.springbootmp.entity.User;
import com.example.springbootmp.vo.GoodVo;
import org.apache.ibatis.annotations.Select;

import java.util.List;

//只需要去继承BaseMapper，User为数据库对应的实体类
public interface UserMapper extends BaseMapper<User> {
//    自定义查询
    @Select("SELECT `user`.* ,goods.goods_name as goodsName,user_id as userId from `user`  LEFT JOIN goods on `user`.id = goods.user_id WHERE `user`.id = #{userId}")
    List<GoodVo> getGoods(Integer userId);
}
