package obj;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

//流处理(类似js filter处理数组)
public class MyStream {
    List<String> list = new ArrayList();
    public MyStream(){
        this.list.add("a");
        this.list.add("b");
        this.list.add("c");
    }
    public void say(){
//        1、将数据像流水线一样处理，每次处理返回stream  最后需要Collectors.toList()再次转为list
        this.list = this.list.stream()
                .filter((e)->!e.equals("b"))
                .map((e)-> e + "--map一下")
                .limit(1) //流不是立马执行，而是过一遍所有步骤，然后再执行，如limit权重在map之上，比map先执行
                .collect(Collectors.toList());
        System.out.println(this.list);
    }
}
