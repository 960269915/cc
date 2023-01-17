import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
@Injectable()
// 中间件是在路由处理程序 之前 调用的函数。 中间件函数可以访问请求和响应对象,以及应用程序请求响应周期中的 next() 中间件函数。 next() 中间件函数通常由名为 next 的变量表示
// 日志中间件
export class LogMiddle implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    const { method, path } = req;
    console.log(method, path);
    next();
  }
}
