package com.mapper;

import com.entity.MyClass;

import java.util.List;
import java.util.Map;

public interface MyClassMapper {
    public List<MyClass> getMyClass();
    public List<MyClass> getMyClassIf(Map map);
    public List<MyClass> getMyClassWhen(Map map);
    public int updateMyClass(Map map);
    public List<MyClass> getMyClassForEach(Map map);
}
