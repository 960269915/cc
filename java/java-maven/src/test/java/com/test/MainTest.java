package com.test;
import entity.Student;
import lombok.extern.java.Log;
import mapper.StudentMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.jupiter.api.*;
import java.io.FileNotFoundException;
import java.io.IOException;

@Log
public class MainTest {
    private static SqlSessionFactory factory;
    public static void main(String[] args) throws Exception {

    }
    @BeforeAll //一次性开启，所有测试案例只会执行一次   @BeforeEach,每个测试案例都会执行
    public static void before(){
        System.out.println("跑一次");
        try {
            factory = new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream("mybatis.config.xml"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @DisplayName("数据库测试名称")
    @RepeatedTest(3)
    public void test(){
        SqlSession session = factory.openSession(true);
        StudentMapper student = session.getMapper(StudentMapper.class);
        Student s1 = student.getStudentByid(1);
        Student s2 = new Student().setName("cc");
        Assertions.assertEquals(s1,s2);
    }
}
