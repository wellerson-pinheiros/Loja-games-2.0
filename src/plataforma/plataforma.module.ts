import { Module } from "@nestjs/common";
import { PlataformaService } from "./service/plataforma.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlataformaEntity } from "./entities/plataforma.entity";
import { PlataformaController } from "./controller/plataforma.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PlataformaEntity])],
    controllers: [PlataformaController],
    providers: [PlataformaService],
    exports: []
})
export class PlataformaModule{}