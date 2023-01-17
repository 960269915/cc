import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { RoleModule } from './role/role.module';
import { EmailModule } from './email/email.module';
import { AuthModule } from './auth/auth.modules';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/guards/roles.guard';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { MailerModule } from '@nestjs-modules/mailer';
import { resolve } from 'path';
import { UserModule } from './user/user.module';
// auueasrqkrnobbbc;
@Module({
  imports: [
    //配置项文件所在地址
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('email'),
      inject: [ConfigService],
    }),
    CatsModule,
    RoleModule,
    EmailModule,
    AuthModule,
    UserModule,
  ],
  //全局守卫
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: RolesGuard,
  //   },
  // ],
})
export class ApplicationModule {}
