onmessage = function (e) {
  console.log('work接受到信息');
  var workerResult = +(e.data[0]);
  console.log('把消息返回给主线程');
  let cout = 0;

  async function hd() {
    return Promise.resolve().then(() => {
      for (let i = 0; i < workerResult; i++) {
        cout += i;
      }
      return cout
    })
  }

  hd().then(res => {
    postMessage(res);
  })
}

// work 内部操作dom，也不使用window
// close();   关闭线程