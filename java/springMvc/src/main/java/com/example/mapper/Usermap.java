package com.example.mapper;

import com.example.entity.User;
import org.apache.ibatis.annotations.*;

@Mapper
public interface Usermap {
    @Select("select * from user where name = #{name}")
    User getUser(@Param("name") String name);


    @Options(useGeneratedKeys = true,keyColumn = "uid",keyProperty = "uid") //此处是映射数据库的字段，到类上面的字段
    @Insert("insert into user(name,password) values(#{name},#{password})")
    int addUser(User user);
}
