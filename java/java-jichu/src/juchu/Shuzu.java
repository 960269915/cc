package juchu;

import java.util.*;

public class Shuzu {
    public static void main(String[] args) {
//        =================数组
        int[] numbers = new int[2];
//        Arrays工具类操作数组
        List a = Arrays.asList(numbers);
//        ================集合
        ArrayList arrayList = new ArrayList<String>();
        arrayList.add("cc");
        arrayList.get(0);
        arrayList.set(0,"zz");
        arrayList.size();
        arrayList.remove(0);

//        map
        Map<String,String> map = new HashMap();
        map.put("name","cc");
    }
}
