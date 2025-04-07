import {

  Column,
  Entity,
  
  Generated,
  
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StatusPedido } from '../enums/statutusdopedido.enum';
import { v4 as uuidv4 } from 'uuid';


@Entity('name: tb_pedidos')
export class PedidosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Generated('uuid')
  numeroPedido: string;

 

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_pedido: Date;

  @Column({ type: 'decimal' })
  valor_pedido: number;

  @Column({
    type: 'enum',
    enum: StatusPedido,
    default: StatusPedido.PENDENTE // <- esse é o status padrão ao criar o pedido
  })
  status: StatusPedido;
}


