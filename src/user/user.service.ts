import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserSignup } from './dto/user-signup.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    public userRepository: Repository<UserEntity>,
  ) {}

  async signup(UserSignup: UserSignup): Promise<UserEntity> {
    const user = this.userRepository.create(UserSignup);
    return await this.userRepository.save(user);
  }

  create(createUserDto: CreateUserDto) {
    //return 'This action adds a new user';
    return 'hi';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
