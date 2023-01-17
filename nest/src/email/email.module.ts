import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
// @Global() 全局模块
// 模块，管理一个对应的程序
@Module({
  controllers: [EmailController], //控制器
  providers: [EmailService],
})
export class EmailModule {}
