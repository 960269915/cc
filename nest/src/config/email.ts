// // npm install --save nestjs-config  安装包
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
export default {
  transport: {
    service: 'qq', //163、qq等
    auth: {
      user: '960269915@qq.com', //邮箱
      pass: 'auueasrqkrnobbbc', //邮箱密码或授权码
    },
  },
  // 邮件模板配置 可直接使用html字符串
  // template: {
  //   dir: path.join(__dirname, './common/template/emali'),
  //   adapter: new EjsAdapter(),
  //   options: {
  //     strict: true,
  //   },
  // },
};
