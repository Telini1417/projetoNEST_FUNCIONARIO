import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  // @CreateDateColumn({ name: 'CRIADO_EM' })
  // createdAt!: Date;

  // @UpdateDateColumn({ name: 'ATUALIZADO_EM' })
  // updatedAt!: Date;

  constructor(data: Partial<BaseEntity> = {}) {
    Object.assign(this, data);
  }
}
