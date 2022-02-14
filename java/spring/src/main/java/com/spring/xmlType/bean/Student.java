package com.spring.xmlType.bean;

import lombok.Data;
import lombok.ToString;

import java.util.List;
import java.util.Map;

@Data
@ToString
public class Student {
    String name;
    Integer age;
    Person p;
    List<String> list;
    Map<String,Integer> score;
    public Student(){
//        System.out.println("我被构造了Student");
    }
    public Student(Integer age){
        this.age = age;
    }
    public void init(){
//        System.out.println("我是初始方法");
    }
    public void destory(){
//        System.out.println("我被销毁了");
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setP(Person p) {
        this.p = p;
    }

    public void setList(List<String> list) {
        this.list = list;
    }

    public void setScore(Map<String, Integer> score) {
        this.score = score;
    }

    public void say(String text){
        System.out.println(name + text);
    }
}
