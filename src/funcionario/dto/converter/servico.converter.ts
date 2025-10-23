
import { Funcionario } from "src/funcionario/entity/funcionario.entity";
import { FuncionarioRequest } from "../request/funcionario.request";
import { FuncionarioResponse } from "../response/funcionario.response";

export class ConverterFuncionario{

  static toFuncionario(funcionarioRequest: FuncionarioRequest){
    const funcionario = new Funcionario();

    if(funcionarioRequest.funcionarioId != null){ //se o id não estiver vazio
      funcionario.funcionarioId = funcionarioRequest.funcionarioId;
    }
    funcionario.nome = funcionarioRequest.nome;
    funcionario.descricao = funcionarioRequest.descricao;
    funcionario.valor = funcionarioRequest.valor;

    return funcionario;
  }

  static toFuncionarioResponse(funcionario: Funcionario){

    const funcionarioResponse = new FuncionarioResponse();
    funcionarioResponse.funcionarioId = funcionario.funcionarioId ?? 0;
    funcionarioResponse.descricao = funcionario.descricao;
    funcionarioResponse.valor = funcionario.valor;
    funcionarioResponse.nome = funcionario.nome;

    return funcionarioResponse;
  }
}