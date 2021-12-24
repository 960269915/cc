package obj.myenum;

public enum MyStatus {
    //    RUN,SLEEP,EAT;
    RUN("跑步"),SLEEP("睡觉");
    private final String name;
    MyStatus(String name){
        this.name = name;
    }
    public String getName() {
        return name;
    }
}

//myenum.getStatus().getName()
