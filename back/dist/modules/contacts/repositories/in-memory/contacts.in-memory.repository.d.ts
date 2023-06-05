import { ContactRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { UpdateContactDto } from '../../dto/update-contact.dto';
export declare class ContactsInMemoryRepository implements ContactRepository {
    private database;
    update(id: string, data: UpdateContactDto): Contact | Promise<Contact>;
    create(data: CreateContactDto, userId: string): Promise<Contact>;
    delete(id: string): void | Promise<void>;
    findOne(id: string): Promise<Contact>;
    private groupby;
    findAll(group: string): Promise<object | Contact[]>;
}
