package obj;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

//map映射 就是保存键值对,不允许有重复的key,否则会覆盖
public class MyMap {
    HashMap<String,String> map = new HashMap();
//    map嵌套数组
    HashMap<String,List<Integer>> map2= new HashMap<>();
    public MyMap(){

        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        this.map2.put("food", list);
        System.out.println(this.map2);

        this.map.put("name","cc");
        this.map.put("age","18");
//        this.map.remove(2); //删除
        String val = this.map.get("name");//访问，每次访问后，当前元素就会被放到最后
//        1、遍历map
        this.map.forEach((k,v)->{
            System.out.println(k+"-"+v);
        });
    }
}
