"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const contact_entity_1 = require("../../entities/contact.entity");
let ContactsInMemoryRepository = class ContactsInMemoryRepository {
    constructor() {
        this.database = [];
    }
    update(id, data) {
        const contactIndex = this.database.findIndex((contact) => contact.id === id);
        this.database[contactIndex] = Object.assign(Object.assign({}, this.database[contactIndex]), data);
        return this.database[contactIndex];
    }
    async create(data, userId) {
        const newContact = new contact_entity_1.Contact();
        Object.assign(newContact, Object.assign(Object.assign({}, data), { userId: userId }));
        this.database.push(newContact);
        return newContact;
    }
    delete(id) {
        const contact = this.database.findIndex((contact) => contact.id === id);
        this.database.splice(contact, 1);
    }
    async findOne(id) {
        const contact = this.database.find((contact) => contact.id === id);
        return contact;
    }
    groupby(contacts, key) {
        return contacts.reduce((acc, cur) => {
            (acc[cur[key]] = acc[cur[key]] || []).push(cur);
            return acc;
        }, {});
    }
    async findAll(group) {
        if (group) {
            return this.groupby(this.database, group);
        }
        return this.database;
    }
};
ContactsInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], ContactsInMemoryRepository);
exports.ContactsInMemoryRepository = ContactsInMemoryRepository;
//# sourceMappingURL=contacts.in-memory.repository.js.map