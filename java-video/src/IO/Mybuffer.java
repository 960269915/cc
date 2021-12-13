package IO;

import java.io.BufferedInputStream;
import java.io.FileInputStream;

public class Mybuffer {
    public void say(){
        try(BufferedInputStream bufferedInputStream = new BufferedInputStream(new FileInputStream("src/file/test.txt"))) {
//            System.out.println((char) bufferedInputStream.read());
            int temp;
            while ((temp = bufferedInputStream.read()) != -1){
                System.out.println((char) temp);
            }
        }catch (Exception e){}
    }
}
