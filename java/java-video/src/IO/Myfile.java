package IO;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.util.Arrays;

//表示一个文件或者文件夹
public class Myfile {
    File file = new File("src/file"); //如果没有文件，会自动创建
    public void say(){
//        System.out.println(file.getName());//获取文件名称
//        System.out.println(file.exists());//文件是否存在
//        System.out.println(file.isDirectory());//是否是文件夹
//        System.out.println(file.canRead());//是否可读,file.canWrite()是否可写
//        System.out.println(Arrays.toString(file.list())); //获取所有的文件名称
//        file.mkdir() //创建文件夹  file.mkdirs 递归创建
//        file.createNewFile() //创建文件
//        file.delete();删除文件


//        1、遍历file对象，获取所有文件
        for (File f:file.listFiles()) {
            try(FileInputStream fileInputStream = new FileInputStream(f)) {
                byte[] bytes = new byte[fileInputStream.available()];//使用byte装流
                fileInputStream.read(bytes);//读取
//                System.out.println(new String(bytes)); //将流转为str打印
            }catch (Exception e){

            }

//            try(FileReader fileReader = new FileReader(f)) {
//                int tmp;
//                while ((tmp = fileReader.read()) != -1){
//                    System.out.println((char) tmp);
//                }
//            }catch (Exception e){
//
//            }
        }
        this.copy();
    }

//    拷贝文件
    public void copy(){
        File newFile = new File("src/copyfile");
        newFile.mkdir();
        for (File f:file.listFiles()) {
            try(FileInputStream fileInputStream = new FileInputStream(f); FileOutputStream fileOutputStream = new FileOutputStream(newFile.getPath()+"/"+f.getName())) {
                byte[] bytes = new byte[fileInputStream.available()];
                fileInputStream.read(bytes);//读取，转换
                fileOutputStream.write(bytes);
            }catch (Exception e){
                System.out.println(e);
            }
        }
    }
}
