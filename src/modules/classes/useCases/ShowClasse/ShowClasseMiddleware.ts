import { AuthUserMiddleware } from '@modules/users/middlewares/AuthUserMiddleware';
import { Router } from 'express';
import { ShowClasseController } from './ShowClasseController';

export class ShowClasseMiddleware {
    public register(router: Router, method: method, path: string): void {
        const { authenticate } = new AuthUserMiddleware();
        const { handle } = new ShowClasseController();

        router[method](path, authenticate, handle);
    }
}
