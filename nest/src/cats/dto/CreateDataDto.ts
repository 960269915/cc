// 请求负载 限制客户端传入的参数
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from '../UserRole';
import { IsString, IsInt, IsArray, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateDataDto {
  // ApiProperty 是定义在dto上的
  @ApiProperty({
    description: '名称字段-字符串',
    default: 'cc',
    // required: false,
  })
  @ApiPropertyOptional() //非必填
  @IsString({
    message: '必须传入字符串',
  })
  readonly name: string;
  @ApiProperty({
    description: '年龄字段-数字',
    default: 1,
    type: Number, //手动指定类型
  })
  // @Type(() => Number)
  @IsInt()
  readonly age: number;

  // @Type(() => Array)
  @IsArray()
  @ApiProperty({ description: '数组' })
  readonly list: string[];

  @ApiProperty({ enum: UserRole })
  @IsEnum(UserRole)
  role: UserRole;
}
