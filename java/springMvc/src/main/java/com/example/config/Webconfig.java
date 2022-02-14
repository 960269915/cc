package com.example.config;

import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.*;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver;
import org.thymeleaf.spring5.view.ThymeleafViewResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;

import java.util.Collections;
import java.util.List;
//controller 注册到这里
@ComponentScan("com.example.controller")
@ComponentScan("com.example.entity")
@Configuration
@EnableWebMvc
public class Webconfig implements WebMvcConfigurer {
    //开启默认的servlet
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
    //    注册拦截器
//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(new Maininterceptor())
//                .addPathPatterns("/**") //添加拦截器的匹配路径，只要匹配一律拦截
//                .excludePathPatterns("/home");//拦截器不拦截的路径
//    }

//    解决返回返回实体类json,springboot就不需要了
    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        FastJsonHttpMessageConverter converter = new FastJsonHttpMessageConverter();
        converter.setSupportedMediaTypes(Collections.singletonList(MediaType.APPLICATION_JSON));
        converters.add(converter);
    }

    //配置文件上传和下载
    @Bean("multipartResolver") //固定的bean名字
    public CommonsMultipartResolver commonsMultipartResolver(){
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
        resolver.setMaxInMemorySize(1024*1024*10); //最大10m
        resolver.setDefaultEncoding("UTF-8");//默认编码格式
        return resolver;
    }

//================================
//    使用thymeleafViewResolver作为视图解析器，并解析html（以下所有不是必须，是模板解析器）
    @Bean
    public ThymeleafViewResolver thymeleafViewResolver(@Autowired SpringTemplateEngine springTemplateEngine){
        ThymeleafViewResolver resolver = new ThymeleafViewResolver();
        resolver.setOrder(1);
        resolver.setCharacterEncoding("UTF-8"); //编码格式
        resolver.setTemplateEngine(springTemplateEngine);
        return resolver;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("/WEB-INF/static/"); //匹配静态资源的访问路径
    }


//    配置模板解析器
    @Bean
    public SpringResourceTemplateResolver templateResolver(){
        SpringResourceTemplateResolver resolver = new SpringResourceTemplateResolver();
        resolver.setSuffix(".html"); //解析的文件后缀名
        resolver.setPrefix("/WEB-INF/template/");//解析的html存放的位置
        return resolver;
    }

//    配置模板引擎
    @Bean
    public SpringTemplateEngine springTemplateEngine(@Autowired ITemplateResolver resolver){
        SpringTemplateEngine engine = new SpringTemplateEngine();
        engine.setTemplateResolver(resolver); //模板解析器
        return engine;
    }




}
