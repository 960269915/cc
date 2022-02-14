package sheji.zhuangshi;

public class Test {
    public static void main(String[] args) {
        Person xiaoming = new Xiaoming();
        xiaoming = new Shirt(xiaoming);
        xiaoming = new Kuzi(xiaoming);
        xiaoming.show();
        System.out.println(xiaoming.Xiaofei());
    }
}
//装饰模式
//装饰器和被装饰的接口，都需要去实现同一个接口
//感觉有点像代理，装饰器的不同是，装饰器与被装饰必须继承同一个接口
//装饰器是给对象加强功能，代理是控制对象