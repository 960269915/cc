function log(ctx) {
  console.log(ctx.host, ctx.method, ctx.url);
}

async function logger(ctx, next) {
  log(ctx);
  await next()
}

module.exports = logger;