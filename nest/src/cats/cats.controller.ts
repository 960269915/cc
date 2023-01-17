import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Param,
  HttpException,
  HttpStatus,
  UseFilters,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiBody, ApiQuery, ApiParam } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { UserRole } from './UserRole';
import { MyException } from '../common/exception/my.exception';
import { Mypie } from 'src/common/pie/my.pie';
import { CreateDataDto } from './dto/CreateDataDto';
import { TestDto } from './dto/TestDto';
@Controller('cats')
export class CatsController {
  // 此处为依赖注入，类似java
  constructor(private readonly catsService: CatsService) {}

  @Get('getMsg')
  // ApiQuery是定义在控制机器上的,可定义多个
  @ApiQuery({
    name: 'id',
    description: '请求的id',
    required: false,
  })
  @ApiQuery({
    name: 'role',
    description: '请求的role',
    enum: UserRole,
  })
  getMsg(@Query() query): string {
    console.log(query);
    return 'getMsg';
  }

  @Post('postMsg')
  @ApiBody({ type: TestDto })
  postMsg(@Body() body: TestDto): string {
    console.log(body);
    return 'postMsg';
  }

  // 管道（作用为验证数据和转换数据）
  // @UsePipes(Mypie) //自定义的管道
  @Get('piefn')
  @ApiQuery({
    name: 'id',
  })
  // piefn(@Query('id', new ParseIntPipe()) query) { //使用内置的管道
  //   console.log(typeof query + '===========');
  // }
  piefn(@Query() query) {
    console.log(typeof query.id + '===========');
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: '请求的id',
  })
  findOne(@Param('id') id: string): string {
    console.log(typeof id);

    return `This action returns a #${id} cat`;
  }

  @Get('exception')
  // @UseFilters(MyException) //单个路由使用过滤器，会捕获到方法抛出的异常，也可以设置在控制器上
  exception() {
    throw new HttpException(
      { status: HttpStatus.FORBIDDEN, error: '无权限' },
      HttpStatus.FORBIDDEN,
    );
  }
}
