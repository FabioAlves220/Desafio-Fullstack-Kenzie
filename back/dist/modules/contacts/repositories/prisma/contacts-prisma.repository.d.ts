import { ContactRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateContactDto } from '../../dto/update-contact.dto';
export declare class ContactsPrismaRepository implements ContactRepository {
    private prisma;
    constructor(prisma: PrismaService);
    delete(id: string): Promise<void>;
    create(data: CreateContactDto, userId: string): Promise<Contact>;
    findOne(id: string): Promise<Contact>;
    private groupby;
    findAll(id: string): Promise<object | Contact[]>;
    update(id: string, data: UpdateContactDto): Promise<Contact>;
}
