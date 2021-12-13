package jichu;

import java.math.BigDecimal;
import java.math.BigInteger;

//======================数据类型
public class DataType {
//    ---基本类型
    public static void jiben() {
//        1常量(不可更改)
        final int contVal = 11;
//        2整数
        byte a = 10; //-128~+127
        short b = 11;//-32768~32767
        int c = 1000000000; // 最常用的类型
        long d = 100000000000l; //最长的，需要在指结尾添加l
        BigInteger e = new BigInteger("999999999999999999999"); //如果long装不下  可以使用BigInteger
//        3字符
        char s = 's'; //单个字符
//        4小数
        float pa = 3.14f;//float精度是7-8位，结尾添加f
        double doubleNum = 3.2233;//double精度16位，默认使用double
        BigDecimal big = new BigDecimal("3.123123123123123123123123"); //很长的小数
//        5布尔
        boolean trueVal = true;
        boolean falseVal = false;
    }
//    ---数据转换
    public static void zhuanhuan(){
//        字节数小的可以往字节数大的转换
//        1隐式转换
        byte a = 1;
        short b = a;
        int c = b;
        long d = c;
//        2显示转换 （牺牲精度，强制转换）
        int i = 128;
        byte i1 = (byte) i;
        System.out.println(i1); //(类型) 值 -128
//        3数据类型自动提升（如果一个参与计算的是long,那么结果一定是long,如果是flot，结果是flot,如果是double,结果就是double，哪个精度高，结果就是哪个类型，一般不这样操作）
    }

//     ---引用类型
    public  static void yinyong(){
        String name = "caiyuntao"; //字符串，不是基本类型，属于对象
    }
//     ---计算
    public  static void jisuan(){
        int a = 1;
        int b = 2;
//        1注意整数和整数计算，永远得到的是整数，如果需要得到整数，需要显示转换
        System.out.println(a/b);
//        需要转换
        System.out.println((double)a / b);
    }
}
