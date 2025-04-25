import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, ILike, Repository } from 'typeorm';
import { JogosEntity } from '../entities/Jogos.entity';

@Injectable()
export class JogosService {
  constructor(
    @InjectRepository(JogosEntity)
    private jogosRepository: Repository<JogosEntity>,
  ) {}

  // função que retorna todos os jogos cadastrados no banco de dados
  async fyndAll(): Promise<JogosEntity[]> {
    return await this.jogosRepository.find({
      relations:{
        itensPedido: true
    },
    });
  }

  async findById(id: number): Promise<JogosEntity> {
    const jogo = await this.jogosRepository.findOne({
      where: {
        id,
      },
      relations:{
        itensPedido: true
    },
    });
    if (!jogo)
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);

    return jogo;
  }

  // gunção que retorna um End Point com o nome do jogo encontrado, caso retorne null, retorna erro 400, aqui volta jogos com nomes parecido também
  async findByNomeJogo(nomeJogo: string): Promise<JogosEntity[]> {
    const jogoBuscadoPorNome = await this.jogosRepository.find({
      where: { nomeJogo: ILike(`%${nomeJogo}%`) },
      relations:{
        itensPedido: true
    },
    });
    if (jogoBuscadoPorNome.length === 0)
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);

    return jogoBuscadoPorNome;
  }

  //async findByCategoria(categoriaJogo: string): Promise<JogosEntity[]>{
  //const jogosBuscaCategoria = await this.jogosRepository.find({

  //where:{
  // categoriaJogo,
  //},
  // })
  // }

  // método que buscara todos os jogos pela sua categoria
  /*async fyndByPlataforma (plataformaJogo: string): Promise<JogosEntity[]> {
    const jogosBuscadoPorPLataforma = await this.jogosRepository.find({
        where:{
            plataformaJogo
        }
    });
    if (!jogosBuscadoPorPLataforma)
        throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);
  
      return jogosBuscadoPorPLataforma;
}*/

  // atualizar um dado do jogo essa ação sera possivel só por usuarios admin!

  async updateJogo(jogos: JogosEntity): Promise<JogosEntity> {
    if(!jogos.id){
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.findById(jogos.id);
    return await this.jogosRepository.save(jogos);
  }

  // criar um jogo no banco de dados
  async criarJogo(jogos: JogosEntity): Promise<JogosEntity> {
    
    return await this.jogosRepository.save(jogos);
  }

  // deletar um jogo pelo seu id
  async deleteJogos(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.jogosRepository.delete(id);
  }
}
