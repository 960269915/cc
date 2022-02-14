package com.example.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

//没有xml的写法，只需要实现AbstractAnnotationConfigDispatcherServletInitializer
//所有的配置，最后都要注册到此类
public class MainInit extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{Dataconfig.class}; //基本的spring配置类，一般用于业务层
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{Webconfig.class}; //配置DispatcherServlet 的配置类，主要用于controller等配置
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"}; //匹配文件路径
    }
}
