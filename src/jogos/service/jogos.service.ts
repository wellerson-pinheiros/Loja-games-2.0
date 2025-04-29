import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DeleteResult, ILike, Repository } from 'typeorm';
import { JogosEntity } from '../entities/Jogos.entity';
import { CategoriaService } from 'src/categorias/service/Categoria.service';
import { PlataformaService } from 'src/plataforma/service/plataforma.service';

@Injectable()
export class JogosService {
  constructor(
    @InjectRepository(JogosEntity)
    private jogosRepository: Repository<JogosEntity>,
    private categoriaService: CategoriaService,
    private  plataformaService: PlataformaService
  ) {}

  // função que retorna todos os jogos cadastrados no banco de dados
  async fyndAll(): Promise<JogosEntity[]> {
    return await this.jogosRepository.find({
      relations:{
        
        categoria: true,
        plataforma:true
    },
    });
  }

  async findById(id: number): Promise<JogosEntity> {
    const jogo = await this.jogosRepository.findOne({
      where: {
        id,
      },
      relations:{
        
        categoria: true,
        plataforma: true
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
       
        categoria:true,
        plataforma:true
    },
    });
    if (jogoBuscadoPorNome.length === 0)
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);

    return jogoBuscadoPorNome;
  }

  // método que buscara todos os jogos pela sua categoria
  async findByCategoriaId(categoriaId: number): Promise<JogosEntity[]> {
    return this.jogosRepository.find({
      where: {
        categoria: { id: categoriaId }
      },
      relations: {
        categoria: true,
        plataforma: true
      }
    });
  }

  
  async fyndByPlataforma (plataformaJogo: number): Promise<JogosEntity[]> {
    const jogosBuscadoPorPLataforma = await this.jogosRepository.find({
        where:{
            plataforma: {id: plataformaJogo}
        }
    });
    if (jogosBuscadoPorPLataforma.length === 0)
        throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);
  
      return jogosBuscadoPorPLataforma;
}

  // atualizar um dado do jogo essa ação sera possivel só por usuarios admin!

  async updateJogo(jogos: JogosEntity): Promise<JogosEntity> {
    if(!jogos.id){
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);
    }
    
    //validação para saber se o jogo tem um categoria e uma plataforma salva, estando correto salva no banco de dados.
    await this.findById(jogos.id);
    await this.findByCategoriaId(jogos.categoria.id)
    await this.fyndByPlataforma(jogos.plataforma.id)
    return await this.jogosRepository.save(jogos);
  }

  // criar um jogo no banco de dados
  async criarJogo(jogos: JogosEntity): Promise<JogosEntity> {
    //validação ao criar um jogo se tem uma plataforma e uma categoria
    await this.findByCategoriaId(jogos.categoria.id)
    await this.fyndByPlataforma(jogos.plataforma.id)
    return await this.jogosRepository.save(jogos);
  }

  // deletar um jogo pelo seu id
  async deleteJogos(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.jogosRepository.delete(id);
  }
}
