// =========================使用第三方的路由

const Koa = require("koa");
const app = new Koa();
const router = require('./router/koa-router'); //使用第三方路由
// const router = require("./router/router") //自己的路由
// app.use(async (context, next) => {
//   const html = await router(context.url);
//   context.body = html
// })

app.use(router.routes())
app.listen("9999")