import { Module } from "@nestjs/common";
import { ItensPedidoEntity } from "./entities/itens.entitie";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItensPedidoController } from "./controller/itenspedido.controller";
import { ItensService } from "./service/itens.service";

@Module({


    imports: [TypeOrmModule.forFeature([ItensPedidoEntity])],
    exports: [],
    controllers: [ItensPedidoController],
    providers: [ItensService]

}) export class ItensModule{}