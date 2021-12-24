package com.book.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import org.apache.commons.io.IOUtils;
import org.apache.ibatis.io.Resources;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;

@MultipartConfig() //注解这个servlet是可以处理文件的
@WebServlet(value = "/getFile",loadOnStartup = 1)
public class File extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        访问图片
        resp.setContentType("image/png");
        InputStream inputStream =  Resources.getResourceAsStream("1.jpeg"); //获取输入流
        OutputStream outputStream = resp.getOutputStream();//输出流
        IOUtils.copy(inputStream,outputStream); //IOUtils为jar包
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        上传图片(此处有个坑，需要写绝对路径,最后的/不要拼在file后面)
        java.io.File file = new java.io.File("/Users/cc/Desktop/myproject/cc/java/servlet/src/main/resources");
        Part part = req.getPart("img"); //img 为form-data的key
        String typeName = part.getContentType().substring(part.getContentType().lastIndexOf("/")+1);
        try(FileOutputStream stream = new FileOutputStream(file.getPath() +"/"+ (new Date().getTime()) + "." + typeName)){
            IOUtils.copy(part.getInputStream(),stream);
            resp.getWriter().write("success");
        }
    }
}
