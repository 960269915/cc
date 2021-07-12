// ==================koa2使用的异步中间件

// 中间件机制  处理一些业务，完成后，调用next，会继续执行下面的代码
// 下层的rerutn的值， 会被上层的next() 拿到
const middleware1 = async (req, res, next) => {
  console.log(1);
  let info = await next()
  console.log('1end');
  console.log(info);
}

const middleware2 = async (req, res, next) => {
  console.log(2);
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve()
  //   }, 1000)
  // })
  let info = await next();
  console.log('2end');
  return info
}

const middleware3 = async (req, res, next) => {
  console.log(3);
  await next();
  console.log('3end');
  return '我是middleware3的返回值' //此处的返回值，会被middleware2的next拿到
}


function run(req, res) {
  let middleList = [middleware1, middleware2, middleware3];
  const next = () => {
    let middle = middleList.shift()
    if (middle) {
      return Promise.resolve(middle(req, res, next))
    }
  }
  next()
}

run()