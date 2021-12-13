package web;

import lombok.Data;

@Data
public class Student {
    Integer sid;
    String name;
    String sex;
    Integer score;

    public Student(Integer sid, String name, String sex, Integer score) {
        this.sid = sid;
        this.name = name;
        this.sex = sex;
        this.score = score;
    }
    public void say(){
        System.out.println("我的ID" + sid + "我的名字" + name + "我的性别" + sex + "我的考试分数" + score);
    }
}
