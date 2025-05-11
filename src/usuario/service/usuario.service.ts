import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
    private bcrypt: Bcrypt
  ) {}

  async findAll(): Promise<UsuarioEntity[]> {
    return await this.usuarioRepository.find();
  }

  async findByUsuario(email: string): Promise<UsuarioEntity| null> {
    return await this.usuarioRepository.findOne({
        where: {
            email: email
        }
    })
}

  async findById(id: number): Promise<UsuarioEntity> {
    const usuarioBuscada = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });
    if (!usuarioBuscada)
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);

    return usuarioBuscada;
  }
  async findyByNome(nome_usuario: string): Promise<UsuarioEntity[]> {
    const usuarioBuscadaPorNome = await this.usuarioRepository.find({
      where: {
        nome_usuario: ILike(`%${nome_usuario}%`),
      },
    });
    if (usuarioBuscadaPorNome.length === 0)
      throw new HttpException('Usuario não encontrada', HttpStatus.NOT_FOUND);

    return usuarioBuscadaPorNome;
  }

  async updateusuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
   
    await this.findById(usuario.id);
    const buscaUsuario = await this.findByUsuario(usuario.email);

    if (buscaUsuario && buscaUsuario.id !== usuario.id)
      throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

    usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
    
    return await this.usuarioRepository.save(usuario);
  }

  async criarUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
      const buscaUsuario = await this.findByUsuario(usuario.email)
      if (buscaUsuario)
        throw new HttpException("O Usuario já existe!", HttpStatus.BAD_REQUEST);
      usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
     return await this.usuarioRepository.save(usuario);
  }

  // deletar um usuario pelo seu Id
  async deleteUsuario(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.usuarioRepository.delete(id);
  }

}
