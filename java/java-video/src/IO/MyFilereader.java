package IO;

import java.io.FileReader;
import java.io.FileWriter;

//文件字符流(char)
public class MyFilereader {
    public void say(){
        try(FileReader filereader = new FileReader("src/file/test.txt");FileWriter fileWriter = new FileWriter("src/file/copy-test.txt")) {
//            1、读取
            char[] len = new char[2]; //一次读取的长度
            int tmp;
            System.out.println(filereader.getEncoding()); //获取编码
//            2、单个读取
            while ((tmp = filereader.read())!=-1){
                fileWriter.write((char) tmp);
            }
//            3、多个读取
//            while ((tmp = filereader.read(len)) != -1){
//                String str = new String(len,0,tmp); //转为字符串
//                fileWriter.write(str);
//            }
//            2、写入
            fileWriter.write("中文");
            fileWriter.append("添加的内容").append("添加的内容2");
            fileWriter.flush();
        }catch (Exception e){
            System.out.println(e);
        }
    }
}
