import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importe TypeOrmModule corretamente
import { dataSourceOptions } from 'db/data-source';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
