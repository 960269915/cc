package com.example.controller;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.example.entity.User;
import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;

//@Controller注册为controller
//controller的好处，不用每个请求写个servelet
@Controller
//@RequestMapping("/yyds") //为所有的请求添加前缀
public class MainController {
//    @RequestMapping(value = "/test")设置请求映射，localhost:8080/test
    /**
     * 这些参数相当于是验证，必须请求的和定义的一样，否则报错
     * value 请求路径
     * method 请求类型，默认GET
     * params 请求必须携带的参数,不是必须
     * produces 返回的数据格式，相当于设置content-type
     * */

    /**
     * 其实这几个的用法都一样的
     * @RequestParam("name") String name 获取参数
     * @CookieValue(name = "testCookie",required = false) String testCookie 获取cookie
     * */
    @RequestMapping(value = "/test",method = RequestMethod.GET,params = {"name","age"})

    public ModelAndView test(@RequestParam("name") String name,@RequestParam("age") Integer age){
        System.out.println(name + age);
        return new ModelAndView("index");
    }

    @RequestMapping(value = "/login",method = RequestMethod.GET,params = {"name","password"})
    public void  login(HttpServletResponse response, @CookieValue(name = "testCookie",required = false) String testCookie, HttpSession httpSession, User user){ //User user可以直接映射一个实体类，请求参数和实体类参数对应上
        System.out.println("cookie值为" + testCookie);
        System.out.println("session值为" + httpSession.getAttribute("testSession"));
        System.out.println(user);
        response.addCookie(new Cookie("testCookie","123"));
        httpSession.setAttribute("testSession","123");
    }

//    restFull风格
    @RequestMapping(value = "/restFull/{id}")
    public void restFull(@PathVariable("id") String id){
        System.out.println("接收到参数id" + id);
    }

    @RequestMapping(value = "/getJson",produces = "application/json")
    //@ResponseBody向浏览器返回json
    @ResponseBody
    public String getJson(){
        JSONObject object = new JSONObject(); //json对象
        JSONArray array = new JSONArray(); //json数组
        array.add("run");
        array.add("eat");
        object.put("name","cc");
        object.put("list",array);
        return object.toJSONString();
    }

//    返回实体类
    @RequestMapping(value = "/getUser",produces = "application/json")
    @ResponseBody
    public User getUser(){
        User user = new User();
        user.setName("cc");
        user.setPassword("123");
        return user;
    }

    //当前端传递json字符串串时，需要@RequestBody解析
    @RequestMapping(value = "/submitJson")
    @ResponseBody
    public String submitJson(@RequestBody User user){
        System.out.println(user);
        return user.toString();
    }

    @RequestMapping(value = "/upload",method = RequestMethod.POST)
    @ResponseBody
    public String upload(@RequestParam CommonsMultipartFile file){ //此处的file 要对应key
        System.out.println(file);
        File fileObj = new File(String.valueOf(file.getOriginalFilename()));
        try {
            file.transferTo(fileObj);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("文件已保存到" + fileObj.getAbsolutePath());
        return "上传成功";
    }
    @RequestMapping("/down")
    public void down(HttpServletResponse response) throws IOException {
//        response.setContentType("multipart/form-data");
        OutputStream outputStream = response.getOutputStream();
        InputStream inputStream = new FileInputStream("学习.txt");
        IOUtils.copy(inputStream,outputStream);
    }
}

