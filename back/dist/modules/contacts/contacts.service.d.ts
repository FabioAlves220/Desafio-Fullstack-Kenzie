import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contacts.repository';
export declare class ContactsService {
    private contactRepository;
    constructor(contactRepository: ContactRepository);
    create(createContactDto: CreateContactDto, userId: string): Promise<import("./entities/contact.entity").Contact>;
    findAll(id: string | undefined): Promise<object | import("./entities/contact.entity").Contact[]>;
    findOne(id: string): Promise<import("./entities/contact.entity").Contact>;
    update(id: string, updateContactDto: UpdateContactDto): Promise<import("./entities/contact.entity").Contact>;
    remove(id: string): Promise<void>;
}
