import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { CategoriaEntity } from "../../categorias/entities/Categoria.enitity";
import { ItensPedidoEntity } from "../../itenspedido/entities/itens.entitie";
import { JogosEntity } from "../../jogos/entities/Jogos.entity";
import { PedidosEntity } from "../../pedido/entities/pedido.entity";
import { PlataformaEntity } from "../../plataforma/entities/plataforma.entity";
import { UsuarioEntity } from "../../usuario/entities/usuario.entity";



@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
                  host: process.env.DB_HOST,
                  port: parseInt(process.env.DB_PORT || '3306', 10),
                  username: process.env.DB_USER,
                  password: process.env.DB_PASS,
                  database: process.env.DB_DATABASE,
                  entities: [JogosEntity,CategoriaEntity,PlataformaEntity,UsuarioEntity,PedidosEntity,ItensPedidoEntity],
                  synchronize: true,
                
    };
  }
}