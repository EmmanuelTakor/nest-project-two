import { CreateUserDto } from './dto/create.user.dto';
import { UsersService } from './../../../users/users.service';
import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [{ id: 0, name: 'Marius' }];
  findAll() {
    return this.users;
  }
  findById(userId: number) {
    return this.users.find((user) => user.id === userId);
  }
  createUser(createUserDto: CreateUserDto) {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
