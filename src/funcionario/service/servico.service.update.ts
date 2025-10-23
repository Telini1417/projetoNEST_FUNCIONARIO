import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ServicoRequest } from "../dto/request/funcionario.request";
import { ConverterServico } from "../dto/converter/servico.converter";
import { Servico } from "../entity/funcionario.entity";

@Injectable()
export class ServicoServiceUpdate{

  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>
  ){}

  async update(id:number, servicoRequest:ServicoRequest){

    const servico = ConverterServico.toServico(servicoRequest);

    // Buscar o serviço existente
    const existingServico = await this.servicoRepository.findOne({
      where: { servicoId: id }
    });

    if (!existingServico) {
      throw new Error('Serviço não encontrado');
    }

    // Atualizar os dados mantendo o createdAt
    const updatedServico = {
      ...existingServico,
      ...servico,
      createdAt: existingServico.createdAt // Preservar a data de criação
    };

    const savedServico = await this.servicoRepository.save(updatedServico);

    const servicoResponse = ConverterServico.toServicoResponse(savedServico);
    return servicoResponse;
  }
}