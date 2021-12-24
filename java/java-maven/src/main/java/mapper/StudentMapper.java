package mapper;
import entity.Student;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface StudentMapper {
    @Select("select * from student where sid = #{sid}")
    Student getStudentByid(@Param("sid") int sid);
    @Insert("insert into student (name,sex)  values(#{student.name},#{student.sex})")
    int insertStudent(@Param("student") Student student);
}
