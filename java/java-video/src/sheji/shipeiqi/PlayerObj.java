package sheji.shipeiqi;

//适配器实例
public class PlayerObj implements Player {
    private Myplay myplay; //真正播放的类
    PlayerObj(){
        this.myplay = new Myplay();
    }
    @Override
    public void play(String type, String filename) {
        if(type.equals("mp3")){
            this.myplay.playMp3(filename);
        }else{
            this.myplay.playMp4(filename);
        }
    }
}
