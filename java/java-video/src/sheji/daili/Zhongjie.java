package sheji.daili;

//代理对象
public class Zhongjie implements House{
    private House house;
    public Zhongjie(House house) {
        this.house = house; //被代理对象
    }

    @Override
    public void FindHouse() {
//        业务代码和其他代码分离
        System.out.println("找了个房子的代理");
        this.house.FindHouse();
    }
}
