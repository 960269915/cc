package com.test;
import mapper.StudentMapper;
import org.apache.ibatis.session.SqlSession;
import myutils.Sqlutil;


public class Main {
    public static void main(String[] args) throws Exception {
        try(SqlSession session = Sqlutil.getSession();){
            StudentMapper studentMapper = session.getMapper(StudentMapper.class);
            System.out.println(studentMapper.getStudentByid(1));
        }catch (Exception e){
            System.out.println(e);
        }
    }
}




