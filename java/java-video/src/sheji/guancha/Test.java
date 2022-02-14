package sheji.guancha;

//观察者模式，也叫发布订阅者模式
//定义了对象一对多的关系，当一个对象发生改变时，依赖他的对象，都会发生更新
public class Test {
    public static void main(String[] args) {
        Customer customera = new CustomerA();
        Customer customerb = new CustomerB();
        NewsPaper newsPaper = new NewsPaper();
        newsPaper.addCustomer(customera);
        newsPaper.addCustomer(customerb);
        newsPaper.newspaper();
    }
}