package obj;

//异常
/*
 *throw new Exception("抛出异常");
 *throws Exception 方法捕获异常
 */
public class Error {
    public void say(){
        try {
            System.out.println(1/0);
        }catch (Exception e){
            System.out.println(e);
        }
    }
}
