import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put, Body, Post, Delete, UseGuards } from "@nestjs/common";
import { PlataformaEntity } from "../entities/plataforma.entity";
import { PlataformaService } from "../service/plataforma.service";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Plataforma")
@UseGuards(JwtAuthGuard)
@Controller("/plataforma")
@ApiBearerAuth()

export class PlataformaController {
    constructor(
        private readonly plataformaService: PlataformaService
    ){}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<PlataformaEntity[]>{
        return this.plataformaService.findAll(); 

    }
   
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number ) :Promise<PlataformaEntity>{
        return this.plataformaService.findById(id)
    }

    @Get("/plataforma/:plataforma")
    @HttpCode(HttpStatus.OK)
    findAllNomePlataforma(@Param("plataforma") plataforma: string): Promise<PlataformaEntity[]>{
        return this.plataformaService.findyByNome(plataforma)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updatePlataforma(@Body() plataforma: PlataformaEntity) : Promise <PlataformaEntity>{
        return this.plataformaService.updateCategoria(plataforma)
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    criarPlataforma(@Body() plataforma: PlataformaEntity) : Promise <PlataformaEntity> {
        return this.plataformaService.criarCategoria(plataforma)
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteCategoria(@Param('id', ParseIntPipe) id: number ) {
        return this.plataformaService.deletePlataforma(id)
    }
}   

