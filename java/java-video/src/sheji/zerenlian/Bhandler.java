package sheji.zerenlian;

public class Bhandler extends PostHandler{
    @Override
    public void handlerReq(Post post) {
        String str = post.getStr();
        str = str.replace("游戏","**");
        post.setStr(str);
        System.out.println("过滤游戏");
        next(post);
    }
}
