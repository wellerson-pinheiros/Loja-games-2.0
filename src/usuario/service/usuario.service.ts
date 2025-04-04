import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async findAll(): Promise<UsuarioEntity[]> {
    return await this.usuarioRepository.find();
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
    if (!usuario.id) {
      throw new HttpException('Usuario não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.findById(usuario.id);

    return await this.usuarioRepository.save(usuario);
  }

  async criarUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    
     return await this.usuarioRepository.save(usuario);
  }

  // deletar um jogo pelo seu id
  async deleteUsuario(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.usuarioRepository.delete(id);
  }

}
