import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put, Body, Post, Delete, UseGuards } from "@nestjs/common";
import { PedidosEntity } from "../entities/pedido.entity";
import { PedidoService } from "../service/pedido.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("pedidos")
@UseGuards(JwtAuthGuard)
@Controller("/pedidos")
@ApiBearerAuth()

export class PedidosController {
    constructor(
        private readonly pedidosService: PedidoService
    ){}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<PedidosEntity[]>{
        return this.pedidosService.fyndAll(); 

    }
   
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number ) :Promise<PedidosEntity>{
        return this.pedidosService.findById(id)
    }

    @Get("/numeropedido/:numeropedido")
    @HttpCode(HttpStatus.OK)
    findAllNomeJogo(@Param("numeropedido") numeropedido: string): Promise<PedidosEntity[]>{
        return this.pedidosService.findByNumeroPedido(numeropedido)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateJogo(@Body() pedido: PedidosEntity) : Promise <PedidosEntity>{
        return this.pedidosService.updatePedido(pedido)
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    criarJogo(@Body() pedido: PedidosEntity) : Promise <PedidosEntity> {
        return this.pedidosService.createPedido(pedido)
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteJogos(@Param('id', ParseIntPipe) id: number ) {
        return this.pedidosService.deletePedido(id)
    }
}   
