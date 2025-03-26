import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JogosEntity } from "./entities/Jogos.entity";


@Module({
    imports: [TypeOrmModule.forFeature([JogosEntity])],
    providers: [],
    controllers: [],
    exports: []
})


export class JogosModule {}

