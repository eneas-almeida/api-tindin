import { Router } from 'express';
import { RegisterUserController } from './RegisterUserController';
import { RegisterUserValidator } from './RegisterUserValidator';

export class RegisterUserMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { validate } = new RegisterUserValidator();
        const { handle } = new RegisterUserController();

        router[method](path, validate, handle);
    }
}
