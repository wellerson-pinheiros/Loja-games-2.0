import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PedidosEntity } from "./entities/pedido.entity";
import { PedidoService } from "./service/pedido.service";
import { PedidosController } from "./controller/pedido.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PedidosEntity])],
    providers: [PedidoService],
    controllers: [PedidosController],
    exports: []
})
export class PedidoModule{}