package com.dao;

import com.entity.MyClass;
import com.entity.School;
import com.mapper.MyClassMapper;
import com.mapper.SchoolMapper;
import com.utils.Mybatis;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SchoolMapperTest {
    @Test
    public void test(){
        SqlSession sqlSession = Mybatis.getSqlSession();
        MyClassMapper mapper = sqlSession.getMapper(MyClassMapper.class);
        Map m = new HashMap();
        ArrayList<Integer> ids = new ArrayList();
        ids.add(1);
        ids.add(2);


        m.put("ids",ids);
        System.out.println(mapper.getMyClassForEach(m));


        sqlSession.close();
    }
}
