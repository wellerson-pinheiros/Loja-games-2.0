import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Put, Body, Post, Delete } from "@nestjs/common";
import { CategoriaEntity } from "../entities/Categoria.enitity";
import { CategoriaService } from "../service/Categoria.service";

@Controller("/categoria")

export class CategoriaController {
    constructor(
        private readonly categoriaService: CategoriaService
    ){}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<CategoriaEntity[]>{
        return this.categoriaService.findAll(); 

    }
   
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number ) :Promise<CategoriaEntity>{
        return this.categoriaService.findById(id)
    }

    @Get("/categoria/:categoria")
    @HttpCode(HttpStatus.OK)
    findAllNomeCategoria(@Param("categoria") categoria: string): Promise<CategoriaEntity[]>{
        return this.categoriaService.findyByNome(categoria)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateCategoria(@Body() categoria: CategoriaEntity) : Promise <CategoriaEntity>{
        return this.categoriaService.updateCategoria(categoria)
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    criarCategoria(@Body() categoria: CategoriaEntity) : Promise <CategoriaEntity> {
        return this.categoriaService.criarCategoria(categoria)
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteCategoria(@Param('id', ParseIntPipe) id: number ) {
        return this.categoriaService.deleteCategoria(id)
    }
    
}   

