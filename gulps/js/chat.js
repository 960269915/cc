class Chat {
  // name 话题name
  constructor(name, clientid, callback) {
    this.pub_key = "pub_3e2a6723918cf08da95fb5051533f9bd";
    this.sub_key = "sub_64e816e612f61f67cb25467043520eb8";
    this.clientid = clientid;
    this.isready = false;
    this.chatName = name;
    this.callback = callback;
    ROP.Enter(this.pub_key, this.sub_key, this.clientid)
  }
  enter() {
    return new Promise((reject, resolve) => {
      // 连接成功
      ROP.On("enter_suc", () => {
        console.log("链接成功");
        this.isready = true;
        reject('success');
      })
      // 连接失败
      ROP.On("enter_fail", (err) => {
        this.isready = false;
        resolve(err);
      })
    })
  }
  getmsg() {
    // 收到关注的话题的消息
    ROP.On("publish_data", (data, topic) => {
      if (typeof this.callback == "function") {
        console.log("收到消息" + "话题" + topic + " ->消息 " + data);
        this.callback({
          topic,
          data
        })
      }
    })
  }
  // 关注话题
  sub(topic) {
    ROP.Subscribe(topic)
    console.log('已关注话题:' + topic);
  }
  // 取消关注
  unsub(topic) {
    ROP.UnSubscribe(topic)
  }
  // 推送消息到某个话题
  async push(data) {
    if (!this.isready) {
      let result = await this.enter();
      if (result == 'success') {
        this.sub(this.chatName);
        // this.getmsg();
      } else {
        console.log('ready失败');
        return;
      }
    }
    if (this.isready) {
      if (this.chatName == "") {
        console.log('chatName为空');
        return;
      }
      if (data) {
        console.log('发送消息' + data);
        ROP.Publish(data, this.chatName)
      }
    }
  }
}