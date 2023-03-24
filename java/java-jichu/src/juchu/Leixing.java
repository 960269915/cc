package juchu;

public class Leixing {
    public static void main(String[] args) {
//      ====================基本类型
//      数字
        byte b = 127; //正负127到127
        short s = 3;//正负32768
        int i = 1000; //正负2147483647  常用
        long l = 333L; //,正负9223372036854775808
        float f = 3.1F;
        double d = 3.1; //常用
//      布尔值
        boolean fa = false;

//      字符
        char str = 'A';
        String name = "xxxxx";

//      !!!注意精度溢出的问题
        int aa = 1000000000;
        int cc = 20;
        long dd = (long) aa * cc;
        System.out.println(dd);
//      !!!不同类型运算时，需要把转换为同类型，低转高自动转，高转低需要强制转
//      byte-short-chart-int-long-float-double 数据等级




        //============引用类型 类 数组 接口

    }
}
