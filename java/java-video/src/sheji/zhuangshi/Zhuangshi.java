package sheji.zhuangshi;

//装饰器抽象类
public abstract class Zhuangshi implements Person{
    protected Person person; //person 代表被装饰的对象
    public Zhuangshi(Person person){
        this.person = person;
    }
}
