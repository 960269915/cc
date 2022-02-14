package sheji.daili;

public class Test {
    public static void main(String[] args) {
        House house = new Xiaoming();
        Zhongjie zhongjie = new Zhongjie(house);
        zhongjie.FindHouse();
    }
}
