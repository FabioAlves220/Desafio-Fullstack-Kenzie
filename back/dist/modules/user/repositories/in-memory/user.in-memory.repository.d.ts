import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../user.repository';
export declare class UserInMemoryRepository implements UserRepository {
    private database;
    create(data: CreateUserDto): User | Promise<User>;
    findAll(): User[] | Promise<User[]>;
    findOne(id: string): User | Promise<User>;
    findByEmail(email: string): User | Promise<User>;
    update(id: string, data: UpdateUserDto): User | Promise<User>;
    delete(id: string): void | Promise<void>;
}
