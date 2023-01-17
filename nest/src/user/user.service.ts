import { Injectable } from '@nestjs/common';

type User = { id: string; userName: string; password: string };

@Injectable()
export class UserService {
  users: User[];
  constructor() {
    this.users = [{ id: '1', userName: 'cc', password: '123' }];
  }
  async findUser(userName: string): Promise<User | undefined> {
    return this.users.find((item) => item.userName == userName);
  }
}
