import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Servico } from "../entity/funcionario.entity";

@Injectable()
export class ServicoServiceFindAll{

  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>
  ){}

  async findAll(){
    return await this.servicoRepository.find();
  }
}