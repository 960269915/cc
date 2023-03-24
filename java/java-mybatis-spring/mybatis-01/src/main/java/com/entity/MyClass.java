package com.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.beans.Transient;

@Data
public class MyClass {
    int id;
    String name;
    int schoolId;
    School school;
}
