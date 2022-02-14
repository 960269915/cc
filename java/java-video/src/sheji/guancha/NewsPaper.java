package sheji.guancha;
import java.util.ArrayList;
import java.util.List;

//被观察者(报社)
public class NewsPaper {
//    存储观察者的
    private List<Customer> customerList = new ArrayList<Customer>();

//    添加观察者
    public void addCustomer(Customer customer){
         customerList.add(customer);
    }
//    通知的方法
    private void mynotifyAll(){
        for (Customer customer : customerList) {
            customer.update();
        }
    }
//    当有事件更新，通知所有的观察者
    public void newspaper(){
        mynotifyAll();
    }
}
