import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JogosEntity } from "./entities/Jogos.entity";
import { JogosService } from "./service/jogos.service";
import { JogosController } from "./controller/jogos.controller";
import { CategoriaModule } from "../categorias/categoria.module";
import { PlataformaModule } from "../plataforma/plataforma.module";



@Module({
    imports: [TypeOrmModule.forFeature([JogosEntity]),CategoriaModule, PlataformaModule],
    providers: [JogosService],
    controllers: [JogosController],
    exports: []
})


export class JogosModule {}

