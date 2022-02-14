package sheji.gongchang;

//电脑工厂
public class ComputerFactory {
    private Computer computer;
    public Computer getComputer(String name){
        if(name.equals("a")){
             computer = new Computera(); //a品牌电脑
        }else{
            computer = new Computerb();//b品牌电脑
        }
        return computer;
    }
}
