import { Injectable } from '@nestjs/common';
import { ContactRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsPrismaRepository implements ContactRepository {
  constructor(private prisma: PrismaService) {}
  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({ where: { id: id } });
  }

  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        email: contact.email,
        telefone: contact.telefone,
        userId,
      },
    });

    return newContact;
  }
  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    });
    return contact;
  }

  private groupby(contacts: Contact[], key: string) {
    return contacts.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }
  async findAll(id: string): Promise<object | Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: { userId: id },
    });
    return contacts;
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });
    return plainToInstance(Contact, contact);
  }
}
