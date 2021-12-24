package web;
import lombok.*;
import lombok.experimental.Accessors;

import java.io.FileInputStream;

//当成员变量时私有的时候，类的内部会有大量的get和set方法，可以使用lombok优化
//get和set可以放在类或者字段上，属性的权限会被改为public，可以使用AccessLevel.PRIVATE设置权限（静态字段无法生成，常量只会生成get方法）
//@Data 是添加所有注解
//@SneakyThrows 放在方法上面，自动生成try catch
//@Accessors(chain = true) //开启链式调用 如修改name和id t.setName().setId()
@Getter
@Setter(AccessLevel.PRIVATE)
@AllArgsConstructor //生成有参构造，如需要无参构造，就不写这个
public class MyLombok {
    private String name;
    @SneakyThrows
    public void say(){
        FileInputStream fileInputStream = new FileInputStream("src/file/test.txt");
    }
}
