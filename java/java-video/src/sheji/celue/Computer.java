package sheji.celue;

public class Computer {
    private Action action;
    public Computer(){}
    public void setAction(Action action) {
        this.action = action;
    }

    public int doAction(int num1, int num2){
        return this.action.doAction(num1,num2);
    }
}

