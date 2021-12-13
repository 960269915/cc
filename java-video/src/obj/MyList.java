package obj;

import java.util.*;

/*
* 只能存储引用类型 (todo 不太理解)
* */
public class MyList {
    List<String> list = new ArrayList<>();
    LinkedList<String> linkList = new LinkedList<>();
    Set<String> setList = new HashSet<>(); //非重复元素，不支持指定位置插入和获取
    public MyList(){
        this.list.add("cc");
        this.list.add("yy");
        this.setList.add("zz");
        this.setList.add("xx");
        System.out.println(this.setList);
    }
    public void say(){
//        1、队
        linkList.offer("cai"); //入队
        System.out.println(linkList.poll()); //出队
//        2、栈
        linkList.push("cai");//入栈
        linkList.pop();//出栈
    }
//    3、迭代器
    public void forFn(){
        this.list.forEach(i->{
            System.out.println(i);
        });
    }
}
