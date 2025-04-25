import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlataformaEntity } from '../entities/plataforma.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class PlataformaService {
  constructor(
    @InjectRepository(PlataformaEntity)
    private plataformaRepository: Repository<PlataformaEntity>
  ) {}

  async findAll(): Promise<PlataformaEntity[]> {
    return await this.plataformaRepository.find();
  }

  async findById(id: number): Promise<PlataformaEntity> {
    const plataformaBuscada = await this.plataformaRepository.findOne({
      where: {
        id,
      },
    });
    if (!plataformaBuscada)
      throw new HttpException(
        'Plataforma não encontrada',
        HttpStatus.NOT_FOUND,
      );

    return plataformaBuscada;
  }
  async findyByNome(nomePlataforma: string): Promise<PlataformaEntity[]> {
    const plataformaBuscadaPorNome = await this.plataformaRepository.find({
      where: {
        nome_plataforma: ILike(`%${nomePlataforma}%`),
      },
    });
    if (plataformaBuscadaPorNome.length === 0)
      throw new HttpException('Plataforma não encontrada', HttpStatus.NOT_FOUND);

    return plataformaBuscadaPorNome;
  }

  async updateCategoria(
    plataforma: PlataformaEntity,
  ): Promise<PlataformaEntity> {
    if (!plataforma.id) {
      throw new HttpException(
        'Plataforma não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.findById(plataforma.id);
    return await this.plataformaRepository.save(plataforma);
  }

  async criarCategoria(
    plataforma: PlataformaEntity,
  ): Promise<PlataformaEntity> {
    return await this.plataformaRepository.save(plataforma);
  }

  // deletar um jogo pelo seu id
  async deletePlataforma(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.plataformaRepository.delete(id);
  }
}
