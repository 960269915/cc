const Router = require("@koa/router");
const router = new Router();
const userRouter = require("./router-son");
router.get("/", async (ctx, next) => {
  ctx.body = "home"
})

router.get("/goods/:id", async (ctx, next) => {
  const id = ctx.request.params.id;
  ctx.body = id;
})

// 具有中间件的路由 koa建议每个函数都写成 async
router.get("/middle/:id", async (ctx, next) => {
  const id = ctx.request.params.id;
  ctx.body = id;
  // 中间件是先往下，拿到结果后，再返回
  let result = await next(); //await 是拿到下个中间件的值
  console.log(result);
}, () => {
  return '中间件的值'
})

// 转发（重定向）
router.get('/redirect', async (ctx, next) => {
  ctx.redirect("/")
})

// 带有子路由的
router.use("/user", userRouter.routes())

module.exports = router;


// p147