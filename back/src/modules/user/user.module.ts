import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserInMemoryRepository } from './repositories/in-memory/user.in-memory.repository';
import { PrismaService } from 'src/database/prisma.service';
import { UsersPrismaRepository } from './repositories/prisma/user-prisma.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: UserRepository,
      // useClass: UserInMemoryRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
