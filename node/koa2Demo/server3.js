// ========================获取请求的数据

const Koa = require("koa");
const app = new Koa();
const Router = require("@koa/router");
const myrouter = new Router();
const bodyparse = require("koa-bodyparser") //获取请求参数的中间件
const static = require('koa-static'); //静态资源
const session = require("koa-session-minimal") //session


app.use(bodyparse())
app.use(static('./public')) //静态资源默认地址
app.use(session())

// ====================session 可使用mongo存入数据库
myrouter.get("/session", async (ctx, next) => {
  ctx.session.count = ctx.session.count || 0
  ctx.session.count++
  ctx.body = ctx.session.count
})

// ==========================================获取请求参数
myrouter.get("/reg", async (ctx, next) => {
  const data = ctx.request.query; // 通过params 形式
  ctx.body = data
})

myrouter.post("/signin", async (ctx, next) => {
  const data = ctx.request.body; //urlencodeed 形式
  ctx.body = data
})


// 中间件（洋葱模型，请求的时候，从外到内，相应时候从内到外）
myrouter.get("/middleware", async (ctx, next) => {
  console.log('m1-start');
  await next();
  console.log('m1-end');
}, async (ctx, next) => {
  console.log('m2-start');
  await next();
  console.log('m2-end');
}, async (ctx, next) => {
  console.log('m3-start');
  await next();
  console.log('m3-end');
})

app.use(myrouter.routes())

app.listen("9999")