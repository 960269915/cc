package web;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class MainTest {
    //测试之前的前置操作，所有的test方法执行之前，都会执行这个
    @Before
    public void before(){
        System.out.println("进行测试的前置操作");
    }
    @After
    public void after(){
        System.out.println("进行测试的收尾操作");
    }
    /**测试用例要求
     * 1、必须是public
     * 2、不能是静态方法
     * 3、返回值必须是void
     * 4、必须是没有任何参数的方法
     * **/
    @Test
    public void method1(){
        System.out.println("我是测试用例1");
        Assert.assertEquals(1,1); //通过断言，获得测试结果。参数1期望的值，参数2得到的值
    }
    @Test
    public void method2(){
        System.out.println("我是测试用例2");
    }
}
