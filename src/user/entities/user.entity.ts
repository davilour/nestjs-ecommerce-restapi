import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from '../utility/common/user.roles.enum';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_user_id' })
  id: number;

  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({
    type: 'enum',
    enum: Roles,
    array: true,
    default: [Roles.USER],
  })
  Roles: Roles[];
}
