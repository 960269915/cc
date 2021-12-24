package web.batis.myinterface;

import org.apache.ibatis.annotations.*;
import web.Student;
import web.Teacher;

import java.util.List;

public interface Teacherinterface {
    Teacher getTeacherById(int id);

//    ============也可以不使用xml,直接使用注解操作数据
//    插入
    @Insert("insert into teacher(tid,name,sex) values(#{teacher.tid},#{teacher.name},#{teacher.sex})")
    int addTeacher(@Param("teacher") Teacher teacher );

//    查询
    @Select("select * from teacher where tid = #{tid}")

//    Results代替resultMap
    @Results({
            @Result(column = "name",property = "sex"),
            @Result(column = "sex",property = "name")
    })
//    @Param是为参数添加注解，int tid为传入的id,@Param("tid")里面的id为SQL里面的tid
    Teacher getTeacherByIdNotXml(@Param("tid") int tid);

//    更新
    @Update("update teacher set name=#{name} where tid = #{tid}")
    int updateTeacher(@Param("tid") int tid,@Param("name") String name);

//    复杂查询(多表联查)
    @Results({
            @Result(column = "tid",property = "tid",id = true),
            @Result(column = "name",property = "name"),
//            此处的tid传递给getStudentById方法当参数,多对一为 one = @One(select = "方法名称")
            @Result(column = "tid",property = "studentList",many = @Many(select = "getStudentById"))
    })
//    当有多个构造方法时候
//    @ConstructorArgs({
//            @Arg(column = "tid",javaType = String.class),
//    })
    @Select("select * from teacher where tid = #{tid}")

    Teacher getTeacherByIdNotXml1(@Param("tid") int tid);

    @Select("select * from student left join teach on student.sid = teach.sid where tid = #{tid}")
    List<Student> getStudentById(@Param("tid") int tid);

}
