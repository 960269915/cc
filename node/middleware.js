// ===============express使用的同步中间件
// 中间件机制  处理一些业务，完成后，调用next，会继续执行下面的代码
const middleware1 = (req, res, next) => {
  // 处理一些逻辑
  console.log(1);
  // 处理完成以后，把结果继续返回下一个处理事件
  next()
}

const middleware2 = (req, res, next) => {
  console.log(2);
  setTimeout(() => {
    next()
  }, 2000)
}

const middleware3 = (req, res, next) => {
  console.log(3);
  next()
}


function run(req, res) {
  let middleList = [middleware1, middleware2, middleware3];
  const next = () => {
    let middle = middleList.shift()
    if (middle) {
      middle(req, res, next)
    }
  }
  next()
}

run()