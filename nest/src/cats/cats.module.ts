import {
  Module,
  Global,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { LogMiddle } from '../common/middle/log.middle';

// @Global() 全局模块
// 模块，管理一个对应的程序
@Module({
  controllers: [CatsController], //控制器
  providers: [CatsService], //由 Nest 注入器实例化的提供者，并且可以至少在整个模块中共享
  imports: [], //导入模块的列表
  exports: [CatsService], //导出的模块，其他模块如果imports了CatsModule，就可以使用CatsService
})
export class CatsModule {
  // 局部注册
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LogMiddle)
  //     // .exclude({ path: 'hello', method: RequestMethod.POST }) //排除
  //     .forRoutes('cats');
  //   // .forRoutes({ path: '.*', method: RequestMethod.ALL });
  // }
}
