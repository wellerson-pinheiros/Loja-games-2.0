import { ApiProperty } from "@nestjs/swagger";
import { JogosEntity } from "src/jogos/entities/Jogos.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_plataforma"})
export class PlataformaEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({length: 255})
    nome_plataforma: string;

    @ApiProperty()
    @Column({type: 'text', nullable: true})
    descricao_plataforma: string;

    @ApiProperty()
    @Column({length: 5000,nullable: true})
    foto_Plataforma: string;

    @ApiProperty()
    @OneToMany(() => JogosEntity, jogo => jogo.plataforma, {
        onDelete: 'CASCADE'
      })
      jogos: JogosEntity[];
    }