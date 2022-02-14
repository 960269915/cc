package sheji.daili;
//被代理对象
public class Xiaoming implements House{

    @Override
//    业务代码
    public void FindHouse() {
        System.out.println("小明找房子");
    }
}
