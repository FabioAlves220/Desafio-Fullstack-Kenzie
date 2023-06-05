import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactRepository) {}

  async create(createContactDto: CreateContactDto, userId: string) {
    const contact = await this.contactRepository.create(
      createContactDto,
      userId,
    );
    return contact;
  }

  async findAll(id: string | undefined) {
    return this.contactRepository.findAll(id);
  }

  async findOne(id: string) {
    const findContact = await this.contactRepository.findOne(id);
    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return findContact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const repoContact = await this.contactRepository.findOne(id);
    if (!repoContact) {
      throw new NotFoundException('Contact not found');
    }
    const contact = await this.contactRepository.update(id, updateContactDto);
    return contact;
  }

  async remove(id: string) {
    const repoContact = await this.contactRepository.findOne(id);
    if (!repoContact) {
      throw new NotFoundException('User not found.');
    }
    await this.contactRepository.delete(id);
  }
}
