import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}