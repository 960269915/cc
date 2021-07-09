const Koa = require("koa");
const app = new Koa();
const logger = require("./middleware/log"); //自己的中间件
// koa 没有自己的中间件，只能使用第三方中间件或者自己的中间件
// koa 不会有req,res,而是使用context,context包含原生的req,res和koa的req，res等
app.use(logger);
app.use((context, next) => {
  // console.log(context);
  context.body = "hello-koa"
})

app.listen("9090")