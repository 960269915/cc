package com.example.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface Logmap {
    @Insert("insert into log(message,uid,name) values(#{message},#{uid},#{name})")
    int addLog(@Param("message") String message,@Param("uid") int uid,@Param("name") String name);
}
