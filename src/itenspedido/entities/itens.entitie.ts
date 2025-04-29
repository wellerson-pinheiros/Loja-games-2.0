import { JogosEntity } from '../../jogos/entities/Jogos.entity';
import { PedidosEntity } from '../../pedido/entities/pedido.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_itens_pedido' })
export class ItensPedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade_itens: number;


  @Column({ type: 'decimal', nullable: true})
  subtotal: number;

  @ManyToOne(() => JogosEntity, (jogo) => jogo.itensPedido, {
    onDelete: "CASCADE"
  })
  jogo:JogosEntity; 

  @ManyToOne(() => PedidosEntity, pedido => pedido.itens)
  pedido: PedidosEntity;
}
