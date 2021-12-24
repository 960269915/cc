package com.book.filter;
import com.book.entity.User;
import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

/*
*  /*代表过滤所有，不过滤所有就写具体路径
* */
@WebFilter("/*")
public class TestFilter extends HttpFilter{
    @Override
    protected void doFilter(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
        String url = String.valueOf(req.getRequestURL());
//        endsWith 以什么结尾
        /**
        if(!url.endsWith(".js") && !url.endsWith(".css")){
            HttpSession session = req.getSession();
            User user = (User) session.getAttribute("user");
            if(user == null && !url.endsWith("login")){
                System.out.println("未登录");
                res.sendRedirect("login");
                return;
            }
        }
        */
        chain.doFilter(req,res);
    }
}



//public class TestFilter implements Filter {
//    @Override
//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
//        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
//        System.out.println(httpServletRequest.getRequestURI());
////        将结果交给下个过滤器，如果没有过滤器，再达到servlet
//        filterChain.doFilter(servletRequest,servletResponse);
//    }
//}
