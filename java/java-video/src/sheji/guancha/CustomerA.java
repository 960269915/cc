package sheji.guancha;


//观察者a
public class CustomerA extends Customer{
    @Override
    public void update() {
        System.out.println("客户a的报纸已送到");
    }
}
