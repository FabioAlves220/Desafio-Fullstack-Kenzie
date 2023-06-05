"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const node_crypto_1 = require("node:crypto");
class Contact {
    constructor() {
        this.id = (0, node_crypto_1.randomUUID)();
    }
}
exports.Contact = Contact;
//# sourceMappingURL=contact.entity.js.map