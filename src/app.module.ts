import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
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
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
