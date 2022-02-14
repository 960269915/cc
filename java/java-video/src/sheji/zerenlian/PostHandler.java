package sheji.zerenlian;

public abstract class PostHandler {
    private PostHandler postHandler;

    public void setPostHandler(PostHandler postHandler) {
        this.postHandler = postHandler;
    }

    public abstract void handlerReq(Post post);
    protected final void next(Post post){
        if(this.postHandler !=null){
            this.postHandler.handlerReq(post);
        }
    }
}
