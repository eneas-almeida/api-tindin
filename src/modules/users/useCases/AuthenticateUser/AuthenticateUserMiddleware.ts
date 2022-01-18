import { Router } from 'express';
import { AuthenticateUserController } from './AuthenticateUserController';
import { AuthenticateUserValidator } from './AuthenticateUserValidator';

export class AuthenticateUserMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { validate } = new AuthenticateUserValidator();
        const { handle } = new AuthenticateUserController();

        router[method](path, validate, handle);
    }
}
