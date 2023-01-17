import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  Catch,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
// 自定义异常
@Catch(HttpException)
export class MyException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
      text: exception.message,
    });
  }
}
