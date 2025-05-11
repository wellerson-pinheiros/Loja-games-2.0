import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./entities/usuario.entity";
import { UsuarioService } from "./service/usuario.service";
import { UsuarioController } from "./controller/usuario.controller";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity]),
    forwardRef(()=> AuthModule)
],
    providers: [UsuarioService],
    exports: [UsuarioService],
    controllers: [UsuarioController]
})
export class UsuarioModule{}