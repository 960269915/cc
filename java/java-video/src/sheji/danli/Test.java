package sheji.danli;

//单列模式
public class Test {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            Danlie.getInstance();
        }
    }
}
