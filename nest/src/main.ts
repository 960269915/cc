import { NestFactory } from '@nestjs/core';

import { middleAll } from './common/middle/all.middle';
import { MyException } from './common/exception/my.exception';
import { Mypie } from './common/pie/my.pie';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  // 全局中间件
  app.use(middleAll);

  // 全局过滤器
  app.useGlobalFilters(new MyException());

  // 全局管道
  app.useGlobalPipes(new Mypie());
  app.useGlobalPipes(new ValidationPipe({ transform: true })); //开启转换，比如把字符串的number 转为 number

  // 丝袜哥的配置
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
