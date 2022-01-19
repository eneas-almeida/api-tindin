import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { CreateClasseController } from './CreateClasseController';

export class CreateClasseMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new CreateClasseController();

        router[method](path, authenticate, handle);
    }
}
