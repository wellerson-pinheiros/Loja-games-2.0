
import { Module } from "@nestjs/common";

import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaService } from "./service/Categoria.service";
import { CategoriaEntity } from "./entities/Categoria.enitity";
import { CategoriaController } from "./controller/categoria.controller";


@Module({
    imports: [TypeOrmModule.forFeature([CategoriaEntity])],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: []
})

export class CategoriaModule{}