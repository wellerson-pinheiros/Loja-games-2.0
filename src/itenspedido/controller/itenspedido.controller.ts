import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ItensService } from '../service/itens.service';
import { ItensPedidoEntity } from '../entities/itens.entitie';

@Controller('/itens')
export class ItensPedidoController {
  constructor(private readonly itensService: ItensService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<ItensPedidoEntity[]> {
    return this.itensService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<ItensPedidoEntity> {
    return this.itensService.findById(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateItem(@Body() itens: ItensPedidoEntity): Promise<ItensPedidoEntity> {
    return this.itensService.update(itens);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  criarItem(@Body() itens: ItensPedidoEntity): Promise<ItensPedidoEntity> {
    return this.itensService.create(itens);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteItem(@Param('id', ParseIntPipe) id: number) {
    return this.itensService.remove(id);
  }
}
