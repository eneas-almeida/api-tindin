import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { UpdateClasseController } from './UpdateClasseController';

export class UpdateClasseMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new UpdateClasseController();

        router[method](path, authenticate, handle);
    }
}
