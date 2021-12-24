package com.book.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;

public class Sql {
    private Sql(){} //单列模式
    private static SqlSessionFactory session;
    static { //静态代码块，最先执行，只执行一次
        try {
            session = new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream("mybatis.config.xml"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //    当方法是static时，只能引入类里面的static属性和方法
    public static SqlSession getSession(){
        return  session.openSession(true);
    }
}
