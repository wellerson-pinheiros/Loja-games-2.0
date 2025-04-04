import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UsuarioService } from "../service/usuario.service";
import { UsuarioEntity } from "../entities/usuario.entity";


@Controller("/usuario")

export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService
    ){}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<UsuarioEntity[]>{
        return this.usuarioService.findAll(); 

    }
   
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number ) :Promise<UsuarioEntity>{
        return this.usuarioService.findById(id)
    }

    @Get("/nome/:usuario")
    @HttpCode(HttpStatus.OK)
    findAllNomePlataforma(@Param("usuario") usuario: string): Promise<UsuarioEntity[]>{
        return this.usuarioService.findyByNome(usuario)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updatePlataforma(@Body() usuario: UsuarioEntity) : Promise <UsuarioEntity>{
        return this.usuarioService.updateusuario(usuario)
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    criarPlataforma(@Body() usuario: UsuarioEntity) : Promise <UsuarioEntity> {
        return this.usuarioService.criarUsuario(usuario)
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteCategoria(@Param('id', ParseIntPipe) id: number ) {
        return this.usuarioService.deleteUsuario(id)
    }
}   

