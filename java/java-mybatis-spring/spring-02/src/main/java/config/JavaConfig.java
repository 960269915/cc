package config;

import aop.log.Log;
import com.entity.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
//ComponentScan 扫描类注册bean
@ComponentScan("com.entity")
@ComponentScan("aop.service")
//Import 导入其他配置
//@Import()
public class JavaConfig {
//    下面的为显式的注册
    @Bean("log")
    public Log getLog(){
        return new Log();
    }
}
