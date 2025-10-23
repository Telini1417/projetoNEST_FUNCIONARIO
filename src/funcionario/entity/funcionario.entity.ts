import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../commons/entity/base.entity';

@Entity('HTL_FUNCIONARIO')
export class Funcionario extends BaseEntity {
  @PrimaryGeneratedColumn('increment', {
    name: 'FUNCIONARIO_ID',
    type: 'number',
  })
  funcionarioId?: number;

  @Column({
    name: 'NOME',
    type: 'varchar2',
    length: 10,
  })
  nome: string = '';

  @Column({
    name: 'DESCRICAO',
    type: 'varchar2',
    length: 50,
  })
  descricao: string = '';

  @Column({
    name: 'VALOR',
    type: 'number',
  })
  valor: number = 0;

  constructor(data: Partial<Funcionario> = {}) {
    super();
    Object.assign(this, data);
  }
}