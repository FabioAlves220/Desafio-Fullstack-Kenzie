import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entity';
export declare abstract class ContactRepository {
    abstract create(data: CreateContactDto, userId: string): Promise<Contact>;
    abstract findOne(id: string): Promise<Contact | undefined>;
    abstract findAll(group: string | undefined): Promise<Contact[] | object>;
    abstract update(id: string, data: UpdateContactDto): Promise<Contact> | Contact;
    abstract delete(id: string): Promise<void> | void;
}
