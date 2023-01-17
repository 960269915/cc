import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
// 本地身份验证
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userName: string, passWord: string): Promise<any> {
    const user = this.authService.validateUser(userName, passWord);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
