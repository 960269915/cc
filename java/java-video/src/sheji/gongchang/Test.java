package sheji.gongchang;

//工厂模式，把创建对象的方法，扔给ComputerFactory，由它为我们创建对象。而不是我们自己去new
public class Test {
    public static void main(String[] args) {
        ComputerFactory factory = new ComputerFactory();
        Computer computera = factory.getComputer("a");
        Computer computerb = factory.getComputer("b");
        System.out.println(computera == computerb);
    }
}
