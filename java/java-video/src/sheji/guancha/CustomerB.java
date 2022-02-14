package sheji.guancha;

//观察者b
public class CustomerB extends Customer{
    @Override
    public void update() {
        System.out.println("客户b的报纸已送到");
    }
}
