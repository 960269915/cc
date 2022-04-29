package com.example.springbootmp;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;

//自动生成文件配置类
public class Main {
    public static void main(String[] args) {
//        创建Generator对象
        AutoGenerator autoGenerator = new AutoGenerator();
//        数据源
        DataSourceConfig dataSourceConfig = new DataSourceConfig();
        dataSourceConfig.setDbType(DbType.MYSQL);
        dataSourceConfig.setUrl("jdbc:mysql://localhost:3306/mybatis-plus");
        dataSourceConfig.setUsername("root");
        dataSourceConfig.setPassword("caiyuntao@1992");
        dataSourceConfig.setDriverName("com.mysql.cj.jdbc.Driver");
        autoGenerator.setDataSource(dataSourceConfig);
        //全局配置
        GlobalConfig globalConfig = new GlobalConfig();
        globalConfig.setOutputDir(System.getProperty("user.dir") + "/src/main/java"); //文件生成的地址
        globalConfig.setAuthor("caiyuntao");
        globalConfig.setServiceName("%sService");
        autoGenerator.setGlobalConfig(globalConfig);
//        包信息
        PackageConfig packageConfig = new PackageConfig();
        packageConfig.setParent("com.example.springbootmp");
        packageConfig.setModuleName("generator");
        packageConfig.setController("controller");
        packageConfig.setService("service");
        packageConfig.setServiceImpl("serviceImp");
        packageConfig.setMapper("mapper");
        packageConfig.setEntity("entity");
        autoGenerator.setPackageInfo(packageConfig);
//        配置策略
        StrategyConfig strategyConfig = new StrategyConfig();
        strategyConfig.setInclude("user"); //指定生成的表名
        strategyConfig.setEntityLombokModel(true); //为每个实体类添加lombok
        strategyConfig.setColumnNaming(NamingStrategy.underline_to_camel);//数据库下划线转驼峰
        strategyConfig.setNaming(NamingStrategy.underline_to_camel);
        autoGenerator.setStrategy(strategyConfig);
//        执行生成
        autoGenerator.execute();
    }
}
