import { ApiProperty } from '@nestjs/swagger';
import { JogosEntity } from '../../jogos/entities/Jogos.entity';
import { PedidosEntity } from '../../pedido/entities/pedido.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { NumericTransformer } from '../../../util/numerictrasform';

@Entity({ name: 'tb_itens_pedido' })
export class ItensPedidoEntity {
  
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  quantidade_itens: number;

  @ApiProperty()
  @Column({ type: 'decimal', nullable: true, transformer: new NumericTransformer})
  subtotal: number;

  @ApiProperty({ type: () => JogosEntity })
  @ManyToOne(() => JogosEntity, (jogo) => jogo.itensPedido, {
    onDelete: "CASCADE"
  })
  jogo:JogosEntity; 

  @ApiProperty()
  @ManyToOne(() => PedidosEntity, pedido => pedido.itens)
  pedido: PedidosEntity;
}
