package com.study.mapper;

import com.study.entrity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    @Select("select * from user where name=#{name}")
    User getUser(@Param("name") String name);
}
