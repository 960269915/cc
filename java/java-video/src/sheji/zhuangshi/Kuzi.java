package sheji.zhuangshi;

public class Kuzi extends Zhuangshi{
    public Kuzi(Person person) {
        super(person);
    }

    @Override
    public Double Xiaofei() {
        return this.person.Xiaofei() + 200;
    }

    @Override
    public void show() {
        this.person.show();
        System.out.println("买了一件裤子，累计消费" + this.Xiaofei());
    }
}
