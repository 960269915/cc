package sheji.danli;

public class Danlie {
    private static Danlie instance; //单列的实例
    private Danlie(){ //单列模式，不允许new
        System.out.println("创建了single对象");
    };
    public static Danlie getInstance(){ //获取实例
        if(instance == null){
            instance = new Danlie();
        }
        return instance;
    }
}
