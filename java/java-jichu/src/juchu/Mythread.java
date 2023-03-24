package juchu;


//join其他线程等待当前线程
//interrupt 中断线程
public class Mythread{
    static int num = 0;
    public static final Object lock = new Object();
    public static void main(String[] args) {
        study2();
    }

//    多线程操作同一个数据
    public  static void study2(){
        Thread t1 = new Thread(()->{
            for (int i = 0; i < 10; i++) {
                if(i==3){
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
                //synchronized代码块解决多线程访问同一数据的问题，本质锁住的是对象或者变量
//                用synchronized修饰的方法就是同步方法，它表示整个方法都必须用this实例加锁
                synchronized(Mythread.lock) {
                    Mythread.num +=i;
                }
            }
        });

        Thread t2 = new Thread(()->{
            for (int i = 0; i < 10; i++) {
                synchronized(Mythread.lock) {
                    Mythread.num -=i;
                }
            }
        });
        t1.start();
        t2.start();
        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println(Mythread.num);
    }
    public void study1(){
        System.out.println("main start...");
        Thread thread = new Thread(()->{
            System.out.println("线程开启");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        thread.start();
        try {
            thread.join(); //使用join以后，其他线程需要等到这个线程结束以后，才能继续执行
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("main end...");
    }
}
