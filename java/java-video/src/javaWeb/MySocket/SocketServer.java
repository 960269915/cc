package javaWeb.MySocket;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

//todo

//后端
public class SocketServer {
    public static void main(String[] args){
        try(ServerSocket serverSocket = new ServerSocket(8080)) {
            System.out.println("正在等待客户端链接。。。");
            Socket socket = serverSocket.accept();//当没有客户端链接时，线程会阻塞，直到客户端链接为止
            System.out.println("客户端已链接，Ip地址为"+socket.getInetAddress().getHostAddress());
//            1、接受客户端信息
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            System.out.println(reader.readLine());
//            2、给客户端发送消息
            OutputStreamWriter writer = new OutputStreamWriter(socket.getOutputStream());
            writer.write("服务端已收到数据\n");
            writer.flush();
            socket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
