import {  Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JogosEntity } from "../Jogos.entity";
import { Repository } from "typeorm";


@Injectable()
export class JogosService {
constructor(
    @InjectRepository(JogosEntity)
    private jogosRepository: Repository <JogosEntity>
){}

// função que retorna todos os jogos cadastrados no banco de dados
async fyndAll(): Promise<JogosEntity[]> {
    return await this.jogosRepository.find()
}

  



}