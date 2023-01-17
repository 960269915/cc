import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // 验证token
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //再次请求 需要head 添加Authorization：Bearer+ access_token
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  async validate(payload: any) {
    // 此处可以查询用户更多的信息等
    return { userId: payload.sub, username: payload.username };
  }
}
