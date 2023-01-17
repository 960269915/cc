import { CreateDataDto } from './CreateDataDto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
// import { IsNotEmpty, IsString,ArrayNotEmpty } from 'class-validator';

// export class TestDto {
//   @ApiProperty({
//     description: '对象',
//   })
//   @ValidateNested()
//   @Type(() => CreateDataDto)
//   @IsNotEmpty()
//   readonly obj: CreateDataDto;
// }

import {
  IsNumber,
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @Type(() => Number)
  age?: number;
}

export class TestDto {
  @IsArray()
  @ArrayNotEmpty()
  // 对象校验需要开启ValidateNested
  @ValidateNested()
  //且设置type
  @Type(() => UserDto)
  readonly list: UserDto[];
}
