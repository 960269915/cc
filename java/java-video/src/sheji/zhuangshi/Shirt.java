package sheji.zhuangshi;

//装饰器实例
public class Shirt extends Zhuangshi{
    public Shirt(Person person) {
        super(person);
    }

    @Override
    public Double Xiaofei() {
//        劫持被装饰对象的方法
//        此处可编写装饰器的其他实现
        return this.person.Xiaofei() + 100;
    }

    @Override
    public void show() {
        this.person.show();
        System.out.println("买了一件衬衫，累计消费" + this.Xiaofei());
    }
}
