import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as path from 'path';

@Injectable()
export class EmailService {
  constructor(private mailService: MailerService) {}
  public send(subject: string, text: string, html: string) {
    this.mailService.sendMail({
      to: '960269915@qq.com', ////接受者 //'xxx@qq.com,xxx@163.com'支持多个邮件
      from: '960269915@qq.com', //邮件显示名" <xxx@qq.com>
      subject: subject, ////主题名
      text: text, //文本
      html: html,
      // template:'template', //当是使用模板时，此处填写模板的名称，./common/template/emali/template
      attachments: [
        //附件
        {
          //当前目录下的文件
          filename: '闪电自行车',
          path: path.resolve(__dirname, '../assets/img/测试图片1.png'),
        },
      ],
    });
  }
}
