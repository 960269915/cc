package Function;
import java.util.Arrays;
import java.util.Comparator;

//函数式编程，Lambda，把函数当成参数传递给另一个函数，一个函数的返回值也可以使一个函数
//Java不支持单独定义匿名函数，但可以把静态方法视为独立的函数
public class MyFunction {
    public void test(){
//        sort 第二个参数为接口Comparator，如果是普通使用，需要 new Comparator<String>(){public int compare(){}} 匿名内部类的形式
//        也可以直接使用Lambda 表达式，代替匿名内部类
        String[] arr = new String[]{"1","3","2"};
        Arrays.sort(arr, (s1, s2) -> {
            return s1.compareTo(s2);
        });
//        这是普通使用的代码
//        Arrays.sort(arr, new Comparator<String>() {
//            public int compare(String s1, String s2) {
//                return s1.compareTo(s2);
//            }
//        });
        System.out.println(Arrays.toString(arr));
    }
}
