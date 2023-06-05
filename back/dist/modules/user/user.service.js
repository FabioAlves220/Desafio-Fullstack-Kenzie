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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./repositories/user.repository");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        const findUser = await this.usersRepository.findByEmail(createUserDto.email);
        if (findUser) {
            throw new common_1.ConflictException('User already exists');
        }
        const user = await this.usersRepository.create(createUserDto);
        return user;
    }
    async findAll() {
        const users = await this.usersRepository.findAll();
        return users;
    }
    async findOne(id) {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found !');
        }
        return user;
    }
    async findByEmail(email) {
        const user = await this.usersRepository.findByEmail(email);
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.usersRepository.update(id, updateUserDto);
        return user;
    }
    async remove(id) {
        await this.usersRepository.delete(id);
        return;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map