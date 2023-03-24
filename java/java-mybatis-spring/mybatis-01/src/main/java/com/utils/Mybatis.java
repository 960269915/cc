package com.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;

public class Mybatis {
    private static SqlSessionFactory sqlSessionFactory;
//    获取SqlSessionFactory
    static {
        String resource = "mybatis-config.xml";
        InputStream inputStream = null;
        try {
            inputStream = Resources.getResourceAsStream(resource);
        } catch (IOException e) {
            e.printStackTrace();
        }
        sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
    }

//    SqlSession是操作数据库的具体对象
    public static SqlSession getSqlSession(){
        //true 自动开启事务的提交
        SqlSession sqlSession = sqlSessionFactory.openSession(true);
        return sqlSession;
    }
}
