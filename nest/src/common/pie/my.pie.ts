import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  ValidationError,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
// / 可以识别校验装饰器数据
import { validate } from 'class-validator';
@Injectable()
export class Mypie implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    // value 就是传入的实际数据
    // metatype 就是元数据,其实就是装饰器添加那些
    if (!metatype || !this.toValidate(metatype)) {
      // 如果没有传入验证规则，则不验证，直接返回数据
      return value;
    }
    // 将对象转换为 Class 来验证
    const object = plainToClass(metatype, value);

    const errors = await validate(object, {
      whitelist: true, // 白名单选项
      forbidNonWhitelisted: true, // 禁用非白名单属性选项
      stopAtFirstError: true, // 碰到第一个错误就返回
      forbidUnknownValues: true, // 禁用未知的值
    });

    const errorList: string[] = [];
    const errObjList: ValidationError[] = [...errors];

    do {
      const e = errObjList.shift();
      if (!e) {
        break;
      }
      if (e.constraints) {
        for (const item in e.constraints) {
          if (item === 'whitelistValidation') {
            // 如果是白名单校验错误的，使用自定义的错误语句描述。
            errorList.push(`属性 ${e.property} 未定义!`);
          } else {
            errorList.push(e.constraints[item]);
          }
        }
      }
      if (e.children) {
        errObjList.push(...e.children);
      }
    } while (true);
    if (errorList.length > 0) {
      throw new BadRequestException(`字段校验不通过: ${errorList.join()}`);
      // throw new Error(`Error:请求参数校验错误: ${errorList.join()}`);
    }
    return value;
  }

  // 这个函数的意义就是验证元数据传入的类型是否是定义内的常规类型数据
  private toValidate(metatype: any): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

// class-validator
// https://github.com/typestack/class-validator
