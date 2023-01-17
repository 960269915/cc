import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
// @Global() 全局模块
// 模块，管理一个对应的程序
@Module({
  controllers: [RoleController], //控制器
})
export class RoleModule {}
