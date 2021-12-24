package obj;

//string 是对象
public class MyStr {
    String str1 = "cca";
    String str2 = "a";
    public MyStr(){

    }
    public void say(){
        System.out.println(str1.equals(str2));//字符串比较使用equals ==判断是不是同一个对象
        System.out.println(str1.charAt(0)); //获取下标所在的值
        System.out.println(str1.contains("c")); //是否包含当前字符串
        System.out.println(str1.indexOf("c")); //获取下标
        System.out.println(str1.substring(0,1));//截取字符串
    }
    public void addStr(){
        String str3 = this.str1 + this.str2;//字符串拼接，会创建一个新的对象。因为str是不可变的
//        1当for循环大量字符串相加，会不断创建str对象，此时需要strbuilder
        StringBuilder b = new StringBuilder("cai");
        b.append("yuntao"); //添加字符串，相当于拼接字符串
        String str4 = str3.toString(); //StringBuilder转为str
    }
}
//https://www.bilibili.com/video/BV1Gv411T7pi?p=26