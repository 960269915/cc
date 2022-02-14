package com.spring.config;
import com.spring.xmlType.bean.Student;
import com.zaxxer.hikari.HikariDataSource;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.TransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import javax.sql.DataSource;
//当是自己写的类时，推荐使用自动扫描。当是别人提供的类，无法修改源码时，推荐手动注册
//使用注解替代xml配置（===推荐===），当前为配置文件，等同于xml
@Configuration //用于定义配置类，可替换XML配置文件，被注解的类内部包含一个或多个@Bean注解方法
//@ComponentScan("com.spring.config.bean") //自动扫描com.spring.config.bean包下的类上有@Component注解的，并且注册
@ComponentScans({
        @ComponentScan("com.spring.config.bean"),
        @ComponentScan("com.spring.config.aop"),
        @ComponentScan("com.spring.config.service"),
})
@EnableAspectJAutoProxy //开启aop操作
@EnableTransactionManagement //开启spring的事务
@MapperScan("com.spring.config.mapper") //注册所有的mapper,就不需要在mybatis里面去注册了
public class Config {
//    手动注册
//    @Bean
//    public Student student(){
//       return new Student();
//   }

//    注册事务
    @Bean
    public TransactionManager transactionManager(@Autowired DataSource source){
        return new DataSourceTransactionManager(source);
    }

    //    手动注册数据库链接，就不需要xml配置了
    @Bean
    public DataSource dataSource(){
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3307/study");
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUsername("root");
        dataSource.setPassword("123456");
        return dataSource;
    }

//    注册SqlSessionFactoryBean为bean,用于链接
    @Bean
    public SqlSessionFactoryBean sqlSessionFactoryBean(@Autowired DataSource source){
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(source);
        return bean;
    }
}

