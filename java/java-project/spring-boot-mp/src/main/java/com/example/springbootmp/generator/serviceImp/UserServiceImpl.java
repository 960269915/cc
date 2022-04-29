package com.example.springbootmp.generator.serviceImp;

import com.example.springbootmp.generator.entity.User;
import com.example.springbootmp.generator.mapper.UserMapper;
import com.example.springbootmp.generator.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author caiyuntao
 * @since 2022-04-07
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
