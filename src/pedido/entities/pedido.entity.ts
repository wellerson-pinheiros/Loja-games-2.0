import {

  Column,
  Entity,
  
  Generated,
  
  OneToMany,
  
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StatusPedido } from '../enums/statutusdopedido.enum';

import { ItensPedidoEntity } from '../../itenspedido/entities/itens.entitie';
import { ApiProperty } from '@nestjs/swagger';
import { NumericTransformer } from '../../../util/numerictrasform';


@Entity({name: 'tb_pedidos'})
export class PedidosEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ unique: true })
  @Generated('uuid')
  @ApiProperty()
  numeroPedido: string;

 

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  data_pedido: Date;


  @Column({ type: 'decimal', transformer: new NumericTransformer()})
  @ApiProperty()
  valor_pedido: number;

  @Column({
    type: 'enum',
    enum: StatusPedido,
    default: StatusPedido.PENDENTE // <- esse é o status padrão ao criar o pedido
  })
  @ApiProperty()
  status: StatusPedido;

  @ApiProperty()
  @OneToMany(() => ItensPedidoEntity, item => item.pedido)
  itens: ItensPedidoEntity[];

}


