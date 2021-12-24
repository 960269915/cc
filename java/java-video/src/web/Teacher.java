package web;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true) //开启链式调用 如修改name和id t.setName().setId()
public class Teacher {
    int tid;
    String name;
    String sex;
    List<Student> studentList;
}
