package com.spring.config.mapper;

import com.spring.config.bean.Card;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface CardMap {
    @Select("select * from cards where id = '1'")
    Card getCard();
    @Insert("insert into cards(name) values('geigei')")
    int insertCard();
}
