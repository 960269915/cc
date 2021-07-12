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


router.get("/jump", (ctx, next) => {
  // router.url 参数1路由名称  参数2 params 参数3 query
  ctx.redirect(router.url("nameRouter", {
    id: 100
  }, {
    query: {
      name: "haha"
    }
  }))
})
// 构建具名路由（可以在其他路由里面使用ctx.redirect(路由名字)进行跳转）,相当于重定向能传参
router.get("nameRouter", "/list/:id", (ctx, next) => {
  // console.log(ctx.params);
  // console.log(ctx.query);
  ctx.body = '具有名字的路由'
})


module.exports = router;


// p147