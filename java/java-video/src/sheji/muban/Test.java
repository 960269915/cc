package sheji.muban;

//模板模式，提取公共的放在父类，子类去实现自己的方法
public class Test {
    public static void main(String[] args) {
        CookTomato cookTomato = new CookTomato();
        cookTomato.doCook();
    }
}
