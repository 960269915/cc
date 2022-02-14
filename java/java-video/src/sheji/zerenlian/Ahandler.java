package sheji.zerenlian;

public class Ahandler extends PostHandler{
    @Override
    public void handlerReq(Post post) {
        String str = post.getStr();
        str = str.replace("广告","**");
        post.setStr(str);
        System.out.println("过滤广告");
        next(post);
    }
}
