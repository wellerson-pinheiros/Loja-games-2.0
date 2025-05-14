import { ApiProperty } from "@nestjs/swagger";
import { JogosEntity } from "../../jogos/entities/Jogos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tb_categoria'})

export class CategoriaEntity{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @Column({length: 255})
    @ApiProperty()
    nomeCategoria: string

    @Column({ type: 'text', nullable:true})
    @ApiProperty()
    descricaoCategoria: string

    @ApiProperty()
    @OneToMany(() => JogosEntity, (jogo) => jogo.categoria)
    jogos: JogosEntity[];
}
