package sheji.muban;

public abstract class Cook {
    public void open(){
        System.out.println("打开抽油烟机");
    }

    public void fire(){
        System.out.println("开火");
    }
//    具体的做菜，子类去实现
    public abstract void cook();
    public void closeFire(){
        System.out.println("关火");
    }
    public void close(){
        System.out.println("关抽油烟机");
    }
    public void doCook(){
        this.open();
        this.fire();
        this.cook();
        this.closeFire();
        this.close();
    }
}
