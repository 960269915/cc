import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // 验证用户
  async validateUser(userName: string, passWord: string) {
    const user = await this.userService.findUser(userName);
    if (user && user.password == passWord) {
      return { ...user };
    }
    return null;
  }

  // 生成jwt
  async createJwt(user: any) {
    const payload = { username: user.userName, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
