package com.book.servlet;

import com.book.entity.User;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(value = "/zhuanfa")
public class Zhuanfa extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        User user =(User) req.getAttribute("user"); //获取传递的参数
        resp.getWriter().write("我是转发的"+user.getName()+"登录成功拉");
    }
}
