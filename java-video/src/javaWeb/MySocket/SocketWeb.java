package javaWeb.MySocket;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.Socket;

//前端
public class SocketWeb {
    public static void main(String[] args){
        try(Socket socket = new Socket("localhost",8080)) {
            System.out.println("已链接到服务器");
//            1、客户端输入
            OutputStreamWriter writer = new OutputStreamWriter(socket.getOutputStream());
            writer.write("hello");
            writer.flush();
            System.out.println("数据已发送,等待服务端确认");
//            2、接受服务端信息
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            System.out.println(reader.readLine());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
