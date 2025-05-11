import { Transform, TransformFnParams } from 'class-transformer';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import {
  Column,

  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tb_usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome_usuario: string;

  @IsNotEmpty()
  @IsEmail()
  @Column({ length: 255 })
  email: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @MinLength(8, { message: 'A senha deve ter no minimo 8 caracters' })
  @IsNotEmpty()
  @Column()
  senha: string;

  
  @Column({length: 5000, nullable: true }) 
  foto: string;

  // Armazena apenas a data (ano, mês e dia) da criação da conta
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao_conta: Date;

  // Armazena a data e hora do último login
  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  data_ultimo_login: Date;
}
