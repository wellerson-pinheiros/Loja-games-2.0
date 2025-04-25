import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItensPedidoEntity } from '../entities/itens.entitie';
import { Repository } from 'typeorm';


@Injectable()
export class ItensService {
  constructor(
    @InjectRepository(ItensPedidoEntity)
    private readonly itensPedidoRepository: Repository<ItensPedidoEntity>,
  ) {}

  // função que retorna todos os itens do pedido que no caso seria os jogos.

  async findAll(): Promise<ItensPedidoEntity[]> {
    return await this.itensPedidoRepository.find({
        relations: {
            jogo: true
        },
    });
  }

  async findById(id: number): Promise<ItensPedidoEntity> {
    const itenBuscadoPeloId = await this.itensPedidoRepository.findOne({
      where: {
        id,
      },
      relations: {
        jogo: true
    }
    });
    if (!itenBuscadoPeloId) {
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);
    }
    return itenBuscadoPeloId;
  }

  // Função que cria um novo item no pedido
  async create(item: ItensPedidoEntity): Promise<ItensPedidoEntity> {
    // Calculando o subtotal antes de salvar
    const subtotal = this.calcularSubtotal(item);
    const newItem = this.itensPedidoRepository.create({
      ...item,
      subtotal, // Adicionando o subtotal calculado
    });
    return await this.itensPedidoRepository.save(newItem);
  }



  async update(item: ItensPedidoEntity): Promise<ItensPedidoEntity> {
    const existingItem = await this.findById(item.id);

    if (!existingItem) {
      throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);
    }
    

    // Calculando o novo subtotal
    const subtotal = this.calcularSubtotal(item);

    // Atualizando o item
    const updatedItem = { ...existingItem, ...item, subtotal };

    return await this.itensPedidoRepository.save(updatedItem);
  }

  // Função que deleta um item do pedido
  async remove(id: number): Promise<void> {
    const item = await this.itensPedidoRepository.findOne({
      where: {
        id,
      },
    });
    if (!item) {
      throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.itensPedidoRepository.remove(item);
  }

  // Função que calcula o subtotal com base na quantidade de itens
    // Função que calcula o subtotal com base na quantidade de itens
    private calcularSubtotal(item: ItensPedidoEntity): number {
        const precoUnitario = item.jogo?.precoJogo; // O preço do jogo
        if (!precoUnitario) {
          throw new HttpException('Preço do jogo não encontrado', HttpStatus.BAD_REQUEST);
        }
        return item.quantidade_itens * precoUnitario;
      }
}
