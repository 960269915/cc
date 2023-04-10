package com.mapper;

import com.entity.School;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SchoolMapperImp implements SchoolMapper{
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;
    @Override
    public int addSchool(School s) {
        SchoolMapper mapper = sqlSessionTemplate.getMapper(SchoolMapper.class);
        return mapper.addSchool(s);
    }

    @Override
    public int delSchool(int id) {
        SchoolMapper mapper = sqlSessionTemplate.getMapper(SchoolMapper.class);
       return mapper.delSchool(id);
    }

    @Override
    public List<School> getSchool() {
        SchoolMapper mapper = sqlSessionTemplate.getMapper(SchoolMapper.class);
        return mapper.getSchool();
    }
}
