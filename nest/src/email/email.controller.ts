import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';
@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}
  @Get()
  sendMail() {
    this.emailService.send(
      '恭喜您',
      '亲爱的蔡云宏先生',
      '<h1>你中了一辆闪电公路自行车,请来梦中提取<h1/>',
    );
  }
}
