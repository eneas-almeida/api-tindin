import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { CreateClassController } from './CreateClassController';
import { CreateClassValidator } from './CreateClassValidator';

export class CreateClassMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { validate } = new CreateClassValidator();
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new CreateClassController();

        router[method](path, validate, authenticate, handle);
    }
}
