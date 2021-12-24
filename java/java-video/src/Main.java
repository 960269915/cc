import Function.MyFunction;
import lombok.extern.java.Log;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

@Log
public class Main {
    //        sout快捷键
    public static void main (String[] args){
//        log.log(Level.WARNING,"我是日志信息11");
        MyFunction myFunction = new MyFunction();
        myFunction.test();
    }

//    日志打印
    public static void log(){
        Logger logger = Logger.getLogger(Main.class.getName());
        try {
            FileHandler fileHandler = new FileHandler("text.log",true); //参数1日志文件地址，自动生成。参数2位是否每次在文件内追加
            fileHandler.setLevel(Level.WARNING); //默认低于INFO级别的不会输出,此处为设置等级
            SimpleFormatter formatter = new SimpleFormatter();
            fileHandler.setFormatter(formatter); //格式化日志
            logger.addHandler(fileHandler);
        } catch (IOException e) {
            e.printStackTrace();
        }
        /*日志级别
         * 1、SEVERE严重错误
         * 2、WARNING警告内容
         * 3、INFO一般信息
         * */
        logger.log(Level.SEVERE,"日志信息");
    }

//    读取配置文件
    public static void properties(){
        Properties properties = new Properties(); //类似于map的类
        try {
            properties.load(new FileInputStream("sys.properties"));
            properties.put("a","a");
            System.out.println(properties);
            System.out.println(properties.get("name"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
