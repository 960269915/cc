package sheji.zerenlian;

public class Test {
    public static void main(String[] args) {
//        链式1
        PostHandler ahandler = new Ahandler();
//        链式2
        PostHandler bhandler = new Bhandler();
        ahandler.setPostHandler(bhandler); //把两个链式，串联起来
//        被处理的对象
        Post post = new Post();
        post.setStr("正常的内容，广告，游戏");
        ahandler.handlerReq(post);
        System.out.println(post.getStr());
    }
}
