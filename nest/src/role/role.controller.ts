import { Controller, Get, Query, UseGuards, SetMetadata } from '@nestjs/common';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/guards/roles.decorator';
@Controller('role')
@UseGuards(RolesGuard) //使用守卫方法
export class RoleController {
  @Get('fetch')
  @Roles('admin', 'user') //绑定的具体的角色权限
  fetch(): string {
    return '验证通过';
  }
}
