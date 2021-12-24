package com.book.service.impl;

import com.book.dao.UserMapper;
import com.book.entity.User;
import com.book.service.UserService;
import com.book.utils.Sql;
import jakarta.servlet.http.HttpSession;
import org.apache.ibatis.session.SqlSession;

public class UserServiceImpl implements UserService {
    @Override
    public boolean auth(String username, String password, HttpSession httpSession) {
        SqlSession session = Sql.getSession();
        UserMapper userMapper = session.getMapper(UserMapper.class);
        User user = userMapper.login(username,password);
        if(user != null){
            httpSession.setAttribute("user",user);
            return true;
        }
        return  false;
    }
}
