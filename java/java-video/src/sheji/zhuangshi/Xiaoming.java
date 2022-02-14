package sheji.zhuangshi;

//被装饰对象
public class Xiaoming implements Person{
    @Override
    public Double Xiaofei() {
        return 0.0;
    }

    @Override
    public void show() {
        System.out.println("没穿衣服的小明");
    }
}

