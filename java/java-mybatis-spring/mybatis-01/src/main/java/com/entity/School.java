package com.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class School {
    String schoolName;
    int id;
    List<MyClass> myClass;
}
