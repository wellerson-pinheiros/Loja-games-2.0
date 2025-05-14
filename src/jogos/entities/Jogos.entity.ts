import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { CategoriaEntity } from "../../categorias/entities/Categoria.enitity";
import { ItensPedidoEntity } from "../../itenspedido/entities/itens.entitie";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PlataformaEntity } from "src/plataforma/entities/plataforma.entity";
import { NumericTransformer } from "../../../util/numerictrasform";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name:'tb_jogostwozero'})
export class JogosEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({length: 100} )
    @ApiProperty()
    nomeJogo: string;

    @ApiProperty()
    @IsNumber({ maxDecimalPlaces: 2 })
    @IsPositive()
    @IsNotEmpty()
    @Column({type: "decimal", precision: 10, scale: 2 ,nullable: false, transformer: new NumericTransformer()})
    precoJogo: number;

    @ApiProperty()
    @Column({ type: "text", nullable: true })
    descricao: string;

    @ApiProperty()
    @Column ({type: "text", nullable:true })
    fotoJogo: string;
     
    @ApiProperty()
    @Column({type: "date", nullable: true})
    dataLançamento: Date

    @ApiProperty({ type: () => ItensPedidoEntity })
    @OneToMany(() => ItensPedidoEntity, (itemPedidos) => itemPedidos.jogo)
    itensPedido: ItensPedidoEntity[];

    @ApiProperty()
    @ManyToOne(() => CategoriaEntity, (categoria) => categoria.jogos, {
        onDelete: 'CASCADE' // ou CASCADE, dependendo do comportamento desejado
      })
      categoria: CategoriaEntity;

      @ApiProperty()
      @ManyToOne(() => PlataformaEntity, (plataforma) => plataforma.jogos, {
        onDelete: 'CASCADE'
      })
      plataforma: PlataformaEntity;
    }