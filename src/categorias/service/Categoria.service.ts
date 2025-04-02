import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntity } from '../entities/Categoria.enitity';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(CategoriaEntity)
    private categoriaRepository: Repository<CategoriaEntity>,
  ) {}

  async findAll(): Promise<CategoriaEntity[]> {
    return await this.categoriaRepository.find();
  }

  async findById(id: number): Promise<CategoriaEntity> {
    const categoriaBuscada = await this.categoriaRepository.findOne({
      where: {
        id,
      },
    });
    if (!categoriaBuscada)
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);

    return categoriaBuscada;
  }
  async findyByNome(nomeCategoria: string): Promise<CategoriaEntity[]> {
    const categiraBuscadaPorNome = await this.categoriaRepository.find({
      where: {
        nomeCategoria: ILike(`%${nomeCategoria}%`),
      },
    });
    if (categiraBuscadaPorNome.length === 0)
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);

    return categiraBuscadaPorNome;
  }

  async updateCategoria(categoria: CategoriaEntity): Promise<CategoriaEntity> {
    if (!categoria.id) {
      throw new HttpException('Categoria não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.findById(categoria.id);
    return await this.categoriaRepository.save(categoria);
  }

  async criarCategoria(categoria: CategoriaEntity): Promise<CategoriaEntity> {
    return await this.categoriaRepository.save(categoria);
  }

  // deletar um jogo pelo seu id
  async deleteCategoria(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.categoriaRepository.delete(id);
  }
}
