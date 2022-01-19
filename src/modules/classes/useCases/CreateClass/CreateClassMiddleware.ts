import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { CreateClassController } from './CreateClassController';

export class CreateClassMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new CreateClassController();

        router[method](path, authenticate, handle);
    }
}
