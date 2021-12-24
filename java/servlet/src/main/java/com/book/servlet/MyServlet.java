package com.book.servlet;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(value = "/test",loadOnStartup = 1) //test 应用路径
public class MyServlet implements Servlet {
//    初始化，只执行一次
    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
//        System.out.println("我是init");
    }

    @Override
    public ServletConfig getServletConfig() {
        System.out.println("我是getServletConfig");
        return null;
    }
//    当页面每次请求，都会执行,多线程的
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
//        ===request
//        System.out.println(request.getHeader("token"));//获取token
//        System.out.println(request.getMethod()); //获取请求方法
//        ===response
        HttpServletResponse response = (HttpServletResponse)  servletResponse;
        response.setHeader("Content-type","text/html;charset=UTF-8");
        response.getWriter().write("服务端的响应内容");
        System.out.println("我是service");
    }

    @Override
    public String getServletInfo() {
        System.out.println("我是getServletInfo");
        return null;
    }
//    关闭时执行
    @Override
    public void destroy() {
        System.out.println("我是destroy");
    }
}
