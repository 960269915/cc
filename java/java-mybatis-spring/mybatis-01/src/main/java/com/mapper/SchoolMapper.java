package com.mapper;

import com.entity.MyClass;
import com.entity.School;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

public interface SchoolMapper {
    public List<School> getSchoolList();
    public School getSchoolById(@Param("id") int id);
    public int insertSchool(School school);
    public int insertSchoolMap(Map<String,String> map);
    public int updateSchoolById(School school);
    public int delUserById(int id);
    @Select("select * from school where schoolid = #{id}")
//    参数加上Param注解，引用类型不需要加
    public List<School> getSchoolListZhuJie(@Param("id") int id);
    public List<School> getMyClass(int sid);
}
