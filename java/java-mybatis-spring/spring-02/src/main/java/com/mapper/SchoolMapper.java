package com.mapper;

import com.entity.School;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SchoolMapper {
    public List<School> getSchool();
    public int addSchool(School s);
    public int delSchool(@Param("id") int id);
}
