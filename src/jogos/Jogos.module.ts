import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JogosEntity } from "./entities/Jogos.entity";
import { JogosController } from "./entities/controller/jogos.controller";
import { JogosService } from "./entities/service/jogos.service";


@Module({
    imports: [TypeOrmModule.forFeature([JogosEntity])],
    providers: [JogosService],
    controllers: [JogosController],
    exports: []
})


export class JogosModule {}

