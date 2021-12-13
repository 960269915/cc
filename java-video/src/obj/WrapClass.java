package obj;
//基本类型的包装类
/*
* 因为基本类型不是对象，使用java提供的包装类，可以当对象使用
* boolean 继承于object
* 其他数组类型继承number，number继承object
* ==== 包装类型值判断相等，需要使用equals（判断是否值相等）   ==是比较内存地址，是否是同一个对象
* */
public class WrapClass {
    public void say(){
        Byte b = 10;
        Boolean tf = false;
        Short st = 1;
        Long longNum = 1000000000l;
        Float flNum = 3.13f;
        Double douNum = 3.123123;
        Integer num = 1; // Integer num = Integer.valueOf(1); 自动装箱,将基本类型变为包装类型，Java优化当值在-128-127之间，不会创建新对象，而是从缓存拿取
        int i = num; //int i = num.intValue();  自动拆箱，将包装类型变为基本类型，只要包装类型参与运算，就会拆箱
        System.out.println(i);
    }
}


//包装类的形成
//Integer(int val){
//    this.value = val;
//}