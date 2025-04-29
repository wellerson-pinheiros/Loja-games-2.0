import { JogosEntity } from "src/jogos/entities/Jogos.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_plataforma"})
export class PlataformaEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    nome_plataforma: string;

    @Column({type: 'text', nullable: true})
    descricao_plataforma: string;

    @Column({nullable: true})
    foto_Plataforma: string;

    @OneToMany(() => JogosEntity, jogo => jogo.plataforma, {
        onDelete: 'CASCADE'
      })
      jogos: JogosEntity[];
    }