import { SetMetadata } from '@nestjs/common';

// 创建自己的角色装饰器
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
