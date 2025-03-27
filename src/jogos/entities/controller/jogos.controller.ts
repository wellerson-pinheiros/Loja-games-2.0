import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { JogosService } from "../service/jogos.service";
import { JogosEntity } from "../Jogos.entity";

@Controller("/jogos")

export class JogosController {
    constructor(
        private readonly jogosService: JogosService 
    ){}

    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<JogosEntity[]>{
        return this.jogosService.fyndAll(); 

    }
   

}