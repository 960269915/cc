package web.batis.myinterface;

import web.Student;

import java.util.List;


public interface StudentInterface {
//    selectStudent 为studentMapper的select id,相当于调用selectStudent方法，且设置返回值为list，类型为Student。
//    这样设置的好处是不需要在调用的地方设置类型
    List<Student> selectStudent();
    Student getOne(int sid);
    int addStudent(Student student);
    int del(int sid);
}
