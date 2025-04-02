import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PlataformaEntity } from "../entities/plataforma.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlataformaService{

    constructor(
        @InjectRepository(PlataformaEntity)
        private plataformaService: Repository<PlataformaEntity>
    ){}
   
    
}
