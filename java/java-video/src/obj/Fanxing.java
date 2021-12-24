package obj;

//泛型接口
interface Faninterface<T>{
    T getScore();
}
//泛型
//使用
// Fanxing<Integer> fanxing2 = new Fanxing("1","数学",100);
// Integer a = fanxing2.score

//1、泛型类
public class Fanxing<T> implements Faninterface<T> {
    String id;
    String name;
    public T score; //分数可能是数字，也可能是文字，所以需要泛型，无法在static中使用

    public Fanxing(String id, String name, T score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
//    2、泛型方法（静态方法无法直接使用泛型）
    public void setScore(T score) {
        this.score = score;
    }
//    3、静态方法使用泛型
    /*
    * E extends Number，对泛型约束，必须继承Number或者Number的子类(上界)
    * E super Number,对泛型约束，必须继承Number或者Number的父类（下界）
    * */
    public static <E extends Number> void test(E val){
        System.out.println(val);
    }
//    4、泛型接口
    @Override
    public T getScore(){
        return this.score;
    }
}


