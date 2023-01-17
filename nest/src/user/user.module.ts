import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.modules';
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [AuthModule],
})
export class UserModule {}
