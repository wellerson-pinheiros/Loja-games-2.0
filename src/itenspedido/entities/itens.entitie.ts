import { JogosEntity } from 'src/jogos/entities/Jogos.entity';
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
  jogo:JogosEntity 
}
