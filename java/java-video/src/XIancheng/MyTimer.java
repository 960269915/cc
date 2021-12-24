package XIancheng;

import java.util.Timer;
import java.util.TimerTask;

public class MyTimer {
    private Integer i = 0;
//    多少秒之后执行，调用cancel取消定时器
    public void say1(){
        Timer timer = new Timer(); //创建定时器对象
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                System.out.println(11);
                timer.cancel(); //当任务完成以后,需要调用cancel 结束线程
            }
        },1000);
    }

//    每隔多少秒执行
    public void say2(){
        Timer timer = new Timer(); //创建定时器对象
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                i++;
                System.out.println(i);
               if(i == 3){
                   timer.cancel();
               }
            }
        },1000,1000);
    }
}
