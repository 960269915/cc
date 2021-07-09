const Router = require("@koa/router");
const router = new Router();


router.get("/reg", async (ctx, next) => {
  ctx.body = "reg"
})

module.exports = router