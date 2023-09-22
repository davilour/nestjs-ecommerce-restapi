import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';

export class UserSignup {
  @IsNotEmpty({ message: 'O campo "name" não pode ser vazio' })
  @IsString({ message: 'O campo "name" deve ser uma string' })
  name: string;

  @IsNotEmpty({ message: 'O campo "email" não pode ser vazio' })
  @IsEmail({}, { message: 'Envie um email válido' })
  email: string;

  @IsNotEmpty({ message: 'O campo "password" não pode ser vazio' })
  @Length(5, 100, { message: 'Mínimo de 5 caracteres' })
  password: string;
}
