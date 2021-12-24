package com.book.dao;

import com.book.entity.User;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {
    @Select("select * from user where name = #{name} AND password = #{password}")
    User login(@Param("name") String name, @Param("password") String password);
}
