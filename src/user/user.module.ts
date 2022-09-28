import { Module } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user.respository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
