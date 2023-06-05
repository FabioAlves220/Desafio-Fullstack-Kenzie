import { randomUUID } from 'node:crypto';
import { Exclude } from 'class-transformer';

export class User {
  readonly id: string;
  date: Date;
  name: string;
  email: string;
  telefone: string;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
  }
}
