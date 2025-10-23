import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicoControllerFindAll } from './controllers/funcionario.controller.findall';
import { ServicoControllerFindOne } from './controllers/funcionario.controller.findone';
import { ServicoControllerCreate } from './controllers/funcionario.controller.create';
import { ServicoControllerUpdate } from './controllers/funcionario.controller.update';
import { ServicoControllerRemove } from './controllers/funcionario.controller.remove';
import { ServicoServiceCreate } from './service/servico.service.create';
import { ServicoServiceUpdate } from './service/servico.service.update';
import { ServicoServiceFindAll } from './service/servico.service.findall';
import { ServicoServiceFindOne } from './service/servico.service.findone';
import { ServicoServiceRemove } from './service/servico.service.remove';
import { Servico } from './entity/funcionario.entity';

const servicoControllers = [
    ServicoControllerFindAll,
    ServicoControllerFindOne,
    ServicoControllerCreate,
    ServicoControllerUpdate,
    ServicoControllerRemove,
];
const servicoServices=[
  ServicoServiceCreate,
  ServicoServiceUpdate,
  ServicoServiceFindAll,
  ServicoServiceFindOne,
  ServicoServiceRemove,
]

@Module({
  imports: [
    TypeOrmModule.forFeature([Servico]),
  ],
  controllers: [
    ...servicoControllers,
  ],
  providers: [
    ...servicoServices,
  ],
  exports:[
    ...servicoServices,
  ]
})
export class ServicoModule {}
