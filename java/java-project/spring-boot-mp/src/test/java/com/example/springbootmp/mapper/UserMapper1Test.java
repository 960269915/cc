package com.example.springbootmp.mapper;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.example.springbootmp.entity.User;
import com.example.springbootmp.enums.UserStatusEnum;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserMapper1Test {
    @Autowired
    private UserMapper userMapper1;

    @Test
    void test1() {
//        -----------------------------查询
//        根据id查询
//        System.out.printf(String.valueOf(userMapper.selectById(1)));

//        //全部查询列表
//        System.out.println(userMapper.selectList(null));

//        queryWrapper 对象，一定要关联实体类
        QueryWrapper<User> queryWrapper = new QueryWrapper<>();

        //条件查询列表(or多条件和and 需要使用朗姆大表达式)
//        queryWrapper.eq("age", 1).or(e->{
//            e.eq("name","a").and(e2->{e2.eq("id",3);});
//        });
//
//        userMapper.selectList(queryWrapper).forEach(System.out::println);

        //多条件查询列表 其实就是传入map对象
//        Map<String,Object> queryMap = new HashMap<>();
//        queryMap.put("name","a");
//        queryMap.put("id",3);
//        queryWrapper.allEq(queryMap);
//        System.out.println(userMapper.selectList(queryWrapper));

//        insql
//        queryWrapper.inSql("name","select name from user where name = 'a'");
//        System.out.println(userMapper.selectList(queryWrapper));

//        排序
//        queryWrapper.orderByAsc("age");
//        queryWrapper.having("age > 1");
//        System.out.println(userMapper.selectList(queryWrapper));

//        分页查询 result 里面可以拿到所有的分页参数
//        Page<User> page = new Page<>(1,2);
//        Page<User> result = userMapper.selectPage(page,null);
//        result.getRecords().forEach(System.out::println);


    }

    @Test
    void test2() {
        // -----------------------------新增
        User user = new User();
        user.setMyName("a").setAge(18);
        userMapper1.insert(user);
    }

    @Test
    void test3() {
        // -----------------------------更新
        User user = userMapper1.selectById(5);
        user.setAge(1);
        user.setStatus(UserStatusEnum.OPEN);
        userMapper1.updateById(user);
    }

    @Test
    void test4() {
        // -----------------------------删除
        userMapper1.deleteById(1);
    }
    @Test
    void test5() {
        // -----------------------------多表联查（自定义查询）
        System.out.println(userMapper1.getGoods(2));
    }
}