import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JogosEntity } from './jogos/entities/Jogos.entity';
import { JogosModule } from './jogos/Jogos.module';

import { CategoriaEntity } from './categorias/entities/Categoria.enitity';
import { CategoriaModule } from './categorias/categoria.module';
import { PlataformaModule } from './plataforma/plataforma.module';
import { PlataformaEntity } from './plataforma/entities/plataforma.entity';
import { UsuarioEntity } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { PedidoModule } from './pedido/pedido.module';
import { PedidosEntity } from './pedido/entities/pedido.entity';
import { ItensModule } from './itenspedido/itens.module';
import { ItensPedidoEntity } from './itenspedido/entities/itens.entitie';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // configuração pro .env ser acessado globalmente
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [JogosEntity,CategoriaEntity,PlataformaEntity,UsuarioEntity,PedidosEntity,ItensPedidoEntity],
      synchronize: true,
    }),
    JogosModule,
    CategoriaModule,
    PlataformaModule,
    UsuarioModule,
    PedidoModule,
    ItensModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
