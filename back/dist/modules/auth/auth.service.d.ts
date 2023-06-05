import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(userEmail: string, userPassword: string): Promise<{
        email: string;
    }>;
    login(email: string): Promise<{
        token: string;
    }>;
}
