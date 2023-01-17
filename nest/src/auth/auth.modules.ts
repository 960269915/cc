import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserService } from 'src/user/user.service';
// @Global() 全局模块
// 模块，管理一个对应的程序
@Module({
  controllers: [AuthController], //控制器
  providers: [AuthService, LocalStrategy, JwtStrategy, UserService],
  imports: [
    // UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, //jwt的秘钥
      signOptions: { expiresIn: '3600s' }, //jwt的有效时间
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
