import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JogosService } from "../service/jogos.service";
import { JogosEntity } from "../entities/Jogos.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";


@ApiTags("jogos")
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller("/jogos")

export class JogosController {
    constructor(
        private readonly jogosService: JogosService 
    ){}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<JogosEntity[]>{
        return this.jogosService.fyndAll(); 

    }
   
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number ) :Promise<JogosEntity>{
        return this.jogosService.findById(id)
    }

    @Get("/nomejogos/:nomejogos")
    @HttpCode(HttpStatus.OK)
    findAllNomeJogo(@Param("nomejogos") nomejogos: string): Promise<JogosEntity[]>{
        return this.jogosService.findByNomeJogo(nomejogos)
    }

    @Put("/:atualizarjogo")
    @HttpCode(HttpStatus.OK)
    updateJogo(@Body() jogo: JogosEntity) : Promise <JogosEntity>{
        return this.jogosService.updateJogo(jogo)
    }

    @Post("/:criarjogo")
    @HttpCode(HttpStatus.OK)
    criarJogo(@Body() jogo: JogosEntity) : Promise <JogosEntity> {
        return this.jogosService.criarJogo(jogo)
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteJogos(@Param('id', ParseIntPipe) id: number ) {
        return this.jogosService.deleteJogos(id)
    }

    // jogo filtrado por categoria 
    @Get('/categoria/:id')
    @HttpCode(HttpStatus.OK)
    findByCategoria(@Param('id', ParseIntPipe) id: number): Promise<JogosEntity[]> {
        return this.jogosService.findByCategoriaId(id);
}
}   

