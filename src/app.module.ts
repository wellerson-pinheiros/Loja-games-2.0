import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { JogosEntity } from './jogos/entities/Jogos.entity';
import { JogosModule } from './jogos/Jogos.module';

import { CategoriaEntity } from './categorias/entities/Categoria.enitity';
import { CategoriaModule } from './categorias/categoria.module';
import { PlataformaModule } from './plataforma/plataforma.module';
import { PlataformaEntity } from './plataforma/entities/plataforma.entity';


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
      entities: [JogosEntity,CategoriaEntity,PlataformaEntity],
      synchronize: true,
    }),
    JogosModule,
    CategoriaModule,
    PlataformaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
