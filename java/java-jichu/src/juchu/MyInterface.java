package juchu;

//接口也是约束类的，可以多继承
public interface MyInterface {
    void say();
}

interface Car extends MyInterface{
    void run();
}

class CarImp implements Car{
    @Override
    public void say() {

    }

    @Override
    public void run() {

    }
}