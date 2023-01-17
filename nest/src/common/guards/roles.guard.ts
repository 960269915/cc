import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

// 守卫是一个使用 @Injectable() 装饰器的类。 守卫应该实现 CanActivate 接口。
// 在express等框架中，路由守卫一般由中间件实现

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 获取方法上设置的权限
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      //如果没有绑定任何权限，直接放行
      return true;
    }
    let tf: boolean = true;

    const request = context.switchToHttp().getRequest();
    if (!request.headers.roles) {
      return false;
    }
    const headRoles = request.headers.roles.split(','); //获取前端传递的权限

    headRoles.forEach((element) => {
      if (roles.indexOf(element) < 0) {
        tf = false;
      }
    });

    return tf;
  }
}
