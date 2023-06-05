"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const contacts_repository_1 = require("./repositories/contacts.repository");
let ContactsService = class ContactsService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async create(createContactDto, userId) {
        const contact = await this.contactRepository.create(createContactDto, userId);
        return contact;
    }
    async findAll(id) {
        return this.contactRepository.findAll(id);
    }
    async findOne(id) {
        const findContact = await this.contactRepository.findOne(id);
        if (!findContact) {
            throw new common_1.NotFoundException('Contact not found');
        }
        return findContact;
    }
    async update(id, updateContactDto) {
        const repoContact = await this.contactRepository.findOne(id);
        if (!repoContact) {
            throw new common_1.NotFoundException('Contact not found');
        }
        const contact = await this.contactRepository.update(id, updateContactDto);
        return contact;
    }
    async remove(id) {
        const repoContact = await this.contactRepository.findOne(id);
        if (!repoContact) {
            throw new common_1.NotFoundException('User not found.');
        }
        await this.contactRepository.delete(id);
    }
};
ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contacts_repository_1.ContactRepository])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map