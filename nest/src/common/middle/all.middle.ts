import { Request, Response } from 'express';
// 全局中间件，只能使用函数式
export function middleAll(req: Request, res: Response, next: () => void) {
  console.log(req.path);
  next();
}
