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
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';
import { DevService } from './data/services/dev.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // configuração pro .env ser acessado globalmente
       envFilePath: '.env'
    }),
   ConfigModule.forRoot(),
TypeOrmModule.forRootAsync({
	useClass: DevService,
    imports: [ConfigModule],
}),
    JogosModule,
    CategoriaModule,
    PlataformaModule,
    UsuarioModule,
    PedidoModule,
    ItensModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
