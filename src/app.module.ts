import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source'; // Corrija o caminho para dataSourceOptions
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserEntity } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([UserEntity]), // Passe UserEntity como uma entidade aqui
    UserModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
