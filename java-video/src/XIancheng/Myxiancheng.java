package XIancheng;
//线程类似js的同步异步
public class Myxiancheng {
    int val = 0;
    public void say(){
        Thread t = new Thread(()->{
            System.out.println("t线程开启了");
        });
//        启动线程
        t.start();
//        休眠线程,可能会发生异常，需要捕获异常
        try {
            System.out.println("线程休眠，等待3秒");
            Thread.sleep(3000);
        }catch (Exception e){
            System.out.println(e);
        }
        System.out.println(1);
    }
//    1、停止线程
    public void stopfn(){
        Thread h = new Thread(()->{
            System.out.println("h线程开启了");
            while (true){
                System.out.println("h线程运行。。。");
                if(Thread.currentThread().isInterrupted()){ //接收到停止的通知
//                    dosomething...
                    break;
//                    Thread.interrupted();//恢复线程
                }
            }
            System.out.println("h线程收到通知，结束了");
        });

        h.start();

        try {
            Thread.sleep(3000); //主线程等待，不是h线程
            h.interrupt();//h线程发送停止的通知
        }catch (Exception e){
            e.printStackTrace();
        }
    }

//    2、加入线程
    public void join(){
           Thread t1 = new Thread(()->{
               for (int i = 0; i < 10; i++) {
                   System.out.println("t1---"+i);
               }
           });

            Thread t2 = new Thread(()->{
                for (int i = 0; i < 10; i++) {
                    System.out.println("t2---" + i);
                    if(i==6){
                        try {
                            System.out.println("t1加入");
                            t1.join();//需要等t1完成以后，再执行t2
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                }
            });
            t1.start();
            t2.start();
    }
//    4、线程操作变量，当多个线程操作同一个变量时，会导致变量错错误，正确的是一个线程只能操作一个变量（下面是错误的例子）
    public void testVal(){
        Thread t1 = new Thread(()->{
            for (int i = 0; i < 30; i++) {
                val++;
            }
        });
        Thread t2 = new Thread(()->{
            for (int i = 0; i < 30; i++) {
                val++;
            }
        });
        t1.start();
        t2.start();
        System.out.println(val);
    }
    public synchronized void add(){
        val ++;
    }
//    5、线程锁
    public void lock(){
        Thread t1 = new Thread(()->{
            for (int i = 0; i < 3; i++) {
                /*
                * Myxiancheng.class 为线程锁名字，需要同步的线程必须是一个名字，可传入类锁或者对象锁
                * 当其他线程想执行的时候，必须先等到前一个执行完成
                * synchronized 关键字可以放在方法前面，代表同步方法
                * 被synchronized包裹的，都属于同步代码块
                * */
//                synchronized (Myxiancheng.class){
//                    val++;
//                }
                this.add();

            }
            System.out.println("线程1完成");
        });
        Thread t2 = new Thread(()->{
            for (int i = 0; i < 3; i++) {
//                synchronized (Myxiancheng.class){
//                    val++;
//                }
                this.add();

            }
            System.out.println("线程2完成");

        });
        t1.start();
        t2.start();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(val);
    }

//    6、wait和notify
    public void waitAndnotify(){
        Object obj = new Object(); //创建对象锁

        Thread t1 = new Thread(()->{
            synchronized (obj){
                try {
                    System.out.println("开始等待");
                    obj.wait();//线程进入等待，必须在锁的代码块才能调用wait和notify,且锁必须是同一个
                    System.out.println("等待结束");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });

        Thread t2 = new Thread(()->{
            synchronized (obj){
                System.out.println("开始唤醒等待的锁");
                obj.notify(); //唤醒等待的线程，但是必须等待当前线程执行完成，被唤醒的线程才能执行
                System.out.println("t2执行完成");
            }
        });

        t1.start();
        t2.start();

    }

//    7、ThreadLocal（每个线程单独存储的值,且每个线程的值，互不干扰）
    public void local(){
        /*
        * localVal.set() localVal.get()  localVal.remove();
        * */
        ThreadLocal<String> localVal = new ThreadLocal<>();
        Thread t1 = new Thread(()->{
            localVal.set("cc");
            try {
                Thread.sleep(1500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(localVal.get());
        });

        Thread t2 = new Thread(()->{
            localVal.set("zz");
            System.out.println(localVal.get());
        });

        t1.start();
        t2.start();
    }


}
