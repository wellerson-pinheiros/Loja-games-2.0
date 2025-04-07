import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidosEntity } from '../entities/pedido.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';


@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidosEntity)
    private pedidosRepository: Repository<PedidosEntity>,
  ) {}

  async fyndAll(): Promise<PedidosEntity[]> {
    return await this.pedidosRepository.find();
  }

  async findById(id: number): Promise<PedidosEntity> {
    const pedido = await this.pedidosRepository.findOne({
      where: {
        id,
      },
    });
    if (!pedido)
      throw new HttpException(' Pedido não encontrado', HttpStatus.NOT_FOUND);

    return pedido;
  }

  async findByNumeroPedido(numeropedido: string): Promise<PedidosEntity[]> {
    const pedidoBuscado = await this.pedidosRepository.find({
      where: { numeroPedido: ILike(`%${numeropedido}%`) },
    });
    if (pedidoBuscado.length === 0)
      throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);

    return pedidoBuscado;
  }

  async  createPedido(pedido: PedidosEntity): Promise<PedidosEntity> {
    
    return await this.pedidosRepository.save(pedido);
  }

  async updatePedido(pedido: PedidosEntity): Promise<PedidosEntity> {
    if (!pedido.id) {
      throw new HttpException('Pedido não encontrado', HttpStatus.NOT_FOUND);
    }
    await this.findById(pedido.id);
    return await this.pedidosRepository.save(pedido);
  }

  async deletePedido(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.pedidosRepository.delete(id);
  }
}
