package IO;
import java.io.FileInputStream;
import java.io.FileOutputStream;

//文件字节流(byte)
public class MyFileStream {
    public void say(){
        /*
        *相对路径或者绝对路径
        *流读取完成以后，需要关闭使用try()语法,会自动调用关闭的方法
        * */
        try(FileInputStream inputStream = new FileInputStream("src/file/test.txt")) {
//            1、单次读取流
//            System.out.println(inputStream.read()); //读取流，一个英文占1个字节，一个中文占2个字节，当读取完成以后，返回-1
//            2、循环读取
//            int temp;
//            while ((temp = inputStream.read()) != -1){
//                System.out.println((char)temp);
//            }
//            3、一次性读取（没有读取内容时，也是返回-1）
            byte[] bytes = new byte[inputStream.available()];//使用byte装流
            inputStream.read(bytes);//读取，转换
//            System.out.println(new String(bytes)); //将流转为str打印
////            4、输出流
            FileOutputStream fileOutputStream = new FileOutputStream("src/file/copy-test.txt");
            fileOutputStream.write(bytes);//写入数据
            fileOutputStream.flush();//刷新硬盘
        }catch (Exception e){
            System.out.println(e);
        }
    }
}
