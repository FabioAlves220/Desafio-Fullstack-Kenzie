import { AuthService } from './auth.service';
import { LoginDTO } from './dtos/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: LoginDTO): Promise<{
        token: string;
    }>;
}
