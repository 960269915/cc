package sheji.celue;

public class Test {
    public static void main(String[] args) {
        Computer computer1 = new Computer();
        computer1.setAction(new ActionAdd());
        System.out.println(computer1.doAction(1, 2));
        Computer computer2 = new Computer();
        computer2.setAction(new ActionSub());
        System.out.println(computer2.doAction(3, 1));
    }
}


//策略模式是为类注入不同的功能
//Computer.doAction 并不知道要做什么事，需要实例化时，根据传入进来的Action的doAction去实现
//所以这是将功能和类解耦的过程
//好处就是不改Computer类的情况下，为它扩展更多的功能