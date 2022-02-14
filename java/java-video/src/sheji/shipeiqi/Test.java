package sheji.shipeiqi;

//适配器（转换器）是把一个接口，转换为另一个接口，解决类之间，接口不兼容的问题
public class Test {
    public static void main(String[] args) {
        PlayerObj playerObj = new PlayerObj();
        playerObj.play("mp3","mp3歌曲");
        playerObj.play("mp4","mp4视频");
    }
}
