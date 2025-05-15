import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { UsuarioService } from "../service/usuario.service";
import { UsuarioEntity } from "../entities/usuario.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags('Usuario')
@Controller("/usuarios")
@ApiBearerAuth()

export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<UsuarioEntity[]>{
        return this.usuarioService.findAll(); 

    }
   
    @UseGuards(JwtAuthGuard)
    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id: number ) :Promise<UsuarioEntity>{
        return this.usuarioService.findById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Get("/nome/:usuario")
    @HttpCode(HttpStatus.OK)
    findAllNome(@Param("usuario") usuario: string): Promise<UsuarioEntity[]>{
        return this.usuarioService.findyByNome(usuario)
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    @HttpCode(HttpStatus.OK)
    updateUsuario(@Body() usuario: UsuarioEntity) : Promise <UsuarioEntity>{
        return this.usuarioService.updateusuario(usuario)
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    criarUsuario(@Body() usuario: UsuarioEntity) : Promise <UsuarioEntity> {
        return this.usuarioService.criarUsuario(usuario)
    }


    //desabilitado porque usuario não pode deletar sua conta após criada só adiministradores poderam deletar conta
    // @Delete("/:id")
    // @HttpCode(HttpStatus.NO_CONTENT)
    // deleteUsuario(@Param('id', ParseIntPipe) id: number ) {
    //     return this.usuarioService.deleteUsuario(id)
    // }
}   

