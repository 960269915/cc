package com.book.servlet;

import com.book.entity.User;
import com.book.dao.UserMapper;
import com.book.service.UserService;
import com.book.service.impl.UserServiceImpl;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;
import lombok.SneakyThrows;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.util.Map;

//loadOnStartup为1时，默认加载当前Servlet
//不使用implements Servlet，只需要去继承HttpServlet 重写init doPost等方法
@WebServlet(value = "/login",loadOnStartup = 1)
public class Login extends HttpServlet {
    UserService userService;
    @Override
    @SneakyThrows
    public void init() throws ServletException {
        userService = new UserServiceImpl();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("html/text;charset=UTF-8");
        Map<String,String[]> map = req.getParameterMap();
            if(map.containsKey("name") && map.containsKey("pass")){
                String name = req.getParameter("name");
                String pass = req.getParameter("pass");
                if(userService.auth(name,pass,req.getSession())){
                    resp.getWriter().write("登录成功");
                }else{
                    resp.getWriter().write("账号或者密码不正确");
                }
/**
 *              UserMapper userMapper = session.getMapper(UserMapper.class);
 *              User user = userMapper.login(name,pass);
                if(user != null){
                    resp.getWriter().write(name+ "登录成功");
//                    ===cookie (addCookie会被放在响应头里面，下次请求头里面会携带cookie,保存在浏览器端)
//                    Cookie cookie = new Cookie("test","yyds");
//                    resp.addCookie(cookie);
//                    Cookie[] getCookie = req.getCookies();
//                    if(getCookie != null){
//                        for (Cookie cookItem:getCookie) {
//                            System.out.println(cookItem.getName() +"---"+ cookItem.getValue());
//                        }
//                    }
//                    ===session(每个浏览器只会产生一个session对象，保存在服务端，有唯一的sessionid,而sessionid是存在cookie里面的。一个会话的唯一标识)
//                    http是无状态的，服务器不会自动保存之前客户请求的任何记录，也不能分辨下一个请求和上个请求，是不是一个请求，对服务器而言，每次请求都是新的
                    HttpSession httpSession = req.getSession();
                    httpSession.setAttribute("user",user);
                    User sessionUser = (User) httpSession.getAttribute("user");
                    System.out.println(sessionUser);
//                    转发和重定向的区别，重定向是请求完成后的操作（处理完成，改变结果），转发是请求时的操作（自己不处理，交由其他处理）
//                    ===重定向
//                    resp.setStatus(302);
//                    resp.setHeader("location","https://www.baidu.com");
//                    ===转发
//                    req.setAttribute("user",user); //可以附带转发参数
//                    req.getRequestDispatcher("/zhuanfa").forward(req,resp);
                }else{
                    resp.getWriter().write("账户或者密码错误");
                }
                * */
            }else{
                resp.getWriter().write("数据不完整");
            }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write("xxx");
    }
}
