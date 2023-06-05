import { Injectable } from '@nestjs/common';
import { ContactRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactsInMemoryRepository implements ContactRepository {
  private database: Contact[] = [];

  update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
    const contactIndex = this.database.findIndex(
      (contact) => contact.id === id,
    );
    this.database[contactIndex] = {
      ...this.database[contactIndex],
      ...data,
    };
    return this.database[contactIndex];
  }

  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const newContact = new Contact();
    Object.assign(newContact, {
      ...data,
      userId: userId,
    });

    this.database.push(newContact);

    return newContact;
  }
  delete(id: string): void | Promise<void> {
    const contact = this.database.findIndex((contact) => contact.id === id);
    this.database.splice(contact, 1);
  }

  async findOne(id: string): Promise<Contact> {
    const contact = this.database.find((contact) => contact.id === id);
    return contact;
  }

  private groupby(contacts: Contact[], key: string) {
    return contacts.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }

  async findAll(group: string): Promise<object | Contact[]> {
    if (group) {
      return this.groupby(this.database, group);
    }
    return this.database;
  }
}
