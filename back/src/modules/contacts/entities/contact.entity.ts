import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  date: Date;
  name: string;
  email: string;
  telefone: string;
  user_id?: string;

  constructor() {
    this.id = randomUUID();
  }
}
