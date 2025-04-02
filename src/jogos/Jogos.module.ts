import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JogosEntity } from "./entities/Jogos.entity";
import { JogosService } from "./service/jogos.service";
import { JogosController } from "./controller/jogos.controller";



@Module({
    imports: [TypeOrmModule.forFeature([JogosEntity])],
    providers: [JogosService],
    controllers: [JogosController],
    exports: []
})


export class JogosModule {}

