import { JogosEntity } from "../../jogos/entities/Jogos.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tb_categoria'})

export class CategoriaEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    nomeCategoria: string

    @Column({ type: 'text', nullable:true})
    descricaoCategoria: string


    @OneToMany(() => JogosEntity, (jogo) => jogo.categoria)
    jogos: JogosEntity[];
}
