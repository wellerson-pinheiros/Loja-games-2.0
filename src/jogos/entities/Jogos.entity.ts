import { IsNotEmpty } from "class-validator";
import { CategoriaEntity } from "../../categorias/entities/Categoria.enitity";
import { ItensPedidoEntity } from "../../itenspedido/entities/itens.entitie";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PlataformaEntity } from "src/plataforma/entities/plataforma.entity";

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

    @ManyToOne(() => CategoriaEntity, (categoria) => categoria.jogos, {
        onDelete: 'CASCADE' // ou CASCADE, dependendo do comportamento desejado
      })
      categoria: CategoriaEntity;

      @ManyToOne(() => PlataformaEntity, (plataforma) => plataforma.jogos, {
        onDelete: 'CASCADE'
      })
      plataforma: PlataformaEntity;
    }