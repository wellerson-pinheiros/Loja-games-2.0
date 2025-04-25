import { IsNotEmpty, isNotEmpty } from "class-validator";
import { ItensPedidoEntity } from "src/itenspedido/entities/itens.entitie";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tb_jogostwozero'})
export class JogosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100} )
    nomeJogo: string;

    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2 ,nullable: false})
    precoJogo: number;

    @Column({ type: "text", nullable: true })
    descricao: string;

    @Column ({type: "text", nullable:true })
    fotoJogo: string;
     
    @Column({type: "date", nullable: true})
    dataLançamento: Date

    @OneToMany(() => ItensPedidoEntity, (itemPedidos) => itemPedidos.jogo)
    itensPedido: ItensPedidoEntity[];
}