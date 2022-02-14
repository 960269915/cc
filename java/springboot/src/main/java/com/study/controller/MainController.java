package com.study.controller;
import com.study.entrity.User;
import com.study.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@Slf4j  //日志框架
public class MainController {
//    注册redis,字符串的
    @Resource
    StringRedisTemplate stringRedisTemplate;
//    注册redis,对象的
    @Resource
    RedisTemplate<Object,Object> redisTemplate;
    @Resource
    UserService userService;
    @RequestMapping("/index")
    @ResponseBody
    public String index(){
//        使用redis存储字符串
        stringRedisTemplate.opsForValue().set("name","zz");
        System.out.println(stringRedisTemplate.opsForValue().get("name"));
        stringRedisTemplate.delete("name");

//        redis存储对象时，需要做的初始化
        redisTemplate.setValueSerializer(new Jackson2JsonRedisSerializer<Object>(Object.class));
        User user = new User();
        user.setName("cc");
        user.setPassword("123");
        user.setUid(1);
        redisTemplate.opsForValue().set("user",user);
        System.out.println(redisTemplate.opsForValue().get("user"));

        log.error("访问了index");
        return "index";
    }

    @RequestMapping("/user")
    @ResponseBody
    public User user(@Param("name") String name){
        return userService.getUser(name);
    }
}
