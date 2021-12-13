package web;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import web.batis.myinterface.StudentInterface;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.sql.*;
import java.util.Scanner;

public class Link {
    public void linkFn(){
//        1、DriverManager链接数据库
        try(Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/study","root","caiyuntao");
//            2、创建一个可用于执行SQL的statement对象
            //statement 容易被SQL攻击，攻击的原理就是用户输入SQL语句，让代码执行错误，使用prepareStatement更好
            Statement statement = connection.createStatement()){
//            3、执行SQL语句，得到结果
            ResultSet resultSet = statement.executeQuery("select * from student"); //executeQuery查询

//            int insertI = statement.executeUpdate("insert into student (sid,name,sex,score) values (5,'小刚','男',100)"); //插入,返回生效行数
//            int updateI =  statement.executeUpdate("update student set score=100 where sid = 1");//修改,返回生效行数
//            int delI = statement.executeUpdate("delete from student where sid = 4 or sid = 5"); //删除

            //批次处理数据(处理完成以后，不允许再操作数据)
//            statement.addBatch("insert IGNORE into student values (4,'x1','男',20)");
//            statement.addBatch("insert IGNORE into student values (5,'x2','男',20)");
//            statement.executeBatch();
//            4、查看查询结果，结果的下标从1开始
            while (resultSet.next()){
//                resultSet.getString 意思是将值转换，可以是下标，可以使字段的name，同理可以转换为其他的类型
//                5、将查询结果映射为对象
                Student student = new Student(resultSet.getInt(1),resultSet.getString(2),resultSet.getString(3),resultSet.getInt(4));
                student.say();
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

//    使用prepareStatement，避免sql注入，原理是将用户输入的再包裹一层字符串（重要数据应该使用这个）
    public void login(){
        try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/study","root","caiyuntao")){
//            prepareStatement使用符号?预先占位
            PreparedStatement pre = connection.prepareStatement("select * from user where name = ? and password = ?;");
            Scanner scanner = new Scanner(System.in);
            pre.setString(1,scanner.nextLine()); //下标也是从1开始的
            pre.setString(2,scanner.nextLine());
            ResultSet res = pre.executeQuery();
            while (res.next()){
                String name = res.getString(1);
                System.out.println(name + "登录成功");
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }
//    事务
    public void shiwu(){
        try (Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/study","root","caiyuntao")){
            connection.setAutoCommit(false); //开启事务
//            do sql....
            //            connection.rollback(); //回滚事务
            connection.commit();//提交事务
        }catch (Exception e){
            e.printStackTrace();
        }
    }
//    使用batis的形式链接数据库
    public void batisLink(){
        try {
//          使用Batista创建链接  session等于statement
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(new FileInputStream("src/web/batis/xmls/config.xml"));
            try(SqlSession session =  sqlSessionFactory.openSession(true)){
//                通过接口的方式访问数据库---推荐
                StudentInterface students = session.getMapper(StudentInterface.class);
//                students.selectStudent().forEach(student -> {
//                    System.out.println(student);
//                });
//                System.out.println(students.getOne(1));
//                students.addStudent(new Student(6,"xx","男",0));
                System.out.println(students.del(6));
            }catch (Exception e){
                e.printStackTrace();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
