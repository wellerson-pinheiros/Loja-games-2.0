import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./entities/usuario.entity";
import { UsuarioService } from "./service/usuario.service";
import { UsuarioController } from "./controller/usuario.controller";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    providers: [UsuarioService],
    exports: [],
    controllers: [UsuarioController]
})
export class UsuarioModule{}