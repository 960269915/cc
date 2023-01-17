import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/guards/roles.decorator';

// 密码加密开始
import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';
// 解密开始

@UseGuards(RolesGuard)
@Controller('user')
export class UserController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local')) //这里是使用local.strategy的代码，而不使用默认的路由守卫，应为注册的时候，不需要守卫
  @Post('login')
  login(@Request() req) {
    return this.authService.createJwt(req.user);
  }
  @UseGuards(AuthGuard('jwt')) //启用token的验证,
  @Get('userInfo')
  @Roles('admin') //此处同时开启角色验证
  userInfo(@Request() req) {
    // req.user;为当前req的固定参数，是经过jwt的validate返回的数据
    return req.user;
  }

  //加密密码 todo
  @Post('codePassword')
  async codePassword() {
    // 加密
    const iv = randomBytes(16);
    const password = 'Password used to generate key';

    // 密钥长度取决于算法
    // 在 aes256 情况下是 32 个字节长度
    const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const textToEncrypt = 'Nest';
    const encryptedText = Buffer.concat([
      cipher.update(textToEncrypt),
      cipher.final(),
    ]);
    // 解密
    const decipher = createDecipheriv('aes-256-ctr', key, iv);
    const decryptedText = Buffer.concat([
      decipher.update(encryptedText),
      decipher.final(),
    ]);
    console.log(decryptedText);
  }
}
